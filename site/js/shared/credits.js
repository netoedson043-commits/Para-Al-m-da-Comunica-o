// Renderiza a lista de créditos (autores e, opcionalmente, orientadora)
// de um grupo. Usado por todas as páginas de grupo para evitar repetir
// o mesmo HTML seis vezes.
function renderCredits(autores, orientadora){
  if(orientadora){
    return `
      <span><b>Orientadora:</b> ${orientadora}</span>
      <span><b>Autores:</b> ${autores.join(", ")}</span>
    `;
  }
  return `<span><b>Autores:</b> ${autores.join(", ")}</span>`;
}
