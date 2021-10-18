class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.header__nav--icon');
        this.menuContent = document.querySelector('.header__nav');
        this.logo = document.querySelector('.header__logo');

        this.events();
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('header__nav--visible');
        this.menuIcon.classList.toggle('header__nav--icon-x');
        this.logo.classList.toggle('header__logo--visible');
    }
}

export default MobileMenu;