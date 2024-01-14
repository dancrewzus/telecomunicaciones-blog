import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { CONSTANTS } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const { SITE_TITLE, SITE_DESCRIPTION } = CONSTANTS;
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts
      .filter((post) => post.data.draft === false)
      .map((post) => ({
        ...post.data,
        link: `/blog/${post.slug}/`,
      })),
  });
}
