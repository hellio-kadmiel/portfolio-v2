const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        setTheme(current === 'light' ? 'dark' : 'light');
    });
}

                
                const menuToggleButton = document.querySelector('.menu-toggle');
                const menu = document.querySelector('.menu');
                menuToggleButton.addEventListener('click', () => {
                    menu.classList.toggle('active');
                }); 

                // Fechar o menu ao clicar em um link
                document.querySelectorAll('.menu-links').forEach(link => {
                    link.addEventListener('click', () => {
                        menu.classList.remove('active');
                    });
                });

                // Formalario de contato via WhatsApp
                const form = document.getElementById('formulario-contato');
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    const Nome = document.getElementById('Nome').value.trim();
                    const Mensagem = document.getElementById('Mensagem').value.trim();

                    if (!Nome || !Mensagem) {
                        alert('Por favor, preencha todos os campos antes de enviar.');
                        return;
                    }
                    const telefone = '55981413376';
                    const texto = `Olá, meu nome é ${Nome}. ${Mensagem}`;
                    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
                    window.open(url, '_blank');
            form.reset();
        });