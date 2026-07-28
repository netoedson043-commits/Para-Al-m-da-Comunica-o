// Renderiza o bloco "O Grupo" com a foto da equipe.
// Usado por todas as páginas de grupo (G1–G6) para evitar repetir o
// mesmo bloco de HTML/CSS seis vezes.
function renderTeamPhoto(photoSrc, groupNum){
  return `
    <div class="section-block">
      <h4>O Grupo</h4>
      <figure style="margin:0;">
        <img src="${photoSrc}" alt="Participantes do Grupo ${groupNum} — SENAR Bahia" style="width:100%; max-width:380px; margin:0 auto; border-radius:4px 16px; border:1px solid var(--line); box-shadow:0 14px 34px rgba(0,0,0,0.32); display:block;">
      </figure>
    </div>
  `;
}
