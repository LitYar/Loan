import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import PlayVideo from "./modules/videoplayer";
import Difference from "./modules/difference";
import Form from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {
    const player = new PlayVideo(".showup .play", ".overlay");
    const slider = new MainSlider({page: ".page", btns: ".next"});
    const showUpSlider = new MiniSlider({
        page: ".showup__content-slider",
        prev: ".showup__prev",
        next: ".showup__next",
        activeClass: "card-active",
        animate: true,
    });
    const moduleSlider = new MiniSlider({
        page: ".modules__content-slider",
        prev: ".modules__info-btns .slick-prev",
        next: ".modules__info-btns .slick-next",
        activeClass: "card-active",
        animate: true,
        autolay: true,
    });
    const feedSlider = new MiniSlider({
        page: ".feed__slider",
        prev: ".feed__slider .slick-prev",
        next: ".feed__slider .slick-next",
        activeClass: "feed__item-active",
    });


    slider.render();
    showUpSlider.init();
    moduleSlider.init();
    feedSlider.init();
    player.init();
    new Difference(".officerold", ".officernew", ".officer__card-item").init();
    new Form(".form").init();
});