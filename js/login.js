document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // 1. Impede a página de recarregar sozinha

            // 2. Captura os dados dos campos
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const btnEntrar = document.querySelector('.btn-entrar');

            // Feedback visual (mudando texto do botão)
            const textoOriginal = btnEntrar.innerText;
            btnEntrar.innerText = 'Verificando...';
            btnEntrar.disabled = true;
// --- SIMULAÇÃO DE BACK-END (APENAS PARA TESTE) ---
            console.log("Enviando dados:", email, senha);

            // Simula um tempo de espera do servidor
            setTimeout(() => {
                // Regra Falsa: Se o email tiver "admin", entra como chefe. Se não, entra como comum.
                if (email.includes('admin')) {
                    localStorage.setItem('usuario_cargo', 'admin');
                    alert('Login de Admin realizado com sucesso! (Simulação)');
                    // window.location.href = 'admin.html'; // Crie essa página depois
                } else {
                    localStorage.setItem('usuario_cargo', 'comum');
                    alert('Login de Usuário Comum realizado! Redirecionando...');
                    window.location.href = 'index.html';
                }
                
                // Restaura o botão
                btnEntrar.innerText = textoOriginal;
                btnEntrar.disabled = false;
            }, 1500);
            // -------------------------------------------------
        });
    }
});