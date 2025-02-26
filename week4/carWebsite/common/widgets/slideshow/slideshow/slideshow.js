export class SlideShow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        /// Create link to link css
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "slide.css";

        /// Element wrapper
        const wrapper = document.createElement("div");
        wrapper.classList.add("slideshow-widget");
        wrapper.innerHTML = `     
            <!-- Slideshow container -->
            <div class="slideshow-container">

              <!-- Full-width images with number and caption text -->
              <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="assets/images/vintage-car.webp" style="width:100%">
                <div class="text">Caption Text</div>
              </div>
            
              <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="img2.jpg" style="width:100%">
                <div class="text">Caption Two</div>
              </div>
            
              <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="img3.jpg" style="width:100%">
                <div class="text">Caption Three</div>
              </div>
            
              <!-- Next and previous buttons -->
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br>
          
          <!-- The dots/circles -->
          <div style="text-align:center"></div>

        `;
        /// Insert the "widget"
        this.shadowRoot.append(styleLink, wrapper);

        /// Initialize the widget
        this.init();
    }


    init() {
    }

    handleSlideShowInit() {
      let slideIndex = 0;
      const slides = this.shadowRoot.querySelectorAll(".mySlides");
      const dots = this.shadowRoot.querySelectorAll(".dot");

      const showSlides = (n) => {
          slides.forEach(slide => slide.style.display = "none");
          dots.forEach(dot => dot.classList.remove("active"));

            slideIndex = (n + slides.length) % slides.length;
            slides[slideIndex].style.display = "block";
            dots[slideIndex].classList.add("active");
        };

        /// Navigation
        this.shadowRoot.querySelector(".prev").addEventListener("click", () => showSlides(slideIndex - 1));
        this.shadowRoot.querySelector(".next").addEventListener("click", () => showSlides(slideIndex + 1));
        dots.forEach((dot, i) => dot.addEventListener("click", () => showSlides(i)));

        /// Auto-start
      showSlides(slideIndex);
    }
}


/// Register the component
customElements.define("car-slideshow" , SlideShow);