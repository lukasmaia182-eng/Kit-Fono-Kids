// Conteúdo dos 20 flashcards (10 temas com frente e verso),
// baseado no material "Kit Fono Kids".

export type CartaoFigura = { palavra: string; icone: string; imagem: string }

export type Flashcard = {
  slug: string
  numeroFrente: number
  numeroVerso: number
  tema: string
  // classe de cor de fundo do badge/realce (segue a paleta do kit)
  cor: string
  objetivo: string
  // Cartões de figuras mostrados na FRENTE (palavra + ícone lucide)
  cartoes: CartaoFigura[]
  // Orientações do VERSO (para o profissional/responsável)
  comoAplicar: string[]
  comandos: string[]
  dica: string
}

export const flashcards: Flashcard[] = [
  {
    slug: "emocoes-basicas",
    numeroFrente: 1,
    numeroVerso: 2,
    tema: "Emoções básicas",
    cor: "bg-brand-pink",
    objetivo:
      "Ajudar a criança a identificar, nomear e expressar as emoções, ampliando o vocabulário emocional e a comunicação dos sentimentos.",
    cartoes: [
      { palavra: "Feliz", icone: "Smile", imagem: "/flashcards/emocoes-basicas-1.png" },
      { palavra: "Triste", icone: "Frown", imagem: "/flashcards/emocoes-basicas-2.png" },
      { palavra: "Bravo", icone: "Angry", imagem: "/flashcards/emocoes-basicas-3.png" },
      { palavra: "Com medo", icone: "Ghost", imagem: "/flashcards/emocoes-basicas-4.png" },
      { palavra: "Surpreso", icone: "Zap", imagem: "/flashcards/emocoes-basicas-5.png" },
      { palavra: "Calmo", icone: "Leaf", imagem: "/flashcards/emocoes-basicas-6.png" },
    ],
    comoAplicar: [
      "Mostre uma figura por vez e pergunte: 'Como ele está se sentindo?'.",
      "Faça você mesmo a expressão facial e peça para a criança imitar.",
      "Relacione cada emoção a uma situação real do dia da criança.",
      "Aceite respostas por fala, gesto, apontar ou aproximação vocal.",
    ],
    comandos: ["Como você está se sentindo?", "Mostre quem está feliz.", "Quando você fica triste?"],
    dica: "Use um espelho para a criança observar a própria expressão ao nomear cada emoção.",
  },
  {
    slug: "animais-do-cotidiano",
    numeroFrente: 3,
    numeroVerso: 4,
    tema: "Animais do cotidiano",
    cor: "bg-brand-green",
    objetivo:
      "Ampliar o vocabulário de animais familiares, trabalhando nomeação, sons onomatopaicos e associação figura-palavra.",
    cartoes: [
      { palavra: "Cachorro", icone: "Dog", imagem: "/flashcards/animais-do-cotidiano-1.png" },
      { palavra: "Gato", icone: "Cat", imagem: "/flashcards/animais-do-cotidiano-2.png" },
      { palavra: "Pássaro", icone: "Bird", imagem: "/flashcards/animais-do-cotidiano-3.png" },
      { palavra: "Peixe", icone: "Fish", imagem: "/flashcards/animais-do-cotidiano-4.png" },
      { palavra: "Coelho", icone: "Rabbit", imagem: "/flashcards/animais-do-cotidiano-5.png" },
      { palavra: "Tartaruga", icone: "Turtle", imagem: "/flashcards/animais-do-cotidiano-6.png" },
    ],
    comoAplicar: [
      "Aponte para cada animal e peça para a criança nomeá-lo.",
      "Imite o som do animal e pergunte: 'Quem faz au-au?'.",
      "Peça para a criança encontrar o animal que você descrever.",
      "Reforce cada tentativa de fala, gesto ou som.",
    ],
    comandos: ["Que animal é esse?", "Qual animal faz miau?", "Mostre o que vive na água."],
    dica: "Comece com 3 animais que a criança conhece bem e aumente aos poucos.",
  },
  {
    slug: "alimentos-infantis",
    numeroFrente: 5,
    numeroVerso: 6,
    tema: "Alimentos infantis",
    cor: "bg-orange-500",
    objetivo:
      "Trabalhar vocabulário de alimentos do dia a dia, favorecendo escolhas, pedidos e comunicação funcional na rotina das refeições.",
    cartoes: [
      { palavra: "Maçã", icone: "Apple", imagem: "/flashcards/alimentos-infantis-1.png" },
      { palavra: "Banana", icone: "Banana", imagem: "/flashcards/alimentos-infantis-2.png" },
      { palavra: "Pão", icone: "Croissant", imagem: "/flashcards/alimentos-infantis-3.png" },
      { palavra: "Leite", icone: "Milk", imagem: "/flashcards/alimentos-infantis-4.png" },
      { palavra: "Suco", icone: "CupSoda", imagem: "/flashcards/alimentos-infantis-5.png" },
      { palavra: "Bolo", icone: "Cake", imagem: "/flashcards/alimentos-infantis-6.png" },
    ],
    comoAplicar: [
      "Mostre dois alimentos e pergunte: 'Qual você quer?'.",
      "Peça para a criança nomear o que costuma comer no café da manhã.",
      "Trabalhe o pedido funcional: 'Eu quero...'.",
      "Aceite apontar, olhar ou falar como resposta válida.",
    ],
    comandos: ["O que você quer comer?", "Mostre a fruta.", "Aponte o que se bebe."],
    dica: "Use os cartões na hora do lanche real para generalizar o vocabulário.",
  },
  {
    slug: "objetos-do-dia-a-dia",
    numeroFrente: 7,
    numeroVerso: 8,
    tema: "Objetos do dia a dia",
    cor: "bg-brand-blue",
    objetivo:
      "Desenvolver o reconhecimento e a nomeação de objetos comuns da casa e da escola, associando função e uso.",
    cartoes: [
      { palavra: "Copo", icone: "CupSoda", imagem: "/flashcards/objetos-do-dia-a-dia-1.png" },
      { palavra: "Bola", icone: "CircleDot", imagem: "/flashcards/objetos-do-dia-a-dia-2.png" },
      { palavra: "Livro", icone: "Book", imagem: "/flashcards/objetos-do-dia-a-dia-3.png" },
      { palavra: "Cadeira", icone: "Armchair", imagem: "/flashcards/objetos-do-dia-a-dia-4.png" },
      { palavra: "Chave", icone: "Key", imagem: "/flashcards/objetos-do-dia-a-dia-5.png" },
      { palavra: "Telefone", icone: "Phone", imagem: "/flashcards/objetos-do-dia-a-dia-6.png" },
    ],
    comoAplicar: [
      "Mostre o objeto e pergunte: 'O que é isso?'.",
      "Pergunte para que serve cada objeto.",
      "Peça para a criança encontrar o objeto pela função: 'O que usamos para beber?'.",
      "Relacione os cartões com objetos reais da sala.",
    ],
    comandos: ["O que é isso?", "Para que serve?", "Mostre o que usamos para ler."],
    dica: "Esconda um objeto real e peça para a criança achar o cartão correspondente.",
  },
  {
    slug: "verbos-de-acao",
    numeroFrente: 9,
    numeroVerso: 10,
    tema: "Verbos de ação",
    cor: "bg-sky-500",
    objetivo:
      "Estimular a compreensão e o uso de verbos de ação, base para a construção de frases simples e do discurso descritivo.",
    cartoes: [
      { palavra: "Comer", icone: "Utensils", imagem: "/flashcards/verbos-de-acao-1.png" },
      { palavra: "Beber", icone: "CupSoda", imagem: "/flashcards/verbos-de-acao-2.png" },
      { palavra: "Correr", icone: "Footprints", imagem: "/flashcards/verbos-de-acao-3.png" },
      { palavra: "Pular", icone: "Rabbit", imagem: "/flashcards/verbos-de-acao-4.png" },
      { palavra: "Dormir", icone: "Moon", imagem: "/flashcards/verbos-de-acao-5.png" },
      { palavra: "Brincar", icone: "ToyBrick", imagem: "/flashcards/verbos-de-acao-6.png" },
    ],
    comoAplicar: [
      "Mostre a figura e pergunte: 'O que ele está fazendo?'.",
      "Faça a ação com o corpo e peça para a criança imitar e nomear.",
      "Monte frases simples: 'O menino está pulando'.",
      "Incentive a criança a apontar a ação que você falar.",
    ],
    comandos: ["O que ele está fazendo?", "Mostre quem está correndo.", "Faça igual à figura."],
    dica: "Combine com os cartões de personagens para montar frases (quem + ação).",
  },
  {
    slug: "partes-do-corpo",
    numeroFrente: 11,
    numeroVerso: 12,
    tema: "Partes do corpo",
    cor: "bg-amber-500",
    objetivo:
      "Trabalhar o reconhecimento e a nomeação das partes do corpo, importante para autopercepção e seguir comandos simples.",
    cartoes: [
      { palavra: "Cabeça", icone: "User", imagem: "/flashcards/partes-do-corpo-1.png" },
      { palavra: "Olhos", icone: "Eye", imagem: "/flashcards/partes-do-corpo-2.png" },
      { palavra: "Boca", icone: "Speech", imagem: "/flashcards/partes-do-corpo-3.png" },
      { palavra: "Mão", icone: "Hand", imagem: "/flashcards/partes-do-corpo-4.png" },
      { palavra: "Pé", icone: "Footprints", imagem: "/flashcards/partes-do-corpo-5.png" },
      { palavra: "Orelha", icone: "Ear", imagem: "/flashcards/partes-do-corpo-6.png" },
    ],
    comoAplicar: [
      "Aponte para a parte do corpo na figura e nomeie em voz alta.",
      "Peça para a criança apontar a mesma parte no próprio corpo.",
      "Cante músicas que citam partes do corpo enquanto mostra os cartões.",
      "Dê comandos simples: 'Toque na sua orelha'.",
    ],
    comandos: ["Onde está a boca?", "Toque no seu pé.", "Mostre os olhos."],
    dica: "Use o espelho para a criança localizar cada parte no próprio rosto e corpo.",
  },
  {
    slug: "silabas-simples",
    numeroFrente: 13,
    numeroVerso: 14,
    tema: "Sílabas simples",
    cor: "bg-brand-green",
    objetivo:
      "Trabalhar a produção e a percepção de sílabas simples (consoante + vogal), apoiando a articulação e a consciência silábica.",
    cartoes: [
      { palavra: "BA", icone: "Volume2", imagem: "/flashcards/silabas-simples-1.png" },
      { palavra: "CA", icone: "Volume2", imagem: "/flashcards/silabas-simples-2.png" },
      { palavra: "DA", icone: "Volume2", imagem: "/flashcards/silabas-simples-3.png" },
      { palavra: "LA", icone: "Volume2", imagem: "/flashcards/silabas-simples-4.png" },
      { palavra: "MA", icone: "Volume2", imagem: "/flashcards/silabas-simples-5.png" },
      { palavra: "PA", icone: "Volume2", imagem: "/flashcards/silabas-simples-6.png" },
    ],
    comoAplicar: [
      "Fale a sílaba devagar e peça para a criança repetir.",
      "Bata palmas a cada sílaba para marcar o ritmo.",
      "Junte duas sílabas e forme palavras: BA + LA = BALA.",
      "Aceite aproximações do som como tentativa válida.",
    ],
    comandos: ["Repita comigo: BA.", "Que palavra começa com MA?", "Bata palma para cada sílaba."],
    dica: "Associe cada sílaba a uma palavra-chave conhecida (BA de bola, CA de casa).",
  },
  {
    slug: "consciencia-fonologica-rimas",
    numeroFrente: 15,
    numeroVerso: 16,
    tema: "Consciência fonológica: rimas",
    cor: "bg-brand-pink",
    objetivo:
      "Desenvolver a percepção de rimas e sons semelhantes, habilidade essencial para a consciência fonológica e a alfabetização.",
    cartoes: [
      { palavra: "Gato", icone: "Cat", imagem: "/flashcards/consciencia-fonologica-rimas-1.png" },
      { palavra: "Pato", icone: "Bird", imagem: "/flashcards/consciencia-fonologica-rimas-2.png" },
      { palavra: "Bola", icone: "CircleDot", imagem: "/flashcards/consciencia-fonologica-rimas-3.png" },
      { palavra: "Sacola", icone: "ShoppingBag", imagem: "/flashcards/consciencia-fonologica-rimas-4.png" },
      { palavra: "Pão", icone: "Croissant", imagem: "/flashcards/consciencia-fonologica-rimas-5.png" },
      { palavra: "Mão", icone: "Hand", imagem: "/flashcards/consciencia-fonologica-rimas-6.png" },
    ],
    comoAplicar: [
      "Fale duas palavras e pergunte: 'Elas terminam com o mesmo som?'.",
      "Peça para a criança encontrar o par que rima (gato e pato).",
      "Brinque de completar rimas em frases curtas.",
      "Celebre cada acerto e repita o som final com ênfase.",
    ],
    comandos: ["O que rima com gato?", "Essas palavras rimam?", "Ache o par que termina igual."],
    dica: "Exagere o som final das palavras para a criança perceber a semelhança.",
  },
  {
    slug: "sequencia-logica-de-rotina",
    numeroFrente: 17,
    numeroVerso: 18,
    tema: "Sequência lógica de rotina",
    cor: "bg-brand-blue",
    objetivo:
      "Trabalhar a ordem lógica de uma rotina, organizando o pensamento sequencial e o uso de marcadores temporais (primeiro, depois, por fim).",
    cartoes: [
      { palavra: "Acordar", icone: "Sunrise", imagem: "/flashcards/sequencia-logica-de-rotina-1.png" },
      { palavra: "Escovar os dentes", icone: "Sparkles", imagem: "/flashcards/sequencia-logica-de-rotina-2.png" },
      { palavra: "Tomar café", icone: "Coffee", imagem: "/flashcards/sequencia-logica-de-rotina-3.png" },
      { palavra: "Ir à escola", icone: "Backpack", imagem: "/flashcards/sequencia-logica-de-rotina-4.png" },
      { palavra: "Brincar", icone: "ToyBrick", imagem: "/flashcards/sequencia-logica-de-rotina-5.png" },
      { palavra: "Dormir", icone: "Moon", imagem: "/flashcards/sequencia-logica-de-rotina-6.png" },
    ],
    comoAplicar: [
      "Embaralhe os cartões e peça para a criança colocar na ordem certa.",
      "Pergunte: 'O que vem primeiro? E depois?'.",
      "Use as palavras primeiro, depois e por fim ao contar a sequência.",
      "Relacione com a rotina real da criança.",
    ],
    comandos: ["O que fazemos primeiro?", "O que vem depois?", "Coloque em ordem."],
    dica: "Comece com apenas 3 cartões e aumente conforme a criança organiza a sequência.",
  },
  {
    slug: "comunicacao-funcional",
    numeroFrente: 19,
    numeroVerso: 20,
    tema: "Comunicação funcional",
    cor: "bg-orange-500",
    objetivo:
      "Oferecer apoio visual para pedidos e necessidades do dia a dia, favorecendo a comunicação funcional e a autonomia da criança.",
    cartoes: [
      { palavra: "Quero", icone: "Hand", imagem: "/flashcards/comunicacao-funcional-1.png" },
      { palavra: "Não quero", icone: "Ban", imagem: "/flashcards/comunicacao-funcional-2.png" },
      { palavra: "Ajuda", icone: "LifeBuoy", imagem: "/flashcards/comunicacao-funcional-3.png" },
      { palavra: "Mais", icone: "Plus", imagem: "/flashcards/comunicacao-funcional-4.png" },
      { palavra: "Água", icone: "Droplet", imagem: "/flashcards/comunicacao-funcional-5.png" },
      { palavra: "Banheiro", icone: "DoorOpen", imagem: "/flashcards/comunicacao-funcional-6.png" },
    ],
    comoAplicar: [
      "Deixe os cartões sempre visíveis e ao alcance da criança.",
      "Modele o uso: aponte para 'quero' + um objeto desejado.",
      "Responda imediatamente a cada pedido feito com os cartões.",
      "Aceite apontar, entregar o cartão, olhar ou falar.",
    ],
    comandos: ["O que você quer?", "Precisa de ajuda?", "Mostre o que você precisa."],
    dica: "Use os mesmos cartões na rotina real (água, ajuda, pausa) para generalizar a comunicação.",
  },
]

export function getFlashcard(slug: string) {
  return flashcards.find((f) => f.slug === slug)
}
