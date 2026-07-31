function renderG4Credits(){
  return renderCredits(G4_AUTORES);
}

function renderGrupo4Body(){
  const descCards = G4_DESC.map(d => `
    <div class="desc-card" onclick="this.classList.toggle('open')">
      <div class="desc-top">
        <div class="desc-top-left">
          <span class="desc-badge" style="background:${d.color};">${d.letter}</span>
          <h6>${d.title}</h6>
        </div>
        <span class="chevron">▾</span>
      </div>
      <div class="desc-detail">
        <p>${d.texto}</p>
        <p class="exemplo">Exemplo: ${d.exemplo}</p>
      </div>
    </div>
  `).join('');

  const dicaCards = G4_DICAS.map(d => `
    <div class="dica-card" onclick="this.classList.toggle('open')">
      <div class="dica-top">
        <div class="dica-top-left">
          <span class="dica-num">${d.n}.</span>
          <h6>${d.title}</h6>
        </div>
        <span class="chevron">▾</span>
      </div>
      <div class="dica-detail">
        <ul>${d.itens.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');

  return `

    <div class="section-block">
      <h4>Introdução</h4>
      <p>A comunicação assertiva é a capacidade de se expressar com clareza, respeito e firmeza — defendendo ideias, opiniões e sentimentos sem agredir o outro nem se anular. Ela fica entre dois extremos: a passividade, que evita o conflito às custas da própria opinião, e a agressividade, que impõe a opinião própria desrespeitando o outro.</p>
      <p>Praticar a assertividade fortalece relações profissionais e pessoais, porque permite dizer o que precisa ser dito sem ferir nem se ferir.</p>
    </div>

    <div class="section-block">
      <h4>Método DESC</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Ela funciona em quatro passos. Clique em cada letra para ver a explicação e o exemplo.</p>
      <div class="desc-grid">${descCards}</div>
    </div>

    <div class="section-block">
      <h4>Dicas práticas</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Clique em cada dica para ver os detalhes.</p>
      <div class="dica-list">${dicaCards}</div>
    </div>

    ${renderApoioTable(G4_APOIO)}
  `;
}
