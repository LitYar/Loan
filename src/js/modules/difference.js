export default class Difference {
    constructor(oldOfficer, newOfficer, item) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItem = this.oldOfficer.querySelectorAll(item);
        this.newItem = this.newOfficer.querySelectorAll(item);
        this.oldCounter = 0;
        this.newCounter = 0;
        } catch(e) {}
    }

    showCards(wraper, count, item) {
        wraper.querySelector(".plus").addEventListener("click", () => {
            if (count !== item.length - 2) {
                item[count].style.display = "flex";
                count++;
            } else {
                item[count].style.display = "flex";
                item[this.oldItem.length - 1].remove();
            }
        });
    }
    hideSlide(arg) {
        arg.forEach((el, i, arr) => {
            if (i !== arr.length - 1) {
                el.style.display = "none";
            }
        });
    }
    
    bindTrigger() {
        this.showCards(this.oldOfficer, this.oldCounter, this.oldItem);
        this.showCards(this.newOfficer, this.newCounter, this.newItem);
    }

    init() {
        try {
            this.hideSlide(this.oldItem);
            this.hideSlide(this.newItem);
            this.bindTrigger();
        } catch(e) {}
    }
}