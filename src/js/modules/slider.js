export default class Slider {

    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
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

    render() {
        try {
            this.form = document.querySelector(".hanson");
        } catch(e){}

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
        this.showSlides(this.slideIndex);
    }
} 