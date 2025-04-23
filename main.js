document.addEventListener("DOMContentLoaded", function() {
  const botoes = document.querySelectorAll(".botao");
  const textos = document.querySelectorAll(".aba-conteudo");

  // Verifica se os botões e textos existem
  if (botoes.length === 0 || textos.length === 0) return;

  // Adiciona evento de clique em cada botão
  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      // Remove a classe "ativo" de todos os botões e textos
      botoes.forEach((btn, idx) => {
        btn.classList.remove("ativo");
        textos[idx].classList.remove("ativo");
      });

      // Adiciona a classe "ativo" no botão e no conteúdo correspondente
      botao.classList.add("ativo");
      textos[index].classList.add("ativo");
    });
  });
});
