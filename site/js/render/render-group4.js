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
    ${renderTeamPhoto(G4_PHOTO, 4)}

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
