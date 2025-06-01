// Exemplo: copiar e-mail ao clicar no link (opcional)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.info-ator a[href^="mailto:"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = link.getAttribute('href').replace('mailto:', '');
            navigator.clipboard.writeText(email);
            link.textContent = 'E-mail copiado!';
            setTimeout(() => {
                link.textContent = email;
            }, 1500);
        });
    });
});
