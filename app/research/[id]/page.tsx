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

type Props = {
  params: {
    id: string;
  };
};

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default async function ProjectDetail({ params }: Props) {
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
        <div className="w-full min-h-screen flex items-center justify-center">
          <p className="text-red-500">Error loading project data.</p>
        </div>
      </main>
    );
  }
  return (
    <main className="bg-background">
      <div className="flex flex-row lg:pt-[5vh] lg:pb-[5vh] lg:pr-[20vw] lg:pl-[20vw]">
        <div className="pt-0 pb-[5%] w-full min-h-screen bg-white">
          <img
            src={data.preview_img_src}
            className="w-full bg-white object-cover lg:aspect-auto lg:h-120 lg:rounded-lg"
          />
          <h1 className="mt-[16px] max-w-[75%] mx-auto font-bold text-center tracking-tight">
            {data.title}
          </h1>
          <p className="mt-[16px] max-w-[75%] mx-auto text-center text-gray-500">
            {data.published_date}
          </p>
          <div className="mt-[16px] max-w-[75%] mx-auto">
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
                index: number
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
              }
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
