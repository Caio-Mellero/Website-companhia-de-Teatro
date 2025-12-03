// Exemplo: expandir/recolher sinopse ao clicar no card
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card-espetaculo').forEach(function(card) {
        card.addEventListener('click', function() {
            const sinopse = card.querySelector('.sinopse-espetaculo');
            if (sinopse) {
                sinopse.classList.toggle('expandida');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos necessários do DOM
    const botoesInfo = document.querySelectorAll('.btn-info-popup');
    const modalOverlay = document.getElementById('modal-espetaculo');
    const modalFechar = document.querySelector('.modal-fechar');
    const modalImagem = document.getElementById('modal-imagem');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalData = document.getElementById('modal-data');
    const modalSinopse = document.getElementById('modal-sinopse');

    // Função para abrir o modal
    function abrirModal(botao) {
        // Pega os dados dos data-attributes do botão clicado
        const titulo = botao.dataset.titulo;
        const imagemSrc = botao.dataset.imagemSrc;
        const data = botao.dataset.data;
        const sinopse = botao.dataset.sinopse;

        modalTitulo.textContent = titulo;
        modalImagem.src = imagemSrc;
        modalImagem.alt = `Cartaz do espetáculo ${titulo}`;
        modalData.textContent = `Apresentado em: ${data}`;
        modalSinopse.textContent = sinopse;

        // Mostra o modal
        modalOverlay.classList.add('ativo');
    }

    // Função para fechar o modal
    function fecharModal() {
        modalOverlay.classList.remove('ativo');
    }

    botoesInfo.forEach(botao => {
        botao.addEventListener('click', () => {
            abrirModal(botao);
        });
    });

    // Adiciona o evento de clique para o botão de fechar (X)
    modalFechar.addEventListener('click', fecharModal);

    // Adiciona o evento de clique para o fundo (overlay) para fechar o modal
    modalOverlay.addEventListener('click', (event) => {
        // Fecha somente se o clique foi diretamente no overlay e não nos seus filhos
        if (event.target === modalOverlay) {
            fecharModal();
        }
    });

    // Adiciona o evento para fechar o modal com a tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('ativo')) {
            fecharModal();
        }
    });

});