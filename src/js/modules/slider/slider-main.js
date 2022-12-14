import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(page, btns) {
        super(page, btns);
    }
    
    showSlides(n) {

        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        try {
            this.form.style.opacity = '0';
            if (n === 3) {
                this.form.classList.add("animated");
                setTimeout(()=> {
                    this.form.style.opacity = '1';
                    this.form.classList.add("slideInUp");
                },3000);
            } else {
                this.form.classList.remove("slideInUp");
            }
        } catch(e){}
        
        for (let elem of this.slides) {
            elem.style.display = "none";
        }
        
        this.slides[this.slideIndex - 1].style.display = "block";
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTrigger() {

        this.btns.forEach(elem => {
            elem.addEventListener("click", () => {
                this.plusSlides(1);
            });
            if (this.slideIndex === 3) {
                setTimeout(()=> {
                    this.form.style.display = "block";
                },3000);
            }

            elem.parentNode.previousElementSibling.addEventListener("click", (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        document.querySelectorAll(".prevmodule").forEach(item => {
            item.addEventListener("click", (e)=> {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
            });
        });
        document.querySelectorAll(".nextmodule").forEach(item => {
            item.addEventListener("click", (e)=> {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });
    }

    render() {

        if (this.page) {
            try {
                this.form = document.querySelector(".hanson");
            } catch(e){}

            this.showSlides(this.slideIndex);
            this.bindTrigger();
        }
    }
}