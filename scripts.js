


//Interspector animations

const elements = document.querySelectorAll('.hidden');
const elements2 = document.querySelectorAll('.hidden-2');
const elements3 = document.querySelectorAll('.hidden-3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Добавляем класс при появлении
        observer.unobserve(entry.target); // Отключаем наблюдение после анимации
        }
    });
},
{ threshold: 0.2 }); // Срабатывает, когда 20% элемента в зоне видимости

elements.forEach(el => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('visible-2');
            observer2.unobserve(entry.target);
        }, index * 200);
        }
    });
},
{ threshold: 0.2 });

elements2.forEach(el => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('visible-3');
            observer3.unobserve(entry.target);
        }, index * 200);
        }
    });
},
{ threshold: 0.2 });

elements3.forEach(el => observer3.observe(el));