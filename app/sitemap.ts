import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";
import config from "@/app/config";

const supabaseUrl = config.supabaseUrl;
const supabaseKey = config.supabaseKey;
const options = {
  db: {
    schema: "public",
  },
};
const supabase = createClient(supabaseUrl, supabaseKey, options);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = "https://akcseuoft.ca";

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${url}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${url}/members`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${url}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${url}/research`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const { data, error } = await supabase
    .from("research")
    .select("id, last_updated_date, published")
    .eq("published", true);

  if (error) {
    console.error(error.message);
  }

  const dynamicUrls: MetadataRoute.Sitemap = (data ?? []).map((res) => ({
    url: `${url}/research/${res.id}`,
    lastModified: res.last_updated_date
      ? new Date(res.last_updated_date)
      : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticUrls, ...dynamicUrls];
}
