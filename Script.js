var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3, // Show 3 slides at once
    spaceBetween: -300, // Space between slides
    loop: true, // Enable looping

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

    on: {
        slideChange: function () {
            // Remove the active class from all slides
            this.slides.forEach(slide => slide.classList.remove('swiper-slide-active'));
            // Add the active class to the active slide
            this.slides[this.activeIndex].classList.add('swiper-slide-active');

            // Get the active slide
            const activeSlide = this.slides[this.activeIndex];
            // Get the data-color attribute value
            const color = activeSlide.getAttribute('data-color');
            // Set the background color of the Swiper container
            this.el.style.backgroundColor = color;
        }
    }
});

// Set the initial active slide and background color
swiper.slides[swiper.activeIndex].classList.add('swiper-slide-active');
const initialColor = swiper.slides[swiper.activeIndex].getAttribute('data-color');
swiper.el.style.backgroundColor = initialColor;