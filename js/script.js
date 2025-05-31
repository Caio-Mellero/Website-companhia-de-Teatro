document.addEventListener('DOMContentLoaded', function () {
            const welcomeScreen = document.getElementById('welcomeScreen');
            const initiateShowButton = document.getElementById('initiateShowButton'); // Ou clique em welcomeScreen
            const curtainContainer = document.querySelector('.curtain-container');
            const mainSiteContent = document.getElementById('mainSiteContent');

            // Função para iniciar o show
            function startTheShow() {
                // 1. Fade out da tela de boas-vindas
                welcomeScreen.style.opacity = '0';

                // 2. Após o fade out, esconde a tela de boas-vindas e abre as cortinas
                welcomeScreen.addEventListener('transitionend', function handleTransitionEnd() {
                    welcomeScreen.style.display = 'none'; // Remove da visualização

                    // Remove o listener para não disparar múltiplas vezes se houver outras transições
                    welcomeScreen.removeEventListener('transitionend', handleTransitionEnd);

                    // 3. Adiciona a classe 'open' para iniciar a animação das cortinas
                    // Um pequeno delay para garantir que a tela de boas-vindas desapareceu e o usuário veja as cortinas fechadas por um instante.
                    setTimeout(() => {
                        curtainContainer.classList.add('open');
                    }, 50); // Pequeno delay, ajuste conforme necessário

                    // 4. Ocultar ou remover as cortinas após a animação (opcional, para performance)
                    // A duração da animação da cortina é 2.5s. O conteúdo começa a aparecer após 1s (delay da transição de opacidade do conteúdo).
                    // Vamos remover as cortinas um pouco depois de abertas completamente.
                    setTimeout(() => {
                        if (curtainContainer.parentNode) {
                            // curtainContainer.parentNode.removeChild(curtainContainer); // Remove do DOM
                            curtainContainer.style.display = 'none'; // Apenas esconde, mais simples
                        }
                        document.body.style.overflow = 'auto'; // Restaura a barra de rolagem se o conteúdo principal for maior
                    }, 2000 + 50 + 500); // 2.0s (cortina) + 50ms (delay) + 500ms (buffer)
                }, { once: true }); 
            }

            if (initiateShowButton) { 
                initiateShowButton.addEventListener('click', startTheShow);
            } else if (welcomeScreen) { 
                welcomeScreen.addEventListener('click', startTheShow);
            }
        });