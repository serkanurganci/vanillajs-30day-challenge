function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e){
      sliderImages.forEach(sliderImage =>{
          //halfway through the image
          const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
          //bottom of the image
          const imageBottom = sliderImage.offsetTop + sliderImage.height;
          const isHalfShown = slideInAt > sliderImage.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;

        console.log("slideInAt:"+slideInAt,"imageBottom:"+imageBottom,"isHalfShown:"+isHalfShown,"isNotScrolledPast:"+isNotScrolledPast)
        
          
          if(isHalfShown && isNotScrolledPast){
              sliderImage.classList.add('active')
          }else{
              sliderImage.classList.remove('active')
          }
          
      })
  }

  window.addEventListener('scroll',debounce(checkSlide))