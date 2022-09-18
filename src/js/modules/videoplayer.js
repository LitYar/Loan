export default class PlayVideo {
    constructor(selector, overlay) {
        this.btns = document.querySelectorAll(selector);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector(".close");
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
        });

        this.overlay.style.display = 'flex';
    }

    bindTriggers() {
        this.btns.forEach(elem => {
            elem.addEventListener("click", ()=> {
                if (document.querySelector("iframe#frame")) {
                    this.overlay.style.display = 'flex';
                } else {
                    const urlVideo = elem.getAttribute('data-url');

                    this.createPlayer(urlVideo);
                }
            });
        });
    }

    bindCloseBtn() {

        this.close.addEventListener("click", () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindCloseBtn();
    }
}