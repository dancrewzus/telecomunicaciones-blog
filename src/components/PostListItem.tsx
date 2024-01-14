import type { CollectionEntry } from "astro:content";

export const PostListItem = ({ post }: { post: CollectionEntry<"blog"> }) => {
  const { data, slug } = post;
  const { title, description, pubDate, authors } = data;

  return (
    <div class="post flex flex-col gap-1">
      <h2 class="m-0 text-lg">
        <a
          class="text-link no-underline text-blue-600 hover:text-blue-800"
          href={`/blog/${slug}/`}
        >
          {title}
        </a>
      </h2>
      <p class="text-sm italic">{description}</p>
      <div class="grid grid-rows-3 grid-flow-col gap-4 text-sm text-gray-600 dark:text-white/50">
        <div class="row-span-4 text-left">{authors.join(" & ")}</div>
        <div class="row-span-4 text-right">
          <time datetime={pubDate.toISOString()}>
            {pubDate.toLocaleDateString("es-ES", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </div>
      </div>
    </div>
  );
};
