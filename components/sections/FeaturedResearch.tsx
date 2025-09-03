import Button from "@/components/ui/Button";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

type Article = {
        type: string;
        content: any;
        header: string;
        text: string;
        image_src: string;
        video_src: string;
        link: string;
        link_title: string;
      };

export default async function FeaturedResearch() {
  const { data, error } = await supabase
    .from("research")
    .select()
    .eq("published", true)
    .order("published_date", { ascending: false })
    // .limit(1)
    // .single();
    .range(1, 1)
    .maybeSingle();

  if (error) {
    return (
      <section className="wrap section-spacing">
        <p className="text-red-500">Failed to load data: {error.message}</p>
      </section>
    );
  }

  const texts = data.article_data
    ?.filter(
      (article : Article) => article.type === "text",
    )
    ?.map(
      (article : Article) => article.text,
    );

  return (
    <section className="wrap section-spacing flex flex-col items-center justify-between gap-12 md:flex-row md:gap-0">
      <div className="md:w-[50%]">
        <h2 className="text-sm mb-2 text-[var(--subtitle)]">Featured this month</h2>
        <h3 className="section-heading">{data.title}</h3>
        <p className="mb-8 line-clamp-5">{texts}</p>
        <Button href={`/research/${data.id}`} theme="black">
          Learn More
        </Button>
      </div>
      <div className="relative aspect-[3/2] w-full md:w-[45%]">
        <Image
          src={data.preview_img_src}
          alt="Research"
          className="object-cover"
          fill
          sizes="(min-width:768px) 45vw, 100vw"
          unoptimized 
          // delete above after getting proper image URL
        />
      </div>
    </section>
  );
}
