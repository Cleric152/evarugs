const swiper = new Swiper('.swiper', {   
    slidesPerView: 3,
    loop: true,  
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClicedSlide: true,
    toggle: true,
    breakpoints: {
        320: {
            slidesPerView: 1     
        },
        640: {
            slidesPerView: 2
        },
        920: {
            slidesPerView: 3
        }    
    },
  });