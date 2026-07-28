// Motor genérico de quiz de múltipla escolha.
// Usado pelas páginas do Grupo 2 e do Grupo 3 (CNV), que tinham a
// mesma lógica de responder/pontuar duplicada em dois arquivos.
//
// state: objeto mutável { answered: boolean[], score: number }
// config:
//   idPrefix     - prefixo do id do cenário no DOM (ex: "g2q-", "quiz-")
//   questoes     - array de cenários, cada um com .options[].correct/.feedback
//   scoreElId    - id do elemento onde o placar é exibido
//   progressLabel - texto usado enquanto o quiz não terminou (ex: "Respostas corretas")
//   finalLabel   - texto usado no resultado final, minúsculo (ex: "respostas corretas")
function answerQuiz(state, config, sIdx, oIdx){
  if(state.answered[sIdx]) return;
  state.answered[sIdx] = true;

  const scenario = document.getElementById(config.idPrefix + sIdx);
  const opt = config.questoes[sIdx].options[oIdx];
  const buttons = scenario.querySelectorAll('.quiz-opt');
  buttons.forEach((btn,i) => {
    btn.disabled = true;
    if(i === oIdx) btn.classList.add(opt.correct ? 'correct-selected' : 'wrong-selected');
  });

  if(opt.correct) state.score++;

  const fb = scenario.querySelector('.quiz-feedback');
  fb.textContent = opt.feedback;
  fb.classList.add('show', opt.correct ? 'ok' : 'bad');

  const answeredCount = state.answered.filter(Boolean).length;
  const scoreEl = document.getElementById(config.scoreElId);
  if(scoreEl){
    if(answeredCount < config.questoes.length){
      scoreEl.textContent = `${config.progressLabel} até agora: ${state.score} de ${answeredCount}.`;
    } else {
      scoreEl.textContent = `Resultado final: ${state.score} de ${config.questoes.length} ${config.finalLabel}.`;
    }
  }
}
