export const dynamic = "force-dynamic";
export const runtime = "edge";

import HeaderBlock from "./ArticleBlocks/HeaderBlock";
import TextBlock from "./ArticleBlocks/TextBlock";
import TextBoldBlock from "./ArticleBlocks/TextBoldBlock";
import ImageBlock from "./ArticleBlocks/ImageBlock";
import VideoBlock from "./ArticleBlocks/VideoBlock";
import LinkBlock from "./ArticleBlocks/LinkBlock";
import config from "@/app/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default async function ProjectDetail({ params }: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const { data, error } = await supabase
    .from("research")
    .select()
    .eq("published", true)
    .eq("id", id)
    .single();

  if (error || !data) {
    return (
      <main className="bg-background">
        <div className="flex min-h-screen w-full items-center justify-center">
          <p className="text-red-500">Error loading project data.</p>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-background">
      <img
        src={data.preview_img_src}
        className="mx-auto mt-[var(--header-m)] sm:mt-[var(--header)] w-full max-w-4xl bg-white object-cover lg:aspect-auto lg:h-120"
      />
      <div className="wrap mx-auto flex max-w-4xl flex-row">
        <div className="min-h-screen w-full bg-white pb-[5%]">
          <h1 className="mx-auto mt-8 sm:mt-12 text-center text-2xl sm:text-5xl font-semibold sm:font-medium tracking-tight md:max-w-[75%]">
            {data.title}
          </h1>
          <p className="mx-auto mt-1 sm:mt-3 text-center text-[var(--subtitle)] md:max-w-[75%]">
            {data.published_date.split("T")[0]}
          </p>
          <div className="mx-auto mt-1 sm:mt-3 md:max-w-[75%]">
            {data.article_data?.map(
              (
                article: {
                  type: string;
                  content: any;
                  header: string;
                  text: string;
                  image_src: string;
                  video_src: string;
                  link: string;
                  link_title: string;
                },
                index: number,
              ) => {
                switch (article.type) {
                  case "header":
                    return <HeaderBlock key={index} header={article.header} />;
                  case "text":
                    return <TextBlock key={index} text={article.text} />;
                  case "text-bold":
                    return <TextBoldBlock key={index} text={article.text} />;
                  case "image":
                    return (
                      <ImageBlock key={index} image_src={article.image_src} />
                    );
                  case "video":
                    return (
                      <VideoBlock key={index} video_src={article.video_src} />
                    );
                  case "link":
                    return (
                      <LinkBlock
                        key={index}
                        link={article.link}
                        link_title={article.link_title}
                      />
                    );
                  default:
                    return null;
                }
              },
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
