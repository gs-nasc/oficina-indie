const Page = {
    init: () => {
        Page.events.register();
    },
    events: {
        register: () => {
            window.addEventListener("load", Page.events.page.load)
        },
        page: {
            load: () => {
                Page.carousel.setup();
            }
        }
    },
    carousel: {
        animationId: undefined,
        position: 0,
        speed: 0.5,
        setup: () => {
            const imgCarousel = document.querySelector(".pics-carousel");

            const items = imgCarousel.children;
            const clones = [];

            for (let i = 0; i < items.length; i++) {
                const item = items[i].cloneNode(true);
                item.setAttribute('aria-hidden', 'true');
                clones.push(item);
            }
            clones.forEach(clone => imgCarousel.appendChild(clone));

            Page.carousel.move();
        },
        move: () => {
            const imgCarousel = document.querySelector(".pics-carousel");
        
            Page.carousel.position;
            Page.carousel.speed;

            Page.carousel.position -= Page.carousel.speed;
            const carouselSize = imgCarousel.scrollWidth / 2;
            if (Math.abs(Page.carousel.position) >= carouselSize) {
                Page.carousel.position = 0;
            }
            imgCarousel.scrollTo(Math.abs(Page.carousel.position), 0);
            Page.carousel.animationId = requestAnimationFrame(Page.carousel.move);
        }
    }
};

Page.init();