import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.header');
        this.pageSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events() {
        addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight
        }), 333)
    }

    runOnScroll() {
        this.determineScrollDirection();

        if (window.scrollY > 60) {
            this.siteHeader.classList.add('header--dark')
        } else {
            this.siteHeader.classList.remove('header--dark')
        }

        this.pageSections.forEach(el => this.calcSection(el));
    }

    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrolLDirection = 'down';
        } else {
            this.scrollDirection = 'up';
        };
        this.previousScrollY = window.scrollY;
    }

    calcSection(el) {
        let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100;
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.ofsetTop + el.ofsetHeight && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
            if (scrollPercent < 18 && scrollPercent > -0.1) {
                let matchingLink = el.getAttribute('data-matching-link');
                document.querySelectorAll(`.header__nav a:not(${matchingLink})`).forEach(el => el.classList.remove('is-current-link'));
                document.querySelector(matchingLink).classList.add('is-current-link');
            }
        }
    }

}
export default StickyHeader;