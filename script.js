// Мобилно меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Превключване на навигацията
    nav.classList.toggle('nav-active');
    
    // Анимация на линковете
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Анимация на бутона
    burger.classList.toggle('toggle');
});

// Плавно скролиране за навигационните линкове
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация при скролиране
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('service-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Наблюдаване на елементите за анимация
document.querySelectorAll('.service-card, .blog-card, .testimonial-card, .partner-logo').forEach((el) => {
    observer.observe(el);
});

// EmailJS интеграция
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Показване на индикатор за зареждане
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Изпращане...';
        submitButton.disabled = true;
        
        // Подготовка на данните
        const templateParams = {
            user_name: contactForm.user_name.value,
            user_email: contactForm.user_email.value,
            message: contactForm.message.value
        };
        
        // Изпращане на имейл
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                // Успешно изпращане
                showNotification('Благодарим за съобщението! Ще се свържем с вас скоро.', 'success');
                contactForm.reset();
            }, function(error) {
                // Грешка при изпращане
                showNotification('Възникна грешка при изпращането. Моля, опитайте отново.', 'error');
            })
            .finally(() => {
                // Възстановяване на бутона
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            });
    });
}

// Функция за показване на известия
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white z-50`;
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    
    // Анимация на появата
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Автоматично скриване след 5 секунди
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Добавяне на клас при скролиране за навигацията
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Анимация на числата в секцията "За нас"
function animateNumbers() {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 30);
    });
}

// Извикване на анимацията на числата когато секцията е видима
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statsObserver.observe(statsSection);
}

// Добавяне на CSS анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .nav-active {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 70px;
        background: var(--white);
        width: 100%;
        padding: 2rem;
        box-shadow: var(--shadow);
    }
    
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .toggle .line2 {
        opacity: 0;
    }
    
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
    }
    
    .service-card, .blog-card, .testimonial-card, .partner-logo {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease-out;
    }
    
    .service-card.animate, .blog-card.animate, .testimonial-card.animate, .partner-logo.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// === Language Switcher ===
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-blog': 'Blog',
        'nav-portfolio': 'Portfolio',
        'nav-partners': 'Partners',
        'nav-contact': 'Contact',
        'hero-title': 'Security for Your Business',
        'hero-desc': 'Trust a local cybersecurity expert. We help companies in the Pleven region protect themselves from hacker attacks, data leaks, and malware.',
        'hero-cta': 'Learn More',
        'services-title': 'Our Services',
        'about-title': 'About Us',
        'blog-title': 'Blog',
        'portfolio-title': 'Portfolio',
        'partners-title': 'Our Partners',
        'contact-title': 'Contact',
    },
    bg: {
        'nav-home': 'Начало',
        'nav-services': 'Услуги',
        'nav-about': 'За нас',
        'nav-blog': 'Блог',
        'nav-portfolio': 'Портфолио',
        'nav-partners': 'Партньори',
        'nav-contact': 'Контакти',
        'hero-title': 'Сигурност за Вашия бизнес',
        'hero-desc': 'Доверете се на локален експерт в киберсигурността. Помагаме на фирми в област Плевен да се защитят от хакерски атаки, изтичане на данни и злонамерен софтуер.',
        'hero-cta': 'Научете повече',
        'services-title': 'Нашите Услуги',
        'about-title': 'За нас',
        'blog-title': 'Блог',
        'portfolio-title': 'Портфолио',
        'partners-title': 'Нашите Партньори',
        'contact-title': 'Контакти',
    }
};

let currentLang = 'bg';
const langBtn = document.getElementById('lang-toggle');

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    currentLang = lang;
    // Смени иконата или tooltip-а ако искаш
    langBtn.title = lang === 'bg' ? 'Switch to English' : 'Смени на български';
}

if (langBtn) {
    langBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'bg' ? 'en' : 'bg');
    });
}
// По подразбиране е български, но ако искаш да запомни избора, може да се добави localStorage.

// === Chatbot Widget ===
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Typing indicator
    let typingIndicator = null;

    function showTyping() {
        if (!typingIndicator) {
            typingIndicator = document.createElement('div');
            typingIndicator.className = 'flex items-start gap-2 chatbot-typing';
            typingIndicator.innerHTML = `
                <span class="inline-block w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">🤖</span>
                <div class="bg-gray-100 p-2 rounded-lg shadow w-fit flex items-center gap-1">
                    <span class="dot bg-gray-400 inline-block w-2 h-2 rounded-full animate-bounce"></span>
                    <span class="dot bg-gray-400 inline-block w-2 h-2 rounded-full animate-bounce delay-100"></span>
                    <span class="dot bg-gray-400 inline-block w-2 h-2 rounded-full animate-bounce delay-200"></span>
                </div>`;
            chatbotMessages.appendChild(typingIndicator);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    }
    function hideTyping() {
        if (typingIndicator) {
            chatbotMessages.removeChild(typingIndicator);
            typingIndicator = null;
        }
    }

    if (chatbotToggle && chatbotWindow) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden');
            if (!chatbotWindow.classList.contains('hidden')) {
                chatbotWindow.classList.add('chatbot-animate');
                setTimeout(() => chatbotInput && chatbotInput.focus(), 200);
            } else {
                chatbotWindow.classList.remove('chatbot-animate');
            }
        });
    }
    if (chatbotClose && chatbotWindow) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.add('hidden');
            chatbotWindow.classList.remove('chatbot-animate');
        });
    }
    if (chatbotForm && chatbotInput && chatbotMessages) {
        const botResponses = [
            "Благодарим за въпроса! Ще се свържем с вас скоро или вижте нашите услуги.",
            "Нашият екип ще се свърже с вас възможно най-скоро!",
            "Разгледайте нашите често задавани въпроси, може би ще намерите отговора там.",
            "Благодарим ви, че се свързахте с нас! Ще получите отговор в рамките на 24 часа.",
            "Можете да ни последвате в социалните мрежи за повече информация.",
            "Услугите ни са достъпни 24/7 – какво бихте искали да научите повече?"
        ];
    
        const getRandomBotResponse = () => {
            return botResponses[Math.floor(Math.random() * botResponses.length)];
        };
    
        const addMessage = (message, isUser = true) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = isUser 
                ? 'flex items-end gap-2 justify-end' 
                : 'flex items-start gap-2';
    
            messageDiv.innerHTML = isUser
                ? `<div class="bg-secondary text-white p-2 rounded-lg shadow w-fit">${message}</div>
                   <span class="inline-block w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-secondary font-bold">В</span>`
                : `<span class="inline-block w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold">🤖</span>
                   <div class="bg-gray-100 p-2 rounded-lg shadow w-fit">${message}</div>`;
    
            chatbotMessages.appendChild(messageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        };
    
        chatbotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = chatbotInput.value.trim();
            if (!msg) return;
    
            addMessage(msg, true);
            chatbotInput.value = '';
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
            showTyping();
    
            setTimeout(() => {
                hideTyping();
                const botReply = getRandomBotResponse();
                addMessage(botReply, false);
            }, 1000);
        });
    }

    // Добавям CSS за typing dots
    const chatbotStyle = document.createElement('style');
    chatbotStyle.textContent = `
        .chatbot-typing .dot {
            animation: chatbot-dot-bounce 1s infinite;
        }
        .chatbot-typing .dot.delay-100 { animation-delay: 0.15s; }
        .chatbot-typing .dot.delay-200 { animation-delay: 0.3s; }
        @keyframes chatbot-dot-bounce {
            0%, 80%, 100% { transform: scale(1); opacity: 0.7; }
            40% { transform: scale(1.3); opacity: 1; }
        }
    `;
    document.head.appendChild(chatbotStyle);
}); 