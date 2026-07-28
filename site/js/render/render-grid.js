function renderGrid(){
  const grid = document.getElementById('groups-grid');
  grid.innerHTML = GROUPS.map(g => `
    <a class="card" href="grupo${g.n}.html">
      <span class="ghost-num">${String(g.n).padStart(2,'0')}</span>
      <span class="num">GRUPO ${g.n}</span>
      <h3>${g.title}</h3>
      <p class="q">“${g.q}”</p>
    </a>
  `).join('');
}
