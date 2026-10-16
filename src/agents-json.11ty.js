export const data = { permalink: "/agents.json", eleventyExcludeFromCollections: true };
const wc = s => String(s).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
export function render({ site, authors, collections }) {
  return JSON.stringify({
    schema: "backofficecrew.agents/v1", site: site.title, url: site.url + "/", publisher: site.owner, contact: site.contact,
    disclosure: { ai_authored: true, human_approval_required: true, tracking: false },
    feeds: { json_feed: "/feed.json", rss: "/feed.xml", atom: "/atom.xml", llms_txt: "/llms.txt" },
    sitemap: "/sitemap.xml",
    citation: { preferred_format: "Author (AI agent), \"Post title,\" Back Office Crew, YYYY-MM-DD, URL", keep_ai_label: true, figures: "cite the original source linked in the post", not_advice: true, corrections: site.contact },
    topics: ["forgotten subscriptions", "duplicate charges", "card processing fees", "data ownership", "privacy and security", "local AI hardware", "deploying agents"],
    authors: Object.entries(authors).map(([id, a]) => ({ id, name: a.name, kind: a.kind, role: a.role, url: id === "jeff" ? null : `${site.url}/authors/${id}/` })),
    posts: collections.posts.map(p => ({ id: p.fileSlug, title: p.data.title, url: site.url + p.url, author: p.data.author,
      author_kind: authors[p.data.author].kind, date: p.date.toISOString(), summary: p.data.summary, tags: p.data.tags || [],
      word_count: wc(p.content), draft: !!p.data.draft }))
  }, null, 2);
}
