let carousels = {};
let intervalId;

function initCarousel(id) {
  const carouselContainer = document.querySelector(`[data-carousel="${id}"]`);
  const carousel = carouselContainer.querySelector('.carousel');
  const items = carouselContainer.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  carousels[id] = {
    currentIndex: 0,
    carousel,
    totalItems,
  };

  showSlide(id, 0);
}

function showSlide(id, index) {
  const carouselData = carousels[id];
  if (!carouselData) return;

  if (index >= carouselData.totalItems) {
    carouselData.currentIndex = 0;
  } else if (index < 0) {
    carouselData.currentIndex = carouselData.totalItems - 1;
  } else {
    carouselData.currentIndex = index;
  }

  const offset = -carouselData.currentIndex * 100;
  carouselData.carousel.style.transform = `translateX(${offset}%)`;
  
}

function nextSlide(id) {
  const carouselData = carousels[id];
  if (!carouselData) return;
  showSlide(id, carouselData.currentIndex + 1);
}

function prevSlide(id) {
  const carouselData = carousels[id];
  if (!carouselData) return;
  showSlide(id, carouselData.currentIndex - 1);
}

// Initialize all carousels
document.querySelectorAll('.carousel-container').forEach((container) => {
  const id = container.getAttribute('data-carousel');
  initCarousel(id);
});

const elements = document.querySelectorAll('.be-observed');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('visible', entry.isIntersecting)
    //if (entry.isIntersecting) observer.unobserve(entry.target)

  })
}, {
  threshold: 0.5,
  rootMargin: '45px'
})

elements.forEach((element) => {
  observer.observe(element)
})