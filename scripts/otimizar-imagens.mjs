import { readdir, stat } from "node:fs/promises"
import { join } from "node:path"
import sharp from "sharp"

const KIT_DIR = new URL("../public/kit/", import.meta.url).pathname

// Largura máxima por tipo de imagem, baseada no tamanho real de exibição (com folga para telas retina)
function maxWidthFor(name) {
  if (name.startsWith("hero-banner")) return 1400
  if (name.startsWith("b") && /^b\d/.test(name)) return 820 // cartazes de bônus (grid 3 colunas)
  if (name.startsWith("mock")) return 900
  if (name.startsWith("testi")) return 760
  if (name.startsWith("selo")) return 640
  if (name.startsWith("emo")) return 560
  if (name.startsWith("cat-")) return 700
  if (/^\d+\.png$/.test(name)) return 700 // prévias numeradas do carrossel
  return 800
}

const files = (await readdir(KIT_DIR)).filter((f) => f.toLowerCase().endsWith(".png"))

let before = 0
let after = 0

for (const name of files) {
  const path = join(KIT_DIR, name)
  const orig = (await stat(path)).size
  before += orig

  const maxW = maxWidthFor(name)
  const img = sharp(path)
  const meta = await img.metadata()

  const pipeline = sharp(path)
  if (meta.width && meta.width > maxW) {
    pipeline.resize({ width: maxW, withoutEnlargement: true })
  }

  const buf = await pipeline
    .png({ compressionLevel: 9, effort: 10, quality: 82, palette: true })
    .toBuffer()

  await sharp(buf).toFile(path)
  const sz = (await stat(path)).size
  after += sz
  console.log(`${name}: ${(orig / 1024).toFixed(0)}KB -> ${(sz / 1024).toFixed(0)}KB`)
}

console.log("\n=========================================")
console.log(`Total: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`)
console.log(`Redução: ${(100 - (after / before) * 100).toFixed(0)}%`)
