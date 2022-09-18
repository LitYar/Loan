export default class Slider {

    constructor({
        page = null,
        btns = null,
        next = null,
        prev = null,        
        activeClass = '',
        autolay,
        animate,
        } = {}) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.autolay = autolay;
        this.animate = animate;
        this.slideIndex = 1;
    }
} 