class Modal {
  constructor() {
    this.injectHtml();
    this.modalClose = document.querySelector('.modal__close');
    this.modal = document.querySelector('.modal');
    this.events();
  }

  events() {

    // listen for close click
    this.modalClose.addEventListener('click', () => this.closeTheModal());

    // pushes any key
    document.addEventListener('keyup', e => this.keyPressHandler(e))
  }

  openTheModal() {
    this.modal.classList.add('modal--visible');
  }

  closeTheModal() {
    this.modal.classList.remove('modal--visible')
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  injectHtml() {
    document.body.insertAdjacentHTML('beforeend', `
                <div class="modal">
                  <div class="modal__inner">
                    <h2 class="heading-2 heading-2--primary heading-2--light heading-2--huge "><img src="assets/images/icons/mail.svg"
                        class="mr-small"> Get in <strong>Touch</strong></h2>
                    <div class="mt-medium">
                      <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on
                        any of the platforms below!</p>
                    </div>
              
                    <div class="social-icons mt-small">
                      <a href="#" class="social-icons__icon facebook"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
                      <a href="#" class="social-icons__icon twitter"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
                      <a href="#" class="social-icons__icon instagram"><img src="assets/images/icons/instagram.svg"
                          alt="Instagram"></a>
                      <a href="#" class="social-icons__icon youtube"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
                    </div>
                  </div>
                  <div class="modal__close">X</div>
                </div>
              `)
  }
}

export default Modal;