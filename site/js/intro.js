const INTRO_TOTAL_STEPS = 7;
let introStep = 0;

function introShowStep(idx){
  document.querySelectorAll('.intro-step').forEach(el => {
    el.style.display = parseInt(el.dataset.step,10) <= idx ? 'block' : 'none';
  });
  const progressEl = document.getElementById('intro-progress');
  if(progressEl) progressEl.textContent = `${Math.min(idx+1, INTRO_TOTAL_STEPS)} de ${INTRO_TOTAL_STEPS}`;

  const controlsEl = document.getElementById('intro-controls');
  const finalEl = document.getElementById('intro-final');
  if(idx >= INTRO_TOTAL_STEPS - 1){
    if(controlsEl) controlsEl.style.display = 'none';
    if(finalEl) finalEl.style.display = 'block';
  } else {
    if(controlsEl) controlsEl.style.display = 'flex';
    if(finalEl) finalEl.style.display = 'none';
  }
}

function introNext(){
  introStep++;
  introShowStep(introStep);
}

function introSkipAll(){
  introStep = INTRO_TOTAL_STEPS - 1;
  introShowStep(introStep);
}

function resetIntro(){
  introStep = 0;
  introShowStep(0);
}
