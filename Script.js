var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.2,
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
        850: {
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
if (swiper && swiper.slides && swiper.slides[swiper.activeIndex]) {
    swiper.slides[swiper.activeIndex].classList.add('swiper-slide-active');
    const initialColor = swiper.slides[swiper.activeIndex].getAttribute('data-color');
    swiper.el.style.backgroundColor = initialColor;
}



// Modal functionality
const modal = document.getElementById('image-modal');
if (modal) { // Check if the modal exists
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const modalClose = document.querySelector('.modal-close');
    const modalDescription = document.getElementById('modal-description');

    document.querySelectorAll('.image-container img').forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modalText.textContent = img.getAttribute('data-text');
            modalDescription.textContent = img.getAttribute('data-description') || ''; // Set description
            modal.classList.remove('hide'); // Remove hide class
            modal.classList.add('show'); // Add show class
        });
    });

    if (modalClose) { // Check if the close button exists
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show'); // Remove show class
            modal.classList.add('hide'); // Add hide class
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show'); // Remove show class
            modal.classList.add('hide'); // Add hide class
        }
    });
}
