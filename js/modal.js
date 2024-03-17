// Modal
export default function initModal() {
  const btnLogin = document.querySelector('#login-btn');
  const modalContainer = document.querySelector('.modal-container');
  const modalEl = document.querySelector('.modal');

  function openModal(event) {
    event.preventDefault();
    modalContainer.style.opacity = 1;
    modalContainer.style.pointerEvents = 'initial';
    modalEl.style.transform = 'translate3d(0,0,0)';
  }
  btnLogin.addEventListener('click', openModal);

  const btnClose = document.querySelector('.close');
  function closeModal(event) {
    event.preventDefault();
    modalContainer.style.pointerEvents = 'none';
    modalContainer.style.opacity = 0;
    modalEl.style.transform = 'translate3d(0,100px,0)';
  }
  btnClose.addEventListener('click', closeModal);
}
