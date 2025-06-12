# 🛡️ КиберСигурност - Уебсайт за Киберсигурностен Бизнес

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/website?url=https://github.com/MaciPatrona)](https://github.com/MaciPatrona)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/MaciPatrona)

Модерен, отзивчив уебсайт за киберсигурностен бизнес, създаден с HTML, CSS и JavaScript. Този проект предоставя професионална платформа за представяне на киберсигурностни услуги и решения.

## 📋 Съдържание

- [Функционалности](#функционалности)
- [Технологии](#технологии)
- [Инсталация](#инсталация)
- [Персонализация](#персонализация)
- [Структура на проекта](#структура-на-проекта)
- [Принос](#принос)
- [Лиценз](#лиценз)
- [Контакти](#контакти)

## ✨ Функционалности

- 🌐 Отзивчив дизайн за всички устройства
- 🎨 Модерен и професионален интерфейс
- ⚡ Плавни анимации и преходи
- 📱 Мобилно меню
- 📝 Форма за контакт
- 📊 Анимирани статистики
- 📰 Блог секция
- 💼 Портфолио с отзиви

## 🛠️ Технологии

- HTML5
- CSS3 (с CSS променливи)
- JavaScript (ES6+)
- Font Awesome икони
- Google Fonts

## 🚀 Инсталация

1. Клонирайте репозиторито:
```bash
git clone https://github.com/MaciPatrona/sigurnosystems.git
```

2. Отворете `index.html` във вашия браузър или стартирайте локален сървър:
```bash
# Ако имате Python инсталиран
python -m http.server 8000
```

## 🎨 Персонализация

### Промяна на цветове

Цветовете могат да бъдат променени в `styles.css` файла:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-bg: #f8f9fa;
    --white: #ffffff;
}
```

### Добавяне на нови услуги

```html
<div class="service-card">
    <i class="fas fa-[икона]"></i>
    <h3>Име на услугата</h3>
    <p>Описание на услугата</p>
</div>
```

### Добавяне на нови статии в блога

```html
<article class="blog-card">
    <h3>Заглавие на статията</h3>
    <p>Кратко описание...</p>
    <a href="#" class="read-more">Прочети повече</a>
</article>
```

## 📁 Структура на проекта

```
sigurnosystems/
├── index.html          # Основен HTML файл
├── styles.css          # CSS стилове
├── script.js           # JavaScript функционалност
├── blog/              # Блог статии
└── Upgrade/           # Допълнителни ресурси
```

## 🤝 Принос

Приветстваме приносите! Моля, следвайте тези стъпки:

1. Fork-нете проекта
2. Създайте нова branch (`git checkout -b feature/AmazingFeature`)
3. Commit-нете промените (`git commit -m 'Add some AmazingFeature'`)
4. Push-нете към branch-а (`git push origin feature/AmazingFeature`)
5. Отворете Pull Request

## 📄 Лиценз

Този проект е с отворен код и е достъпен под MIT лиценз. Вижте [LICENSE](LICENSE) файла за повече информация.

## 📞 Контакти

- GitHub: [@MaciPatrona](https://github.com/MaciPatrona)
- Email: [Добавете вашия имейл]

---

⭐ Star-нете този проект, ако ви е полезен! 