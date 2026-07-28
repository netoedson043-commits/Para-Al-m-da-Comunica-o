const G6_AUTORES = [
  "Davi Alves dos Reis Prata",
  "Francisco Victor Marques Santos",
  "Jamylle Almeida da Silva",
  "Kelly Victória Cardoso Santos",
  "Yasmin Silva Gomes"
];

const G6_TERMOMETRO = [
  "Consigo ouvir até o fim antes de reagir a uma crítica.",
  "Procuro entender o que a outra pessoa realmente precisa, não só o que ela pede.",
  "Consigo discutir o problema sem atacar quem discorda de mim.",
  "Sei perceber quando a conversa está esquentando e proponho uma pausa.",
  "Busco soluções em que as duas partes saem ganhando, não só a minha.",
  "Depois de resolver um conflito, sigo em frente sem guardar rancor."
];

const G6_BANDS = [
  { min:6,  max:13, emoji:"🔥", title:"Em chamas",
    text:"Reage antes de refletir. Antes de responder a algo que te irritou, conte até 5 em silêncio." },
  { min:14, max:20, emoji:"🌡️", title:"Esquentando",
    text:"Já tem ferramentas, mas usa de forma inconstante. Quando notar a conversa esquentando, diga em voz alta: “vamos respirar um minuto”." },
  { min:21, max:26, emoji:"🙂", title:"Morno e estável",
    text:"Lida bem com a maioria dos conflitos. Identifique o gatilho específico das vezes em que ainda reage rápido." },
  { min:27, max:30, emoji:"❄️", title:"Cabeça fria",
    text:"Repertório sólido. Use essa estabilidade para ajudar a mediar conflitos de outras pessoas também." }
];

const G6_SITUACOES = [
  { title:"Colega leva o crédito pela sua ideia",
    desc:"Você sugeriu uma solução numa reunião informal. Dias depois, seu colega apresenta essa mesma ideia para o chefe como se fosse dele.",
    options:[
      { letter:"a", text:"Confronto na hora, na frente de todos." },
      { letter:"b", text:"Falo em particular com o colega depois." },
      { letter:"c", text:"Vou direto ao chefe reclamar." },
      { letter:"d", text:"Deixo passar, não vale a briga." }
    ]},
  { title:"Sobrecarga de tarefas",
    desc:"Seu líder te passa mais uma tarefa urgente, mesmo você já estando com a agenda cheia e outros prazos apertados.",
    options:[
      { letter:"a", text:"Digo, na hora, que não vai dar e explico o motivo." },
      { letter:"b", text:"Converso com o líder para negociar as prioridades juntos." },
      { letter:"c", text:"Proponho um meio-termo: peço mais prazo ou divido a tarefa com outra pessoa." },
      { letter:"d", text:"Aceito e tento dar conta de tudo, mesmo sobrecarregado." }
    ]},
  { title:"Cliente insatisfeito na sua frente",
    desc:"Um cliente chega reclamando alto de um erro que não foi culpa sua, na frente de outros colegas.",
    options:[
      { letter:"a", text:"Me defendo e explico que o erro não foi meu." },
      { letter:"b", text:"Escuto, peço desculpas pelo transtorno e busco resolver." },
      { letter:"c", text:"Chamo o supervisor imediatamente." },
      { letter:"d", text:"Fico calado e espero passar." }
    ]},
  { title:"Discordância de opinião em equipe",
    desc:"Numa reunião, você discorda da forma como a equipe decidiu resolver um problema, mas todos parecem já ter concordado.",
    options:[
      { letter:"a", text:"Exponho minha opinião na reunião e explico meus motivos." },
      { letter:"b", text:"Peço um momento para a equipe discutir minha visão junto com as demais antes de decidir." },
      { letter:"c", text:"Falo depois, em particular, com o líder sobre minha discordância." },
      { letter:"d", text:"Fico quieto para não gerar atrito, mesmo discordando." }
    ]},
  { title:"Erro assumido por outra pessoa",
    desc:"Você percebe um erro em um relatório, mas o responsável nega e diz que o erro foi seu, mesmo sabendo que não foi.",
    options:[
      { letter:"a", text:"Insisto na hora, mostrando provas do que aconteceu." },
      { letter:"b", text:"Peço para conversarmos em particular depois." },
      { letter:"c", text:"Levo o caso para o líder resolver." },
      { letter:"d", text:"Deixo por isso mesmo, mesmo sabendo que não foi culpa minha." }
    ]}
];

const G6_PROFILES = {
  a:{ emoji:"🔴", title:"Competitivo",
      strong:"Coragem para expor o problema.",
      careful:"Pode gerar atrito desnecessário.",
      desc:"Enfrenta o conflito de frente, prioriza seu ponto de vista." },
  b:{ emoji:"🟢", title:"Colaborativo",
      strong:"Constrói relação e solução duradoura.",
      careful:"Pode levar mais tempo.",
      desc:"Busca entender o outro lado e resolver junto." },
  c:{ emoji:"🟡", title:"Conciliador/Negociador",
      strong:"Flexibilidade.",
      careful:"Pode adiar decisões difíceis.",
      desc:"Busca meio-termo, envolve mediação quando precisa." },
  d:{ emoji:"⚪", title:"Evitador",
      strong:"Evita brigas no calor do momento.",
      careful:"O problema pode voltar maior depois.",
      desc:"Prefere não confrontar, deixa o problema de lado." }
};

let g6TermRatings = {};
let g6SitAnswers = {};

const G6_APOIO = {
  oQue: "Processo de identificar e lidar com divergências de interesses, ideias ou valores entre pessoas, buscando uma solução que atenda às partes envolvidas.",
  comoReconhecer: "Sinais de tensão, discordância aberta, tom de voz alterado, acusações, e “posições” fixas (o que a pessoa diz que quer) escondendo os verdadeiros “interesses” (o motivo por trás do pedido).",
  comoAplicar: "Ouvir ativamente antes de responder; separar a pessoa do problema; identificar o interesse real por trás da posição de cada lado; propor soluções que atendam a ambos; manter tom calmo e respeitoso.",
  oQueEvitar: "Levar a discussão para o lado pessoal; interromper ou elevar o tom; ignorar o interesse da outra parte; tomar decisões por impulso; deixar o conflito se prolongar sem resolução."
};
