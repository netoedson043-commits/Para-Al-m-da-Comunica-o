function toggleSection(id){
  const el = document.getElementById(id);
  if(!el) return;
  const opening = !el.classList.contains('open');
  el.classList.toggle('open');
  const btn = document.querySelector(`[data-target="${id}"]`);
  if(btn) btn.textContent = opening ? 'Ocultar ▲' : 'Mostrar ▼';
}
