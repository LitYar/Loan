import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(page, next, prev, activeClass, autolay, animate) {
        super(page, next, prev, autolay, animate, activeClass);
    }

    decorizeSlides(){
            [...this.slides].forEach(elem => {
                elem.classList.remove(this.activeClass);
                if (this.animate) {
                    elem.querySelector(".card__title").style.opacity = "0.4";
                    elem.querySelector(".card__controls-arrow").style.opacity = "0";
                }
            });
            if (!this.slides[0].closest("button")) {
                this.slides[0].classList.add(this.activeClass);
            }
        
        if (this.animate) {
            this.slides[0].querySelector(".card__title").style.opacity = "1";
            this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
        }
    }

    nextSlides() {

            if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON")    {
                console.log(this.slides);
                this.page.appendChild(this.slides[0]);
                this.page.appendChild(this.slides[1]);
                this.page.appendChild(this.slides[2]);
                this.decorizeSlides();
            } else if (this.slides[1].tagName == "BUTTON") {
                this.page.appendChild(this.slides[0]);
                this.page.appendChild(this.slides[1]);
                this.decorizeSlides();
            } else {
                this.page.appendChild(this.slides[0]);
                this.decorizeSlides();
            }  
    }

    bindTriggers() {

        this.next.addEventListener("click", () => this.nextSlides());

        this.prev.addEventListener("click", ()=> {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName != 'BUTTON') {
                    let active = this.slides[i];
                    this.page.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
        });
    }

    init() {
        try {
            this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-item: flex-start;
        `;

        this.bindTriggers();
        this.decorizeSlides();

        if (this.autolay) {
            setInterval(() => this.nextSlides(), 5000);
        }
        } catch(e) {}
    }
}