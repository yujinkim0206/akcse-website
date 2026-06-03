import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!
const R2_ACCESS_KEY = process.env.R2_ACCESS_KEY!
const R2_SECRET_KEY = process.env.R2_SECRET_KEY!

const s3 = new S3Client({
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY,
    secretAccessKey: R2_SECRET_KEY,
  },
  region: 'auto',
})

async function uploadBucket(localFolder: string, r2BucketName: string) {
  const dir = path.join('downloaded', localFolder)
  if (!fs.existsSync(dir)) {
    console.log(`Skipping ${localFolder} — folder not found`)
    return
  }

  const files = fs.readdirSync(dir)
  if (files.length === 0) {
    console.log(`Skipping ${localFolder} — no files`)
    return
  }

  for (const filename of files) {
    const filePath = path.join(dir, filename)
    const fileBuffer = fs.readFileSync(filePath)
    const contentType = mime.lookup(filename) || 'application/octet-stream'

    await s3.send(new PutObjectCommand({
      Bucket: r2BucketName,
      Key: filename,
      Body: fileBuffer,
      ContentType: contentType,
    }))

    console.log(`Uploaded: ${r2BucketName}/${filename}`)
  }
}

async function main() {
  const buckets = fs.readdirSync('downloaded')
  for (const bucket of buckets) {
    const r2BucketName = bucket === 'research&literature' ? 'research' : bucket
    console.log(`\nUploading bucket: ${bucket} → ${r2BucketName}`)
    await uploadBucket(bucket, r2BucketName)
  }
  console.log('\nAll done!')
}

main()