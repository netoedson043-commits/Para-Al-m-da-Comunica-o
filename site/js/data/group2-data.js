const G2_AUTORES = [
  "Evelly Azevedo dos Santos",
  "Rayssa Sales Rodrigues",
  "Maria Isabelle dos Santos Arcanjo",
  "Anderson Oliveira Santos Dias"
];

const G2_QUESTOES = [
  { q:"1. O que vocês entenderam dessa dinâmica?",
    options:[
      { label:"A", text:"A discussão mostrou que quem fala mais alto sempre consegue resolver os problemas.", correct:false,
        feedback:"Não é bem isso — falar mais alto não resolve o problema, só evita a escuta." },
      { label:"B", text:"A dinâmica mostrou que a falta de escuta pode gerar conflitos, mal-entendidos e prejudicar a convivência.", correct:true,
        feedback:"Isso mesmo — a falta de escuta ativa é uma das principais causas de conflitos e mal-entendidos." },
      { label:"C", text:"A melhor forma de acabar com uma discussão é ignorar o que a outra pessoa está dizendo.", correct:false,
        feedback:"Ignorar o outro não resolve nada — só afasta e frustra." }
    ]},
  { q:"2. Com qual parte ou qual pessoa vocês mais se identificaram?",
    options:[
      { label:"A", text:"Com a pessoa que interrompia o outro o tempo todo.", correct:false,
        feedback:"Interromper o tempo todo dificulta a escuta e gera frustração em quem está falando." },
      { label:"B", text:"Com a pessoa que tentava falar, mas não era ouvida, mostrando como isso pode ser frustrante.", correct:true,
        feedback:"Exatamente — não ser ouvido é frustrante e mostra a importância da escuta ativa." },
      { label:"C", text:"Com quem preferiu sair da conversa sem tentar resolver o problema.", correct:false,
        feedback:"Sair sem tentar resolver evita o conflito na hora, mas não resolve nada." }
    ]},
  { q:"3. Como vocês reagiriam diante de tal situação?",
    options:[
      { label:"A", text:"Continuaria discutindo até provar que eu estava certo.", correct:false,
        feedback:"Insistir em provar que está certo tende a intensificar o conflito." },
      { label:"B", text:"Manteria a calma, ouviria a outra pessoa com atenção e buscaria resolver o conflito por meio do diálogo.", correct:true,
        feedback:"Essa é a atitude da escuta ativa: calma, atenção e diálogo." },
      { label:"C", text:"Ignoraria a situação e deixaria o problema sem solução.", correct:false,
        feedback:"Ignorar deixa o problema sem solução e pode voltar maior depois." }
    ]}
];

let g2QuizState = { answered: [], score: 0 };

const G2_PRATICA = [
  { frase:"Manter contato visual e assentir com a cabeça enquanto a pessoa fala.", correta:"ativa",
    feedback:"Isso é escuta ativa: sinais de atenção que mostram que você está realmente presente na conversa." },
  { frase:"Olhar para o celular enquanto um colega está explicando algo importante.", correta:"passiva",
    feedback:"Isso é escuta passiva: a atenção está dividida e a pessoa provavelmente vai perder detalhes importantes." },
  { frase:"Repetir com suas próprias palavras o que a pessoa disse, para confirmar que entendeu.", correta:"ativa",
    feedback:"Isso é escuta ativa: parafrasear confirma a compreensão e mostra interesse genuíno." },
  { frase:"Interromper para dar sua opinião antes da pessoa terminar de falar.", correta:"passiva",
    feedback:"Isso é escuta passiva: interromper corta o raciocínio do outro e mostra que você já não está mais ouvindo." }
];

let g2PraticaAnswered = [];
let g2PraticaScore = 0;

const G2_APOIO = {
  oQue: "A escuta ativa é ouvir com atenção, compreendendo o que o outro diz e demonstrando interesse genuíno. A inteligência relacional é a habilidade de se conectar, entender emoções, comunicar-se bem e construir relacionamentos saudáveis e de confiança.",
  comoReconhecer: "Pela atenção, empatia, paciência e respeito de quem escuta: observando a linguagem verbal e não verbal, demonstrando interesse, fazendo perguntas de qualidade, confirmando o que foi entendido e buscando construir soluções em conjunto.",
  comoAplicar: "Ouvir sem interromper e prestar atenção; demonstrar empatia e se colocar no lugar do outro; fazer perguntas abertas e fechadas no momento certo; validar sentimentos e opiniões; agir com respeito, clareza e cooperação.",
  oQueEvitar: "Interromper ou falar por cima; julgamentos, críticas e suposições; perguntas que induzem ou limitam a resposta; respostas impulsivas e distrações (celular, por exemplo); desconsiderar os sentimentos do outro."
};
