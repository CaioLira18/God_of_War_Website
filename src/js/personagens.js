document.addEventListener("DOMContentLoaded", function() {
    const botoesPersonagens = document.querySelectorAll(".botao-personagem");

    // Adiciona um event listener para cada botão de personagem
    botoesPersonagens.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número do personagem do atributo 'personagem' do botão
            const personagem = botao.getAttribute("personagem");

            // Atualiza a imagem grande do personagem
            document.getElementById("imagem-personagem").src = `/src/images/${personagem}.png`;

            // Substitui o título e a biografia do personagem conforme necessário
            switch (personagem) {
                case "1":
                    document.querySelector(".personagem-title").textContent = "Kratos";
                    document.querySelector(".personagem-bio").textContent = "Bio";
                    break;
                case "2":
                    document.querySelector(".personagem-title").textContent = "Atreus";
                    document.querySelector(".personagem-bio").textContent = "Bio";
                    break;
                case "3":
                    document.querySelector(".personagem-title").textContent = "Freya";
                    document.querySelector(".personagem-bio").textContent = "Bio";
                    break;
                case "4":
                    document.querySelector(".personagem-title").textContent = "Mimir"
                    "";
                    document.querySelector(".personagem-bio").textContent = "Bio";
                    break;
                default:
                    // Caso padrão, se não houver correspondência
                    document.querySelector(".personagem-title").textContent = "Personagem Desconhecido";
                    document.querySelector(".personagem-bio").textContent = "Biografia não encontrada.";
            }
        });
    });
});


