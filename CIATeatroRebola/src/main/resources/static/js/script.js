document.addEventListener('DOMContentLoaded', function () {
            const welcomeScreen = document.getElementById('welcomeScreen');
            const initiateShowButton = document.getElementById('initiateShowButton');
            const curtainContainer = document.querySelector('.curtain-container');
            const mainSiteContent = document.getElementById('mainSiteContent');

            function startTheShow() {
                welcomeScreen.style.opacity = '0';
                welcomeScreen.addEventListener('transitionend', function handleTransitionEnd() {
                    welcomeScreen.style.display = 'none';
                    welcomeScreen.removeEventListener('transitionend', handleTransitionEnd);
                    setTimeout(() => {
                        curtainContainer.classList.add('open');
                    }, 50);
                    setTimeout(() => {
                        if (curtainContainer.parentNode) {
                            curtainContainer.style.display = 'none';
                        }
                        document.body.style.overflow = 'auto';
                    }, 2000 + 50 + 500);
                }, { once: true });
            }

            if (initiateShowButton) {
                initiateShowButton.addEventListener('click', startTheShow);
            } else if (welcomeScreen) {
                welcomeScreen.addEventListener('click', startTheShow);
            }

            const atoresContainer = document.querySelector('.atores');
            if (atoresContainer) {
                const cards = Array.from(atoresContainer.children);
                const getVisibleCount = () => window.innerWidth <= 480 ? 1 : (window.innerWidth <= 768 ? 2 : 3);
                let visibleCount = getVisibleCount();
                let start = 0;

                function showCards() {
                    cards.forEach((card, idx) => {
                        if (idx >= start && idx < start + visibleCount) {
                            card.style.display = '';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }

                function nextSlide() {
                    start = (start + visibleCount) % cards.length;
                    if (start + visibleCount > cards.length) {
                        start = 0;
                    }
                    showCards();
                }

                showCards();
                setInterval(nextSlide, 3000);

                window.addEventListener('resize', () => {
                    const newVisible = getVisibleCount();
                    if (newVisible !== visibleCount) {
                        visibleCount = newVisible;
                        start = 0;
                        showCards();
                    }
                });
            }
        });