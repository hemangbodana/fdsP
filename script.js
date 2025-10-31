document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.slider-container');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  // Replace these with your actual image paths
  const imageUrls = [
    'components/hero1.jpg',
    'components/hero2.jpg',
    'components/hero3.jpg',
    'components/hero4.jpg',
    'components/hero5.jpg',
    'components/hero6.jpg'
  ];

  let currentIndex = 0;

  // Create slides
  imageUrls.forEach(url => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url(${url})`;
    sliderContainer.appendChild(slide);
  });

  function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateSlider();
  });

  // Auto-play every 5 seconds
  setInterval(() => {
    nextBtn.click();
  }, 5000);
});


// About us 

// Loading screen functionality
document.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.getElementById('loadingScreen');

  // Simulate loading
  setTimeout(() => {
    loadingScreen.classList.add('hidden');

    // Trigger scroll reveal animations after loading
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.scroll-reveal');
      revealElements.forEach((el, index) => {
        el.classList.add('visible');
      });
    }, 300);
  }, 1500);
  // Scroll reveal on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
});



// ================== Projects ===================== //
const projects = {
  laproscopy: [
    "https://placehold.co/800x600/333/fff?text=Laparoscopy+1",
    "https://placehold.co/800x600/333/fff?text=Laparoscopy+2",
    "https://placehold.co/800x600/333/fff?text=Laparoscopy+3",
    "https://placehold.co/800x600/333/fff?text=Laparoscopy+4"
  ],
  retina: [
    "https://placehold.co/800x600/666/fff?text=Retina+1",
    "https://placehold.co/800x600/666/fff?text=Retina+2",
    "https://placehold.co/800x600/666/fff?text=Retina+3",
    "https://placehold.co/800x600/666/fff?text=Retina+4"
  ],
  ddh: [
    "https://placehold.co/800x600/ff9999/fff?text=DDH+1",
    "https://placehold.co/800x600/ff9999/fff?text=DDH+2",
    "https://placehold.co/800x600/ff9999/fff?text=DDH+3",
    "https://placehold.co/800x600/ff9999/fff?text=DDH+4"
  ],
  jenshiv: [
    "https://placehold.co/800x600/66ccff/fff?text=Jenshiv+1",
    "https://placehold.co/800x600/66ccff/fff?text=Jenshiv+2",
    "https://placehold.co/800x600/66ccff/fff?text=Jenshiv+3",
    "https://placehold.co/800x600/66ccff/fff?text=Jenshiv+4"
  ],
  excel: [
    "https://placehold.co/800x600/99ccff/fff?text=Excel+1",
    "https://placehold.co/800x600/99ccff/fff?text=Excel+2",
    "https://placehold.co/800x600/99ccff/fff?text=Excel+3",
    "https://placehold.co/800x600/99ccff/fff?text=Excel+4"
  ],
  'sai-neelkanth': [
    "https://placehold.co/800x600/99ccff/fff?text=Sai+Neelkanth+1",
    "https://placehold.co/800x600/99ccff/fff?text=Sai+Neelkanth+2",
    "https://placehold.co/800x600/99ccff/fff?text=Sai+Neelkanth+3",
    "https://placehold.co/800x600/99ccff/fff?text=Sai+Neelkanth+4"
  ]
};

// Project titles mapping
const projectTitles = {
  laproscopy: "Laparoscopy Hospital - Pune",
  retina: "Retina Hospital - Ahmedabad",
  ddh: "DDH Hospital - Lucknow",
  jenshiv: "Jenshiv Hospital - Ahmedabad",
  excel: "Excel Hospital - Ahmedabad",
  'sai-neelkanth': "Sai Neelkanth Hospital - Kalyan"
};

// Get elements
const projectCards = document.querySelectorAll('.project-card');
const galleryModal = document.querySelector('.gallery-modal');
const closeBtn = document.querySelector('.close-btn');
const galleryImagesContainer = document.querySelector('.gallery-images');
const galleryTitle = document.querySelector('.gallery-title');
const loadingSpinner = document.querySelector('.loading-spinner');

// Add click event to each project card
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    showGallery(projectId);
  });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
  galleryModal.classList.remove('active');
  galleryImagesContainer.innerHTML = '';
});

// Close modal when clicking outside
galleryModal.addEventListener('click', (e) => {
  if (e.target === galleryModal) {
    galleryModal.classList.remove('active');
    galleryImagesContainer.innerHTML = '';
  }
});

// Function to show gallery
function showGallery(projectId) {
  // Show loading spinner
  loadingSpinner.style.display = 'flex';

  // Simulate loading time
  setTimeout(() => {
    // Hide loading spinner
    loadingSpinner.style.display = 'none';

    // Set gallery title
    galleryTitle.textContent = projectTitles[projectId];

    // Clear previous images
    galleryImagesContainer.innerHTML = '';

    // Add images to gallery
    const images = projects[projectId];
    images.forEach(imgUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imgUrl;
      imgElement.alt = `${projectTitles[projectId]} Image`;
      imgElement.className = 'gallery-image';
      galleryImagesContainer.appendChild(imgElement);
    });

    // Show gallery modal
    galleryModal.classList.add('active');
  }, 1000);
}
