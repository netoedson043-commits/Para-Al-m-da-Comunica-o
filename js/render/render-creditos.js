// Configuração dos créditos de cada grupo: foto, autores e (quando
// houver) orientadora específica do tema. O título de cada grupo
// vem do array GROUPS (js/data/groups.js).
const CREDITOS_GRUPOS = [
  { n:1, photo:G1_PHOTO, autores:G1_AUTORES },
  { n:2, photo:G2_PHOTO, autores:G2_AUTORES },
  { n:3, photo:G3_PHOTO, autores:CNV_DATA.autores, orientadora:CNV_DATA.orientadora },
  { n:4, photo:G4_PHOTO, autores:G4_AUTORES },
  { n:5, photo:G5_PHOTO, autores:G5_AUTORES },
  { n:6, photo:G6_PHOTO, autores:G6_AUTORES },
];

function renderCreditosGrid(){
  const grid = document.getElementById('creditos-grid');
  grid.innerHTML = CREDITOS_GRUPOS.map(c => {
    const grupo = GROUPS.find(g => g.n === c.n);
    const orientadoraLinha = c.orientadora
      ? `<p class="credito-participantes"><b>Orientadora:</b> ${c.orientadora}</p>`
      : '';
    return `
      <div class="credito-card">
        <figure><img src="${c.photo}" alt="Participantes do Grupo ${c.n} — SENAR Bahia"></figure>
        <div class="credito-body">
          <span class="credito-num">GRUPO ${c.n}</span>
          <h3>${grupo.title}</h3>
          ${orientadoraLinha}
          <p class="credito-participantes"><b>Participantes:</b> ${c.autores.join(", ")}</p>
        </div>
      </div>
    `;
  }).join('');
}
