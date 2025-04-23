document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".titulo-creepy");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const conteudo = botao.nextElementSibling;  // O conteúdo é o próximo elemento após o botão
      const isVisible = conteudo.style.display === "block";

      // Esconde todos os outros conteúdos
      document.querySelectorAll(".conteudo-creepy").forEach((el) => {
        el.style.display = "none";
      });

      // Exibe o conteúdo clicado
      if (!isVisible) {
        conteudo.style.display = "block";
      } else {
        conteudo.style.display = "none";  // Caso o conteúdo já esteja visível, ele fecha
      }
    });
  });
});
