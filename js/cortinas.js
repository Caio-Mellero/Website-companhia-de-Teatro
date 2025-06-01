document.addEventListener('DOMContentLoaded', function () {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const initiateShowButton = document.getElementById('initiateShowButton');
  const curtainContainer = document.querySelector('.curtain-container');

  function startTheShow() {
    welcomeScreen.style.opacity = '0';
    welcomeScreen.addEventListener('transitionend', function handleTransitionEnd() {
      welcomeScreen.style.display = 'none';
      welcomeScreen.removeEventListener('transitionend', handleTransitionEnd);
      setTimeout(() => {
        curtainContainer.classList.add('open');
      }, 50);
      setTimeout(() => {
        // Após a animação, redireciona para o index.html
        window.location.href = 'index.html';
      }, 2000 + 50 + 500);
    }, { once: true });
  }

  if (initiateShowButton) {
    initiateShowButton.addEventListener('click', startTheShow);
  } else if (welcomeScreen) {
    welcomeScreen.addEventListener('click', startTheShow);
  }
});
