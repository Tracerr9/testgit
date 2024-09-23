document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null, // null means the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element should be visible to trigger the callback
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.element-to-watch');
    elements.forEach(element => {
        observer.observe(element);
    });
});
