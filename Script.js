var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,

    coverflowEffect: {
        rotate: 20,
        stretch: 10,
        depth: 10,
        modifier: 1,
        slideShadows: false,
    },
    
    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        720: {
            slidesPerView: 3, // Show 3 slides at once
            spaceBetween: 20
        }
    },

    on: {
        slideChange: function () {

            // Get the active slide
            const activeSlide = this.slides[this.activeIndex];
            // Get the data-color attribute value
            const color = activeSlide.getAttribute('data-color');
            // Set the background color of the Swiper container
            this.el.style.backgroundColor = color;

            // Change the background color of the body
            document.body.style.backgroundColor = color || '#ffffff'; // Default to white if no color is specified
        }
    }
});

// Set the initial active slide and background color
swiper.slides[swiper.activeIndex].classList.add('swiper-slide-active');
const initialColor = swiper.slides[swiper.activeIndex].getAttribute('data-color');
swiper.el.style.backgroundColor = initialColor;

// Modal functionality
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
        modalText.textContent = img.getAttribute('data-text');
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});