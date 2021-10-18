import '../styles/style.css';
import 'lazysizes';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

new MobileMenu();
new StickyHeader();

new RevealOnScroll(document.querySelectorAll('.features__box'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonials__box'), 60);

let modal;

document.querySelectorAll('.modal-open').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        console.log('clicked');
        if (typeof modal == 'undefined') {
            import( /* webpackChunkName: 'modal' */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(console.log('Error with the modal!'));
        } else {
            modal.openTheModal();
        }

    })

})
if (module.hot) {
    module.hot.accept();
}