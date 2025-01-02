// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 2000);
});

// Animación de las barras de estado
function animateStatusBars() {
    document.querySelectorAll('.status-progress').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '82';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Observar las barras de estado para animarlas cuando sean visibles
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStatusBars();
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.team-member').forEach(member => {
    observer.observe(member);
});

// Efecto parallax en el hero
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-section');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    hero.style.backgroundPosition = `${mouseX * 50}% ${mouseY * 50}%`;
});

// Navbar transparente que se vuelve sólida al scrollear
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('navbar-solid');
        } else {
            header.classList.remove('navbar-solid');
        }
    }
});

// Animación de hover para los game tags
document.querySelectorAll('.game-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// Función para mostrar tooltips en los iconos sociales
const tooltips = {
    twitch: 'Síguenos en Twitch',
    youtube: 'Mira nuestros videos',
    instagram: 'Síguenos en Instagram',
    twitter: 'Síguenos en Twitter',
    facebook: 'Síguenos en Facebook',
    tiktok: 'Síguenos en TikTok',
    discord: 'Únete a nuestro Discord'
};

document.querySelectorAll('.social-icon').forEach(icon => {
    const platform = icon.classList[1];
    if (tooltips[platform]) {
        icon.setAttribute('title', tooltips[platform]);
    }
});

// Animación de texto para la sección de streams
function animateStreamText() {
    const text = document.querySelector('.stream-card h3');
    if (text) {
        text.style.animation = 'glow 2s ease-in-out infinite';
    }
}

// Contador de visitas (simulado)
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);

// Easter egg para los gamers
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 5s linear infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

// Inicializar todas las animaciones cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    animateStatusBars();
    animateStreamText();
});