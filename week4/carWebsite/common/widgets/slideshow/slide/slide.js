export class Slide extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});

        const imgSrc = this.getAttribute("src") || "";
        const text = this.getAttribute("text") || "";

        this.generateFromParams('', imgSrc, text);
    }   
    
    generateFromParams(numberText, src, text) {
        const wrapper = this.generateWrapper(numberText, src, text);

        /// Add the widget
        this.shadowRoot.append(wrapper);
    }

    generateWrapper(numberText , imgSrc , text) {
        const wrapper  = document.createElement("div");
        wrapper.classList.add("mySlide");
        wrapper.classList.add("fade")

        wrapper.innerHTML = `
            <div class="numbertext">${numberText ?? ''}</div>
            <img src="${imgSrc ?? ''}" style="width:100%" alt="slideshow-item">
            <div class="text">${text ?? ''}</div>
        `;

        return wrapper
    }
}

customElements.define('slide-item' , Slide);