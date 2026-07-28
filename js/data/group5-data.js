const G5_AUTORES = [
  "Alessandro Luziel de Jesus Santos",
  "Jeovane Alexandrino Santos",
  "Ellen Cristine Oliveira da Silva",
  "Beatriz de Vales Souza",
  "Yasmin Lins de Lima Couto"
];

const G5_COMPONENTES = [
  { letter:"S", title:"Situação", color:"#8FAF7B",
    q:"Onde e quando aconteceu?",
    detail:"Descreva o contexto específico — o dia, a reunião, o lugar. Isso evita generalizações como “você sempre faz isso”." },
  { letter:"B", title:"Comportamento", color:"#7FB0C7",
    q:"O que foi observado?",
    detail:"Relate a ação observável, sem interpretar intenções. Foque no que foi visto ou ouvido, não em suposições sobre o porquê." },
  { letter:"I", title:"Impacto", color:"#A98FC7",
    q:"Qual foi a consequência?",
    detail:"Explique o efeito prático daquele comportamento — no time, no resultado do trabalho, na relação entre as pessoas." }
];

const G5_EXEMPLO = {
  situacao:"Reunião de segunda-feira.",
  comportamento:"Você interrompeu colegas durante a fala.",
  impacto:"Algumas pessoas deixaram de participar da discussão."
};

const G5_PRATICA = [
  { frase:"“A reunião de fechamento do projeto aconteceu na terça-feira de manhã.”", correta:"S",
    feedback:"Isso é Situação: descreve o contexto — quando e onde aconteceu." },
  { frase:"“Você não deixou o colega terminar de falar duas vezes durante a apresentação.”", correta:"B",
    feedback:"Isso é Comportamento: uma ação observável, sem julgar a intenção por trás dela." },
  { frase:"“Depois disso, o time ficou inseguro para dar sugestões nas próximas reuniões.”", correta:"I",
    feedback:"Isso é Impacto: a consequência prática daquele comportamento sobre o grupo." }
];

let g5PraticaAnswered = [];
let g5PraticaScore = 0;

const G5_APOIO = {
  oQue: "Feedback é uma ferramenta de comunicação utilizada para promover o desenvolvimento pessoal e profissional. Consiste em compartilhar percepções sobre comportamentos, atitudes ou resultados de forma clara, respeitosa e objetiva, com o propósito de reconhecer acertos, corrigir falhas e fortalecer relacionamentos.",
  comoReconhecer: "Uma conversa difícil surge quando há necessidade de abordar temas delicados, como conflitos, erros, mudanças ou expectativas não atendidas. Esses momentos exigem diálogo aberto, escuta ativa, empatia e equilíbrio emocional para que o foco permaneça na solução do problema, e não na pessoa.",
  comoAplicar: "Antes da conversa, organize os fatos e defina o objetivo. Durante o diálogo, comunique-se com clareza, utilize exemplos concretos, mantenha uma postura respeitosa, pratique a escuta ativa e incentive a participação da outra pessoa. Ao final, estabeleça ações e compromissos para promover melhorias e fortalecer a confiança.",
  oQueEvitar: "Dar feedback de forma genérica ou baseado só em críticas; atacar a pessoa em vez do comportamento; adiar a conversa por medo do conflito; falar sem deixar espaço para a outra pessoa se posicionar; encerrar sem combinar próximos passos."
};
