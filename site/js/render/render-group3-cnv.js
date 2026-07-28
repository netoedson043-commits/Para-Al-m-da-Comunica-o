let cnvQuizState = { answered: [], score: 0 };

function renderCNVCredits(){
  return renderCredits(CNV_DATA.autores, CNV_DATA.orientadora);
}

function renderCNVBody(){
  cnvQuizState.answered = CNV_DATA.quiz.map(() => false);
  cnvQuizState.score = 0;

  const reconhecerLis = CNV_DATA.reconhecer.map(item => `<li>${item}</li>`).join("");

  const componentesCards = CNV_DATA.componentes.map(c => `
    <div class="comp-card" onclick="this.classList.toggle('open')">
      <div class="comp-card-top">
        <span class="comp-num">${c.n}</span>
        <span class="chevron">▾</span>
      </div>
      <h6>${c.title}</h6>
      <div class="comp-detail"><p>${c.desc}</p></div>
    </div>
  `).join("");

  const evitarItems = CNV_DATA.evitar.map(e => `
    <div class="evitar-item">
      <span class="x">✕</span>
      <span><b>${e.label}</b><em>${e.ex}</em></span>
    </div>
  `).join("");

  const quizScenarios = CNV_DATA.quiz.map((s,sIdx) => `
    <div class="quiz-scenario" id="quiz-${sIdx}">
      <div class="scenario-label">Cenário ${sIdx+1}</div>
      <p class="situation">${s.situation}</p>
      <div class="quiz-options">
        ${s.options.map((o,oIdx) => `
          <button type="button" class="quiz-opt" onclick="selectQuizOption(${sIdx},${oIdx})">
            <b>${o.label}:</b> ${o.text}
          </button>
        `).join("")}
      </div>
      <div class="quiz-feedback"></div>
    </div>
  `).join("");

  return `
    ${renderTeamPhoto(G3_PHOTO, 3)}

    <div class="section-block">
      <h4>Conceito e aplicação prática</h4>
      <h5>O que é CNV?</h5>
      <p>${CNV_DATA.conceito}</p>
      <h5>Como reconhecer?</h5>
      <ol>${reconhecerLis}</ol>
    </div>

    <div class="section-block">
      <h4>Comunicação Violenta × Não Violenta</h4>
      <div class="compare-grid">
        <div class="compare-card bad">
          <span class="tag-label">Comunicação Violenta</span>
          <p>${CNV_DATA.comparacao.violenta}</p>
        </div>
        <div class="compare-card good">
          <span class="tag-label">Comunicação Não Violenta</span>
          <p>${CNV_DATA.comparacao.naoViolenta}</p>
        </div>
      </div>
    </div>

    <div class="section-block">
      <h4>Como aplicar? Os 4 componentes da CNV</h4>
      <p style="margin-bottom:14px;">Clique em cada componente para ver a explicação.</p>
      <div class="comp-grid">${componentesCards}</div>
    </div>

    <div class="section-block">
      <h4>O que evitar — a linguagem da violência</h4>
      <div class="evitar-list">${evitarItems}</div>
    </div>

    <div class="section-block">
      <h4>Quiz da CNV — teste sua comunicação</h4>
      <p style="margin-bottom:4px;">Para cada cenário, escolha a resposta que você acha que representa a CNV.</p>
      ${quizScenarios}
      <div class="quiz-score" id="quiz-score">Responda os 3 cenários acima para ver seu resultado.</div>
    </div>
  `;
}

function selectQuizOption(sIdx, oIdx){
  answerQuiz(cnvQuizState, {
    idPrefix: 'quiz-',
    questoes: CNV_DATA.quiz,
    scoreElId: 'quiz-score',
    progressLabel: 'Respostas CNV corretas',
    finalLabel: 'respostas CNV corretas'
  }, sIdx, oIdx);
}
