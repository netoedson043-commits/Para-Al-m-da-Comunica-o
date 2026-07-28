function renderG6Credits(){
  return renderCredits(G6_AUTORES);
}

function selectTerm(idx, value, btnEl){
  g6TermRatings[idx] = value;
  const row = btnEl.closest('.term-item');
  row.querySelectorAll('.term-btn').forEach(b => b.classList.remove('selected'));
  btnEl.classList.add('selected');
  updateTermTotal();
}

function updateTermTotal(){
  const totalEl = document.getElementById('term-total-text');
  const resultEl = document.getElementById('term-result');
  const answered = Object.keys(g6TermRatings).length;
  if(!totalEl || !resultEl) return;
  if(answered < G6_TERMOMETRO.length){
    totalEl.textContent = `Respostas dadas: ${answered} de ${G6_TERMOMETRO.length}. Responda todas para ver seu resultado.`;
    resultEl.classList.remove('show');
    return;
  }
  const sum = Object.values(g6TermRatings).reduce((a,b) => a+b, 0);
  totalEl.textContent = `Soma total: ${sum} / 30`;
  const band = G6_BANDS.find(b => sum >= b.min && sum <= b.max);
  if(band){
    resultEl.querySelector('.r-title').textContent = `${band.emoji} ${band.title}`;
    resultEl.querySelector('.r-text').textContent = band.text;
    resultEl.classList.add('show');
  }
}

function selectSit(sIdx, letter, btnEl){
  g6SitAnswers[sIdx] = letter;
  const scenario = document.getElementById('sit-' + sIdx);
  scenario.querySelectorAll('.sit-opt').forEach(b => b.classList.remove('selected'));
  btnEl.classList.add('selected');
  updateProfile();
}

function updateProfile(){
  const resultEl = document.getElementById('profile-result');
  if(!resultEl) return;
  const answered = Object.keys(g6SitAnswers).length;
  if(answered < G6_SITUACOES.length){
    resultEl.classList.remove('show');
    return;
  }
  const counts = { a:0, b:0, c:0, d:0 };
  Object.values(g6SitAnswers).forEach(l => counts[l]++);
  let maxLetter = 'a', maxCount = -1;
  ['a','b','c','d'].forEach(l => { if(counts[l] > maxCount){ maxCount = counts[l]; maxLetter = l; } });
  const p = G6_PROFILES[maxLetter];
  resultEl.querySelector('.profile-emoji').textContent = p.emoji;
  resultEl.querySelector('.profile-title').textContent = `Maioria ${maxLetter.toUpperCase()} — ${p.title}`;
  resultEl.querySelector('.profile-counts').textContent =
    `A: ${counts.a}  ·  B: ${counts.b}  ·  C: ${counts.c}  ·  D: ${counts.d}`;
  resultEl.querySelector('.p-desc').textContent = p.desc;
  resultEl.querySelector('.p-strong').textContent = p.strong;
  resultEl.querySelector('.p-careful').textContent = p.careful;
  resultEl.classList.add('show');
}

function renderGrupo6Body(){
  g6TermRatings = {};
  g6SitAnswers = {};

  const termRows = G6_TERMOMETRO.map((text,i) => `
    <div class="term-item">
      <span class="term-text"><b>${i+1}.</b> ${text}</span>
      <div class="term-scale">
        ${[1,2,3,4,5].map(v => `<button type="button" class="term-btn" onclick="selectTerm(${i},${v},this)">${v}</button>`).join('')}
      </div>
    </div>
  `).join('');

  const sitCards = G6_SITUACOES.map((s,sIdx) => `
    <div class="sit-scenario" id="sit-${sIdx}">
      <h5 class="sit-title">Situação ${sIdx+1} — ${s.title}</h5>
      <p class="sit-desc">${s.desc}</p>
      <div class="sit-options">
        ${s.options.map(o => `<button type="button" class="sit-opt" onclick="selectSit(${sIdx},'${o.letter}',this)">${o.letter}) ${o.text}</button>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    ${renderTeamPhoto(G6_PHOTO, 6)}

    <div class="section-block">
      <h4>Termômetro do Conflito — Autoavaliação</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 16px;">Dê uma nota de 1 a 5 para cada frase (1 = quase nunca, 5 = quase sempre), pensando em como você costuma agir na prática.</p>
      ${termRows}
      <div class="term-total" id="term-total-text">Respostas dadas: 0 de ${G6_TERMOMETRO.length}. Responda todas para ver seu resultado.</div>
      <div class="term-result" id="term-result">
        <p class="r-title" style="font-family:'Fraunces',serif; font-size:16px; font-weight:600; color:var(--amber); margin:0 0 8px;"></p>
        <p class="r-text"></p>
      </div>
    </div>

    <div class="section-block">
      <h4>Qual é o seu perfil diante de um conflito?</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Em cada situação, escolha a opção que mais se parece com o que você realmente faria.</p>
      ${sitCards}
      <div class="profile-result" id="profile-result">
        <div class="profile-emoji"></div>
        <h5 class="profile-title"></h5>
        <div class="profile-counts"></div>
        <div class="profile-detail">
          <p class="p-desc"></p>
          <p><b>Ponto forte:</b> <span class="p-strong"></span></p>
          <p><b>Cuidado:</b> <span class="p-careful"></span></p>
        </div>
      </div>
    </div>

    ${renderApoioTable(G6_APOIO)}
  `;
}
