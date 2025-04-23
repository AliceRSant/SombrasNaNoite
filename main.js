document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".botao");
  const textos = document.querySelectorAll(".aba-conteudo");

  // Verifica se os botões e textos existem
  if (botoes.length !== 0 && textos.length !== 0) {
    botoes.forEach((botao, index) => {
      botao.addEventListener("click", () => {
        botoes.forEach((btn, idx) => {
          btn.classList.remove("ativo");
          textos[idx].classList.remove("ativo");
        });
        botao.classList.add("ativo");
        textos[index].classList.add("ativo");
      });
    });
  }

  // 🔥 Parte nova: funcionalidade dos títulos de creepypasta
  const botoesCreepy = document.querySelectorAll(".titulo-creepy");

  botoesCreepy.forEach((botao) => {
    botao.addEventListener("click", () => {
      const conteudo = botao.nextElementSibling;
      const aberto = conteudo.style.display === "block";

      // Fecha todos os outros
      document.querySelectorAll(".conteudo-creepy").forEach((el) => {
        el.style.display = "none";
      });

      // Mostra o conteúdo clicado, se não tava aberto
      conteudo.style.display = aberto ? "none" : "block";
    });
  });
});
