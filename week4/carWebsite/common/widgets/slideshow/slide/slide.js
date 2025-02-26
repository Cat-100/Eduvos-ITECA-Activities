export class Slide extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});


        const wrapper  = document.createElement("div");
        wrapper.classList.add("mySlide fade");

        const imgSrc = this.getAttribute("src") || "";
        const numberText = this.getAttribute("numbertext") || "";
        const text = this.getAttribute("text") || "";


        wrapper.innerHTML = `
            <div class="numbertext">${numberText}</div>
            <img src=${imgSrc} style="width:100%">
            <div class="text">${text}</div>
        `;

        /// Add the widget
        this.shadowRoot.append(wrapper);
    }   
}

customElements.define('slide-item' , Slide);