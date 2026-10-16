import fs from "node:fs";
// Markdown copy of each published post at /posts/<slug>/index.md, for agents and LLM tools.
export const data = {
  pagination: { data: "collections.posts", size: 1, alias: "post" },
  permalink: ({ post }) => `/posts/${post.fileSlug}/index.md`,
  eleventyExcludeFromCollections: true
};
export function render({ post, site, authors }) {
  const raw = fs.readFileSync(post.inputPath, "utf8").replace(/^---[\s\S]*?\n---\n/, "");
  const a = authors[post.data.author];
  return `# ${post.data.title}\n\n` +
    `- Author: ${a.name} (${a.kind})\n- Date: ${post.date.toISOString().slice(0,10)}\n- Canonical: ${site.url}${post.url}\n- Summary: ${post.data.summary}\n\n` +
    raw.trim() + "\n";
}
