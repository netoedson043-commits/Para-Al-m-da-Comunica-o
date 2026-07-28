const CNV_DATA = {
  orientadora:"Cássia Ribeiro",
  autores:["Fanny Pereira de Souza","Emelly Carvalho Santana","Ana Clara Cardoso Dantas","José Augusto Figueiredo da Silva Filho","Sabrina Bispo dos Santos"],
  conceito:"É uma forma de comunicação baseada na empatia e na conexão autêntica. Ajuda a expressar sentimentos e necessidades de forma clara e a ouvir com compreensão, evitando julgamentos e conflitos.",
  reconhecer:[
    "Falar com honestidade e empatia",
    "Ouvir atentamente sem interrupções",
    "Observar sem julgar",
    "Expressar sentimentos e necessidades",
    "Criar conexões genuínas"
  ],
  comparacao:{
    violenta:"A Comunicação Violenta é reativa e tende a focar na culpa, utilizando julgamentos, críticas e rótulos que colocam as pessoas na defensiva. Quando nos expressamos de forma acusatória, fechamos os canais de diálogo e transformamos divergências em conflitos, desgastando os relacionamentos e dificultando a busca por soluções reais.",
    naoViolenta:"Por outro lado, a Comunicação Não Violenta (CNV) substitui o ataque pela empatia e pela clareza."
  },
  componentes:[
    { n:"01", title:"Observação (sem julgamentos)", desc:"Relate fatos objetivos sem avaliações ou rótulos." },
    { n:"02", title:"Sentimentos", desc:"Nomeie suas emoções com clareza — ex: alegria, tristeza, frustração, curiosidade." },
    { n:"03", title:"Necessidades", desc:"Identifique as necessidades humanas universais por trás dos sentimentos — ex: respeito, apoio, pertencimento, autonomia." },
    { n:"04", title:"Pedidos", desc:"Formule pedidos claros, positivos e realizáveis — ex: “Você poderia, por favor...?”" }
  ],
  evitar:[
    { label:"Julgamentos Morais", ex:"“Você é preguiçoso”" },
    { label:"Críticas e Acusações", ex:"“A culpa é sua.”" },
    { label:"Comparações", ex:"“João fez dessa forma e ficou melhor.”" },
    { label:"Negação de Responsabilidade", ex:"“Eu tive que fazer.”" },
    { label:"Exigências e Ameaças", ex:"“Se você não fizer o relatório hoje, vou te mandar para o RH!”" }
  ],
  quiz:[
    { situation:"Alguém chega atrasado.",
      options:[
        { label:"Opção A", text:"“Você está sempre atrasado!”", correct:false,
          feedback:"Isso é um julgamento (“sempre atrasado”) — a outra pessoa tende a se defender em vez de ouvir." },
        { label:"Opção B", text:"“Notei que você chegou 10 minutos após o horário combinado. Fico frustrado porque preciso de previsibilidade.”", correct:true,
          feedback:"Isso é CNV: observação sem julgamento + sentimento + necessidade, sem acusar." }
      ]},
    { situation:"Seu amigo cancela planos.",
      options:[
        { label:"Opção A", text:"“Achei uma falta de consideração.”", correct:false,
          feedback:"Isso é um rótulo (“falta de consideração”) — coloca a outra pessoa na defensiva." },
        { label:"Opção B", text:"“Sinto-me desapontado com o cancelamento porque valorizo nosso tempo juntos.”", correct:true,
          feedback:"Isso é CNV: nomeia o sentimento e a necessidade por trás dele, sem acusar." }
      ]},
    { situation:"Seu colega não conclui uma tarefa.",
      options:[
        { label:"Opção A", text:"“Você é incompetente.”", correct:false,
          feedback:"Isso é um julgamento moral — ataca a pessoa em vez do problema." },
        { label:"Opção B", text:"“Estou preocupado com o prazo e preciso de colaboração para terminar. Como podemos resolver isso juntos?”", correct:true,
          feedback:"Isso é CNV: sentimento + necessidade + um pedido claro e colaborativo." }
      ]}
  ]
};
