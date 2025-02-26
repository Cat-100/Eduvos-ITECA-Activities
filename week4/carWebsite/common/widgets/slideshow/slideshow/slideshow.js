import { Slide } from "../slide/slide.js";

export class SlideShow extends HTMLElement {  
  
  constructor() {
        super();
        this.attachShadow({mode: "open"});

        /// Create link to link css
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "./slide.css";

        /// Element wrapper
        const wrapper = document.createElement("div");
        wrapper.classList.add("slideshow-widget");
        
        /// Create slidshow container
        const slideshowContainer = document.createElement("div");
        slideshowContainer.classList.add('slideshow-container');

        /// Create dot container to hold the dots
        const dotContainer = document.createElement('div');
        dotContainer.classList.add('dot-container');

        /// Add container to wrapper
        wrapper.appendChild(slideshowContainer);
        wrapper.appendChild(dotContainer);
        /// Insert the "widget"
        this.shadowRoot.append(styleLink, wrapper);
    }

    connectedCallback() {
      this.renderSlides();
    }

    renderSlides() {
      /// Get the latest container instance
      const slideContainer = this.shadowRoot.querySelector('.slideshow-container');
      const slideItems = this.getElementsByTagName('slide-item');
      
      /// Get dotcontainer
      const dotContainer = this.shadowRoot.querySelector('.dot-container');
      
      for (let index = 0; index < slideItems.length; index++) {
        /// Generate Slide
        this.createNewSlide( slideItems[index] , index, slideContainer);
        /// Generate Dot
        this.createNewSlidDot(index , dotContainer);
      }

      /// SHow the first slide
      this.showSlide(0);
    }

    createNewSlidDot(index, container) {
      const span = document.createElement('span');
      span.classList.add("dot")
      span.onclick(() => this.showSlide(index));

      container.appendChild(span);
    }

    // Next/previous controls
    plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide(n) {
      showSlides(slideIndex = n);
    }

    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    
    }

    createNewSlide(slideItem ,currentIndex ,  container ) {
      /// Get attributes
      const numberText = currentIndex +  1 ;
      const src  = slideItem.getAttribute('src');
      const text = slideItem.getAttribute('text');
      
      /// create a new slide for the container
      const newSlide = new Slide();
      
      /// Generate new slide from its params 
      newSlide.generateFromParams(numberText, src , text);
      
      /// Add to slide conatiner
      container.appendChild(newSlide);
    }
}


/// Register the Widget
customElements.define("car-slideshow" , SlideShow);