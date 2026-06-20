import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import { writeFileSync } from "node:fs"

const LINK = "https://v0-kits-kids-fonos-portugues.vercel.app/seuacesso"

// Paleta da marca
const azul = rgb(0.078, 0.227, 0.55) // azul profundo
const azulClaro = rgb(0.93, 0.96, 1)
const creme = rgb(0.99, 0.97, 0.93)
const amarelo = rgb(1, 0.78, 0.18)
const branco = rgb(1, 1, 1)
const cinza = rgb(0.35, 0.38, 0.45)

const doc = await PDFDocument.create()
const page = doc.addPage([595.28, 841.89]) // A4 retrato
const { width, height } = page.getSize()

const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)
const fontReg = await doc.embedFont(StandardFonts.Helvetica)

// Fundo creme
page.drawRectangle({ x: 0, y: 0, width, height, color: creme })

// Moldura arredondada
const margin = 30
page.drawRectangle({
  x: margin,
  y: margin,
  width: width - margin * 2,
  height: height - margin * 2,
  borderColor: azul,
  borderWidth: 3,
  color: branco,
})

const cx = width / 2

function centerText(text, y, font, size, color) {
  const w = font.widthOfTextAtSize(text, size)
  page.drawText(text, { x: cx - w / 2, y, size, font, color })
}

// Pílula de marca no topo
const pillW = 240
const pillH = 36
page.drawRectangle({
  x: cx - pillW / 2,
  y: height - 130,
  width: pillW,
  height: pillH,
  color: azul,
})
centerText("KIT FONO KIDS", height - 119, fontBold, 16, branco)

// Título
centerText("Seu acesso esta", height - 220, fontBold, 30, azul)
centerText("liberado!", height - 258, fontBold, 30, azul)

// Subtítulo
centerText("Clique no botao abaixo para acessar todas as", height - 310, fontReg, 13, cinza)
centerText("100 atividades, cartazes e bonus do seu kit.", height - 330, fontReg, 13, cinza)

// Botão (retângulo amarelo) com link clicável
const btnW = 340
const btnH = 60
const btnX = cx - btnW / 2
const btnY = height - 440
page.drawRectangle({ x: btnX, y: btnY, width: btnW, height: btnH, color: amarelo })
centerText("ACESSAR MEU KIT AGORA", btnY + btnH / 2 - 7, fontBold, 17, azul)

// Anotação de link clicável sobre o botão
const linkAnnotation = doc.context.obj({
  Type: "Annot",
  Subtype: "Link",
  Rect: [btnX, btnY, btnX + btnW, btnY + btnH],
  Border: [0, 0, 0],
  A: {
    Type: "Action",
    S: "URI",
    URI: LINK,
  },
})
const linkRef = doc.context.register(linkAnnotation)
page.node.set(doc.context.obj("Annots"), doc.context.obj([linkRef]))

// Caixa com o link em texto (também clicável)
page.drawRectangle({
  x: cx - 230,
  y: height - 520,
  width: 460,
  height: 40,
  color: azulClaro,
})
centerText("Ou copie e cole no navegador:", height - 498, fontReg, 10, cinza)
centerText(LINK, height - 513, fontBold, 9, azul)

// Instruções
centerText("Guarde este arquivo. O acesso e vitalicio e voce pode", height - 580, fontReg, 11, cinza)
centerText("voltar quando quiser para imprimir novos materiais.", height - 598, fontReg, 11, cinza)

// Rodapé
page.drawRectangle({ x: margin, y: margin, width: width - margin * 2, height: 44, color: azul })
centerText("Kit Fono Kids  -  Material para Fonoaudiologia Infantil", margin + 17, fontBold, 11, branco)

const bytes = await doc.save()
writeFileSync("public/kit-fono-kids-acesso.pdf", bytes)
console.log("PDF gerado: public/kit-fono-kids-acesso.pdf")
