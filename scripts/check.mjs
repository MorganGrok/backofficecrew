// Fails the build if banned names, stray emails, tracking or token-looking strings appear in dist.
import fs from "node:fs"; import path from "node:path";
const bad = [/noctis/i, /strata\s*aos/i, /gh[pousr]_[A-Za-z0-9]{20,}/, /github_pat_/, /google-analytics|gtag\(|plausible|segment\.io/i];
const okEmails = ["morgan.jones@mail.grokbot.com", "jeff@getfusionrevenue.com"]; let fail = 0;
const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(e => e.isDirectory()? walk(path.join(d,e.name)) : [path.join(d,e.name)]);
for (const f of walk("dist")) { const t = fs.readFileSync(f,"utf8");
  for (const r of bad) if (r.test(t)) { console.error(`FAIL ${f}: ${r}`); fail=1; }
  if (!/\.(webp|png|jpe?g|gif|ico|woff2?)$/i.test(f)) for (const m of t.match(/[\w.+-]+@[\w-]+\.[\w.]+/g)||[]) if (!okEmails.includes(m) && !/^you@yourshop/.test(m)) { console.error(`FAIL ${f}: email ${m}`); fail=1; } }
console.log(fail? "check failed":"check ok"); process.exit(fail);
