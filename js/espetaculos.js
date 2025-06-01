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
