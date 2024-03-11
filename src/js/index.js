document.addEventListener("DOMContentLoaded", function() {
    const botoesTemporadas = document.querySelectorAll(".botao-temporadas");

    // Adiciona um event listener para cada botão de temporada
    botoesTemporadas.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Obtém o número da temporada do atributo 'data-temporada' do botão
            const numeroTemporada = botao.getAttribute("data-jogo");
          


            // Atualiza a imagem grande e o texto da temporada
    

            // Substitua as sinopses conforme necessário
            switch (numeroTemporada) {
                case "1":
                    document.getElementById("titulo-jogo").textContent = "God of War 2018"
                    document.getElementById("sinopse-jogo").textContent = "'God of War (2018) é uma jornada épica que segue a história de Kratos, o ex-guerreiro espartano e ex-deus da guerra, em sua busca por redenção e paz em um mundo nórdico repleto de deuses e monstros. Após a morte de sua esposa, Kratos e seu filho, Atreus, partem em uma perigosa jornada para espalhar as cinzas dela no pico mais alto dos Nove Reinos. No entanto, o passado sombrio de Kratos o assombra, e ele precisa enfrentar não apenas os desafios do mundo ao seu redor, mas também as profundezas de sua própria alma atormentada. Enquanto pai e filho enfrentam criaturas colossais e deidades implacáveis, eles descobrem a complexidade dos laços familiares e o peso das escolhas que moldam seus destinos. No cerne dessa narrativa emocionante está a luta de Kratos para se reconciliar com seu passado enquanto forja um novo futuro para si mesmo e para seu filho em um mundo onde os deuses caminham entre mortais.";
                    break;
                case "2":
                    document.getElementById("titulo-jogo").textContent = "God of War 1"
                    document.getElementById("sinopse-jogo").textContent = "God of War (2005) é o início de uma saga lendária que segue a jornada trágica e vingativa de Kratos, um guerreiro espartano que busca redenção em um mundo antigo repleto de deuses da mitologia grega. Atormentado por seu passado sombrio e pela traição dos deuses do Olimpo, Kratos é consumido pelo desejo de vingança contra Ares, o deus da guerra, que o manipulou para cometer atos terríveis. Em sua busca para se libertar do pesadelo de seu passado, Kratos enfrenta desafios épicos, criaturas mitológicas e labirintos de conspiração divina. Equipado com suas icônicas lâminas do caos e impulsionado por sua ira, Kratos embarca em uma missão sangrenta e implacável para derrubar os próprios deuses que o traíram. No entanto, ao longo de sua jornada, ele é confrontado com as consequências de suas próprias ações e o preço da vingança desenfreada. 'God of War' não apenas é uma saga de batalhas épicas e mitologia, mas também uma história de redenção, sacrifício e a luta de um homem contra seu destino.";
                    break;
                case "3":
                    document.getElementById("titulo-jogo").textContent = "God of War 2"
                    document.getElementById("sinopse-jogo").textContent = "God of War II (2007) continua a saga de Kratos, o espartano impiedoso, em sua busca por vingança e redenção contra os deuses do Olimpo. Após derrotar Ares e ascender ao posto de novo deus da guerra, Kratos é traído por Zeus e condenado à morte. Desafiando as artimanhas divinas, Kratos escapa da morte e embarca em uma jornada épica para derrubar o próprio senhor dos deuses. Com sua lendária determinação e habilidades sobre-humanas, ele enfrenta titãs colossais, monstros mitológicos e os próprios deuses em sua busca pela justiça. Enquanto sua ira e desejo por vingança o consomem, Kratos confronta os pecados de seu passado e as consequências devastadoras de suas ações. God of War II é uma saga épica de batalhas monumentais, traição divina e a busca incessante de um anti-herói em busca de redenção e vingança em um mundo onde os deuses caminham entre mortais.";
                    break;
            }
        });
    });
});


// Espera até que o conteúdo da página seja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as divs que você deseja animar
    var elementsToAnimate = document.querySelectorAll('.icones, .botoes, .box, .botao-personagem, .bg, .cabecalho, .box-image, .personagens');

    // Define a opacidade inicial das divs como 0
    elementsToAnimate.forEach(function(element) {
        element.style.opacity = '0';
    });

    // Define um intervalo de tempo (em milissegundos) após o qual a animação será iniciada
    var delay = 2000; // 2000 milissegundos = 2 segundos

    // Define a função para iniciar a animação após o intervalo de tempo especificado
    setTimeout(function() {
        // Gradualmente aumenta a opacidade de cada div ao longo de 1 segundo (1000 milissegundos)
        var fadeEffect = setInterval(function () {
            elementsToAnimate.forEach(function(element) {
                // Verifica se a opacidade é menor que 1
                if (!element.style.opacity) {
                    element.style.opacity = 0;
                }
                // Incrementa a opacidade em 0.01
                element.style.opacity = parseFloat(element.style.opacity) + 0.01;

                // Verifica se a opacidade atingiu 1
                if (element.style.opacity >= 1) {
                    clearInterval(fadeEffect);
                }
            });
        }, 10); // Aumenta a opacidade a cada 10 milissegundos
    }, delay); // Inicia a animação após o intervalo de tempo especificado
});