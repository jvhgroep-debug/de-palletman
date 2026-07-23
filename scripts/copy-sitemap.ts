/**
 * Kopieert sitemap-0.xml naar sitemap.xml zodat robots.txt en zoekmachines
 * het verwachte pad https://www.depalletman.nl/sitemap.xml kunnen gebruiken.
 */
import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const source = join(dist, "sitemap-0.xml");
const target = join(dist, "sitemap.xml");

if (existsSync(source)) {
  copyFileSync(source, target);
  console.log("sitemap.xml aangemaakt (kopie van sitemap-0.xml)");
} else {
  console.warn("sitemap-0.xml niet gevonden — sitemap.xml niet aangemaakt");
}
