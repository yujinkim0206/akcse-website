import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_ANON_URL!
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!

const BUCKETS = ['hallasan', 'members', 'events', 'research&literature']

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

async function downloadBucket(bucketName: string) {
  const dir = path.join('downloaded', bucketName)
  fs.mkdirSync(dir, { recursive: true })

  const { data: files, error } = await supabase.storage.from(bucketName).list()
  if (error) {
    console.error(`Error listing ${bucketName}:`, error)
    return
  }

  if (!files || files.length === 0) {
    console.log(`No files in bucket: ${bucketName}`)
    return
  }

  for (const file of files) {
    const { data, error: downloadError } = await supabase.storage
      .from(bucketName)
      .download(file.name)

    if (downloadError) {
      console.error(`Failed: ${file.name}`, downloadError)
      continue
    }

    const buffer = Buffer.from(await data.arrayBuffer())
    fs.writeFileSync(path.join(dir, file.name), buffer)
    console.log(`Downloaded: ${bucketName}/${file.name}`)
  }
}

async function main() {
  for (const bucket of BUCKETS) {
    console.log(`\nProcessing bucket: ${bucket}`)
    await downloadBucket(bucket)
  }
  console.log('\nAll done! Check the downloaded/ folder.')
}

main()