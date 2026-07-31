function renderG1Credits(){
  return renderCredits(G1_AUTORES);
}

function renderGrupo1Body(){
  const perguntasCards = G1_PERGUNTAS.map((p,i) => `
    <div class="qa-card" onclick="this.classList.toggle('open')">
      <div class="qa-top">
        <span class="q-text"><b>Pergunta ${i+1}:</b> ${p.q}</span>
        <span class="chevron">▾</span>
      </div>
      <div class="qa-detail"><p>${p.a}</p></div>
    </div>
  `).join('');

  const biasCards = G1_VIESES.map(v => `
    <div class="bias-card" onclick="this.classList.toggle('open')">
      <div class="bias-top">
        <h6>${v.title}</h6>
        <span class="chevron">▾</span>
      </div>
      <div class="bias-detail">
        <p><b>O que é:</b> ${v.oQue}</p>
        ${v.exemplos.map(ex => `<p><b>Exemplo:</b> ${ex}</p>`).join('')}
        <p class="autor">Autor: ${v.autor}</p>
      </div>
    </div>
  `).join('');

  return `

    <div class="section-block">
      <h4>Fatos, Interpretações e Julgamentos</h4>
      <button type="button" class="simple-reveal-btn" data-target="g1-fatos" onclick="toggleSection('g1-fatos')">Mostrar ▼</button>
      <div class="simple-reveal-content" id="g1-fatos">
        <p>Nem tudo o que dizemos sobre uma situação é um <strong>fato</strong>. Fato é aquilo que pode ser observado e comprovado por qualquer pessoa, independentemente de opinião.</p>
        <p><strong>Interpretação</strong> é a leitura pessoal que fazemos sobre esse fato — carregada de experiências, crenças e emoções.</p>
        <p><strong>Julgamento</strong> vai um passo além: é quando avaliamos algo ou alguém como certo/errado, bom/ruim, com base nessa interpretação.</p>
        <p>O problema é que, no dia a dia, costumamos tratar nossas interpretações e julgamentos como se fossem fatos — e é aí que os conflitos de comunicação começam.</p>
      </div>
    </div>

    <div class="section-block">
      <h4>Perguntas para a turma</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 14px;">Clique em cada pergunta para revelar a resposta.</p>
      <div class="qa-list">${perguntasCards}</div>
    </div>

    <div class="section-block">
      <h4>Vieses Cognitivos</h4>
      <p style="color:var(--chalk-dim); font-size:14px; margin:0 0 14px;">Clique em cada viés para ver a explicação, os exemplos e o autor.</p>
      <div class="bias-list">${biasCards}</div>
    </div>

    <div class="section-block">
      <h4>Efeito Dunning-Kruger</h4>
      <button type="button" class="simple-reveal-btn" data-target="g1-dk" onclick="toggleSection('g1-dk')">Mostrar ▼</button>
      <div class="simple-reveal-content" id="g1-dk">
        <p>O <strong>Efeito Dunning-Kruger</strong> é um viés cognitivo que faz com que pessoas com pouco conhecimento ou habilidade em uma área superestimem sua própria competência, enquanto pessoas mais experientes tendem a subestimar a sua — justamente por reconhecerem a complexidade do assunto.</p>
        <p>Foi descrito em 1999 pelos psicólogos David Dunning e Justin Kruger, da Universidade Cornell.</p>
        <p><strong>Exemplo:</strong> um profissional recém-contratado, com pouco domínio de uma ferramenta, pode se sentir extremamente confiante e questionar orientações de colegas mais experientes — não porque sabe mais, mas porque ainda não percebeu o quanto não sabe.</p>
      </div>
    </div>

    <div class="section-block">
      <h4>Como as crenças influenciam a comunicação</h4>
      <button type="button" class="simple-reveal-btn" data-target="g1-crencas" onclick="toggleSection('g1-crencas')">Mostrar ▼</button>
      <div class="simple-reveal-content" id="g1-crencas">
        <p>Nossas crenças funcionam como filtros: elas moldam o que percebemos, como interpretamos as palavras do outro e até o tom que usamos para responder.</p>
        <p>Duas pessoas com crenças diferentes podem ouvir a mesma frase e reagir de formas completamente opostas — uma pode se sentir ofendida, outra pode nem notar nada de errado.</p>
        <p>Por isso, uma comunicação eficaz exige reconhecer que nossas crenças não são a realidade absoluta, mas uma lente entre muitas possíveis. Estar consciente disso ajuda a ouvir o outro com mais abertura, antes de julgar.</p>
      </div>
    </div>

    <div class="section-block">
      <h4>Dinâmica — o que você vê?</h4>
      <button type="button" class="simple-reveal-btn" data-target="g1-dinamica" onclick="toggleSection('g1-dinamica')">Revelar imagens ▼</button>
      <div class="simple-reveal-content" id="g1-dinamica">
        <p>Olhem para as imagens abaixo antes de ler a explicação. O que cada uma mostra?</p>
        <div class="dinamica-imgs">
          <figure><img src="${DIN_IMG1}" alt="Ilusão de ótica — jovem ou senhora, dependendo do ângulo de interpretação"></figure>
          <figure><img src="${DIN_IMG2}" alt="Ilusão de ótica — rosto que pode ser interpretado de formas diferentes"></figure>
        </div>
        <p style="margin-top:16px;">A mesma imagem, vista pelo mesmo grupo de pessoas, pode gerar respostas completamente diferentes — exatamente como acontece com fatos, interpretações e julgamentos no dia a dia.</p>
      </div>
    </div>

    ${renderApoioTable(G1_APOIO)}
  `;
}
