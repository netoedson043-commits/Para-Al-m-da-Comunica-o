function renderG2Credits(){
  return renderCredits(G2_AUTORES);
}

function selectG2Pratica(idx, tipo, btnEl){
  if(g2PraticaAnswered[idx]) return;
  g2PraticaAnswered[idx] = true;

  const item = document.getElementById('g2-pratica-' + idx);
  const correct = G2_PRATICA[idx].correta === tipo;
  const buttons = item.querySelectorAll('.sbi-opt-btn');
  buttons.forEach(b => {
    b.disabled = true;
    if(b === btnEl) b.classList.add(correct ? 'correct-selected' : 'wrong-selected');
  });

  if(correct) g2PraticaScore++;

  const fb = item.querySelector('.sbi-pratica-feedback');
  fb.textContent = G2_PRATICA[idx].feedback;
  fb.classList.add('show', correct ? 'ok' : 'bad');

  const answeredCount = g2PraticaAnswered.filter(Boolean).length;
  const scoreEl = document.getElementById('g2-pratica-score');
  if(scoreEl){
    if(answeredCount < G2_PRATICA.length){
      scoreEl.textContent = `Respostas corretas até agora: ${g2PraticaScore} de ${answeredCount}.`;
    } else {
      scoreEl.textContent = `Resultado final: ${g2PraticaScore} de ${G2_PRATICA.length} respostas corretas.`;
    }
  }
}

function renderGrupo2Body(){
  g2QuizState.answered = G2_QUESTOES.map(() => false);
  g2QuizState.score = 0;
  g2PraticaAnswered = G2_PRATICA.map(() => false);
  g2PraticaScore = 0;

  const questoes = G2_QUESTOES.map((s,sIdx) => `
    <div class="quiz-scenario" id="g2q-${sIdx}">
      <p class="situation">${s.q}</p>
      <div class="quiz-options">
        ${s.options.map((o,oIdx) => `
          <button type="button" class="quiz-opt" onclick="selectG2Option(${sIdx},${oIdx})">
            <b>${o.label}:</b> ${o.text}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback"></div>
    </div>
  `).join('');

  const praticaItems = G2_PRATICA.map((p,i) => `
    <div class="sbi-pratica-item" id="g2-pratica-${i}">
      <p>${p.frase}</p>
      <div class="sbi-pratica-opts">
        <button type="button" class="sbi-opt-btn" onclick="selectG2Pratica(${i},'ativa',this)">Escuta ativa</button>
        <button type="button" class="sbi-opt-btn" onclick="selectG2Pratica(${i},'passiva',this)">Escuta passiva</button>
      </div>
      <div class="sbi-pratica-feedback"></div>
    </div>
  `).join('');

  return `

    <div class="section-block">
      <h4>Introdução</h4>
      <button type="button" class="simple-reveal-btn" data-target="g2-intro" onclick="toggleSection('g2-intro')">Mostrar ▼</button>
      <div class="simple-reveal-content" id="g2-intro">
        <p>A escuta ativa e a inteligência relacional são fundamentais para uma boa comunicação. Ouvir com atenção, compreender o outro e responder com respeito fortalece a confiança, evita conflitos e melhora os relacionamentos.</p>
        <p>Segundo Daniel Goleman, desenvolver a inteligência emocional e saber ouvir são habilidades essenciais para criar relações saudáveis e uma comunicação mais eficaz.</p>
      </div>
    </div>

    <div class="section-block">
      <h4>Desenvolvimento</h4>
      <button type="button" class="simple-reveal-btn" data-target="g2-dev" onclick="toggleSection('g2-dev')">Mostrar ▼</button>
      <div class="simple-reveal-content" id="g2-dev">
        <p>A escuta ativa vai além de apenas ouvir: ela envolve prestar atenção, compreender e respeitar o que a outra pessoa está dizendo. Junto com a inteligência relacional, ela melhora a convivência, fortalece a confiança e ajuda a resolver conflitos por meio do diálogo.</p>
      </div>
    </div>

    <div class="section-block">
      <h4>Pratique — escuta ativa ou passiva?</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Leia cada comportamento e classifique.</p>
      ${praticaItems}
      <div class="sbi-pratica-score" id="g2-pratica-score">Responda os 4 comportamentos acima para ver seu resultado.</div>
    </div>

    <div class="section-block">
      <h4>Conclusão</h4>
      <button type="button" class="simple-reveal-btn" data-target="g2-conclusao" onclick="toggleSection('g2-conclusao')">Mostrar ▼</button>
      <div class="simple-reveal-content" id="g2-conclusao">
        <p>Praticar a escuta ativa e desenvolver a inteligência relacional contribui para relações mais saudáveis e uma comunicação mais eficaz. Quando ouvimos com atenção e empatia, criamos um ambiente de respeito, compreensão e colaboração.</p>
      </div>
    </div>

    <div class="section-block">
      <h4>Questões</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Escolha uma opção em cada pergunta.</p>
      ${questoes}
      <div class="quiz-score" id="g2q-score">Responda as 3 perguntas acima para ver seu resultado.</div>
    </div>

    <div class="section-block">
      <h4>Autores e Fontes</h4>
      <p><b>Autor citado:</b> Daniel Goleman — psicólogo e autor das obras sobre inteligência emocional.</p>
      <p style="margin-top:10px;"><b>Referências:</b></p>
      <p>GOLEMAN, Daniel. <i>Inteligência Emocional.</i> Objetiva, 1995.</p>
      <p>GOLEMAN, Daniel. <i>Inteligência Social.</i> Elsevier, 2006.</p>
      <p style="margin-top:10px;"><b>Autor citado:</b> Stephen R. Covey — em seu livro <i>Os 7 Hábitos das Pessoas Altamente Eficazes</i>, destaca que “procure primeiro compreender, depois ser compreendido”. Para ele, a escuta empática e a comunicação eficaz são a base de relacionamentos de confiança e cooperação.</p>
      <p style="margin-top:10px;"><b>Referência:</b></p>
      <p>COVEY, Stephen R. <i>Os 7 Hábitos das Pessoas Altamente Eficazes.</i></p>
    </div>

    ${renderApoioTable(G2_APOIO)}
  `;
}

function selectG2Option(sIdx, oIdx){
  answerQuiz(g2QuizState, {
    idPrefix: 'g2q-',
    questoes: G2_QUESTOES,
    scoreElId: 'g2q-score',
    progressLabel: 'Respostas corretas',
    finalLabel: 'respostas corretas'
  }, sIdx, oIdx);
}
