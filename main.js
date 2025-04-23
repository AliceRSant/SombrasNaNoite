document.addEventListener("DOMContentLoaded", function() {
  const botoes = document.querySelectorAll(".titulo-creepy");  // Botões de título
  const textos = document.querySelectorAll(".conteudo-creepy");  // Conteúdos correspondentes

  // Adiciona evento de clique em cada botão
  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      // Verifica se o conteúdo já está visível
      const conteudo = textos[index];

      // Se o conteúdo já estiver visível, esconda-o
      if (conteudo.classList.contains("ativo")) {
        conteudo.classList.remove("ativo");
      } else {
        // Caso contrário, abra o conteúdo
        conteudo.classList.add("ativo");
      }
    });
  });
});
