import rss from "@11ty/eleventy-plugin-rss";
const PREVIEW = process.env.PREVIEW === "1";
export default function (cfg) {
  cfg.addPlugin(rss);
  cfg.addPassthroughCopy("src/css");
  cfg.addGlobalData("preview", PREVIEW);
  // Drafts only render in preview builds.
  cfg.addPreprocessor("drafts", "*", (data) => { if (data.draft && !PREVIEW) return false; });
  cfg.addCollection("posts", c => c.getFilteredByGlob("src/posts/*.md").filter(p => PREVIEW || !p.data.draft).sort((a,b)=>b.date-a.date));
  cfg.addFilter("byAuthor", (posts, a) => posts.filter(p => p.data.author === a));
  cfg.addFilter("byTag", (posts, t) => posts.filter(p => (p.data.tags||[]).includes(t)));
  cfg.addFilter("isoDate", d => new Date(d).toISOString());
  cfg.addFilter("niceDate", d => new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}));
  cfg.addFilter("json", v => JSON.stringify(v));
  cfg.addFilter("wordcount", s => String(s).replace(/<[^>]+>/g," ").split(/\s+/).filter(Boolean).length);
  return { dir: { input: "src", output: "dist" }, pathPrefix: process.env.PATH_PREFIX || "/" };
}
