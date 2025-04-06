var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3, // Show 3 slides at once
    spaceBetween: 30, // Space between slides
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