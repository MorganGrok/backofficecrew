// Copies /workspace/blog/personas/*.md (or ./personas) into src/authors with front matter.
import fs from "node:fs"; import path from "node:path";
const src = process.env.PERSONA_DIR || (fs.existsSync("/workspace/blog/personas") ? "/workspace/blog/personas" : "personas");
const banned = /noctis|strata aos/i;
fs.mkdirSync("src/authors", { recursive: true });
for (const f of fs.readdirSync(src).filter(f => f.endsWith(".md"))) {
  const slug = path.basename(f, ".md");
  let body = fs.readFileSync(path.join(src, f), "utf8").replace(/^# .*\n/, "");
  if (banned.test(body)) throw new Error(`banned name in persona ${f}`);
  fs.writeFileSync(`src/authors/${slug}.md`, `---\nlayout: author.njk\nauthorKey: ${slug}\npermalink: /authors/${slug}/\n---\n${body}`);
}
