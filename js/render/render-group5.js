function renderG5Credits(){
  return renderCredits(G5_AUTORES);
}

function toggleSbiCard(el){
  el.classList.toggle('open');
}

function renderGrupo5Body(){
  g5PraticaAnswered = [];
  g5PraticaScore = 0;

  const componentCards = G5_COMPONENTES.map(c => `
    <div class="sbi-card" onclick="toggleSbiCard(this)">
      <div class="sbi-top">
        <div class="sbi-top-left">
          <span class="sbi-badge" style="background:${c.color};">${c.letter}</span>
          <h6>${c.title}</h6>
        </div>
        <span class="chevron">▾</span>
      </div>
      <p class="sbi-q">${c.q}</p>
      <div class="sbi-detail"><p>${c.detail}</p></div>
    </div>
  `).join('');

  const praticaItems = G5_PRATICA.map((p,i) => `
    <div class="sbi-pratica-item" id="sbi-pratica-${i}">
      <p>${p.frase}</p>
      <div class="sbi-pratica-opts">
        ${["S","B","I"].map(l => `<button type="button" class="sbi-opt-btn" onclick="selectSbiPratica(${i},'${l}',this)">${l}</button>`).join('')}
      </div>
      <div class="sbi-pratica-feedback"></div>
    </div>
  `).join('');

  return `

    <div class="section-block">
      <h4>Introdução</h4>
      <p>A comunicação é essencial para construir relações saudáveis e alcançar bons resultados, tanto na vida pessoal quanto no ambiente profissional. Nesse contexto, o feedback e as conversas difíceis são ferramentas importantes para resolver conflitos, alinhar expectativas e promover o desenvolvimento por meio de um diálogo respeitoso, claro e objetivo.</p>
    </div>

    <div class="section-block">
      <h4>Ferramenta Prática — Método SBI</h4>
      <p>O Método SBI (Situação, Comportamento e Impacto) é uma técnica de feedback desenvolvida pelo Center for Creative Leadership (CCL), organização reconhecida mundialmente pelo desenvolvimento de líderes.</p>
      <p>Seu objetivo é tornar o feedback mais claro, objetivo e construtivo, com foco nos fatos e não em julgamentos.</p>
      <p style="color:var(--chalk-dim); font-size:14px; margin:14px 0 4px;">Como funciona? Clique em cada letra para ver o que ela significa.</p>
      <div class="sbi-grid">${componentCards}</div>
    </div>

    <div class="section-block">
      <h4>Exemplo aplicado</h4>
      <div class="sbi-example-flow">
        <div class="sbi-example-box">
          <div class="sbi-example-label" style="color:${G5_COMPONENTES[0].color};">Situação</div>
          <p>${G5_EXEMPLO.situacao}</p>
        </div>
        <div class="sbi-example-box">
          <div class="sbi-example-label" style="color:${G5_COMPONENTES[1].color};">Comportamento</div>
          <p>${G5_EXEMPLO.comportamento}</p>
        </div>
        <div class="sbi-example-box">
          <div class="sbi-example-label" style="color:${G5_COMPONENTES[2].color};">Impacto</div>
          <p>${G5_EXEMPLO.impacto}</p>
        </div>
      </div>
      <div class="sbi-tip"><span class="star">⭐</span><span><b>Dica:</b> Foque nos fatos, não na pessoa. O objetivo é melhorar juntos!</span></div>
      <p style="margin-top:14px;">O método contribui para uma comunicação mais respeitosa e eficaz, reduz conflitos e fortalece o desenvolvimento pessoal e profissional.</p>
    </div>

    <div class="section-block">
      <h4>Pratique — identifique S, B ou I</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Leia cada frase e clique na letra correspondente.</p>
      ${praticaItems}
      <div class="sbi-pratica-score" id="sbi-pratica-score">Responda as 3 frases acima para ver seu resultado.</div>
    </div>

    ${renderApoioTable(G5_APOIO)}
  `;
}

function selectSbiPratica(idx, letter, btnEl){
  if(g5PraticaAnswered[idx]) return;
  g5PraticaAnswered[idx] = true;

  const item = document.getElementById('sbi-pratica-' + idx);
  const correct = G5_PRATICA[idx].correta === letter;
  const buttons = item.querySelectorAll('.sbi-opt-btn');
  buttons.forEach(b => {
    b.disabled = true;
    if(b === btnEl) b.classList.add(correct ? 'correct-selected' : 'wrong-selected');
  });

  if(correct) g5PraticaScore++;

  const fb = item.querySelector('.sbi-pratica-feedback');
  fb.textContent = G5_PRATICA[idx].feedback;
  fb.classList.add('show', correct ? 'ok' : 'bad');

  const answeredCount = g5PraticaAnswered.filter(Boolean).length;
  const scoreEl = document.getElementById('sbi-pratica-score');
  if(scoreEl){
    if(answeredCount < G5_PRATICA.length){
      scoreEl.textContent = `Respostas corretas até agora: ${g5PraticaScore} de ${answeredCount}.`;
    } else {
      scoreEl.textContent = `Resultado final: ${g5PraticaScore} de ${G5_PRATICA.length} respostas corretas.`;
    }
  }
}
