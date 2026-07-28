// Renderiza a tabela-resumo "Material de Apoio" (O que é? / Como
// reconhecer? / Como aplicar? / O que evitar?) usada em todas as
// páginas de grupo, evitando repetir a mesma tabela seis vezes.
function renderApoioTable(data){
  return `
    <div class="section-block">
      <h4>Material de Apoio</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 4px;">Resumo do tema para consulta rápida.</p>
      <table class="apoio-table">
        <thead>
          <tr>
            <th>O que é?</th>
            <th>Como reconhecer?</th>
            <th>Como aplicar?</th>
            <th>O que evitar?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="O que é?">${data.oQue}</td>
            <td data-label="Como reconhecer?">${data.comoReconhecer}</td>
            <td data-label="Como aplicar?">${data.comoAplicar}</td>
            <td data-label="O que evitar?">${data.oQueEvitar}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}
