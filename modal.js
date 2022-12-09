export const Modal = {
  action: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.close'),
  open() {
    Modal.action.classList.add('open')
  },
  close() {
    Modal.action.classList.remove('open')
  }
}

Modal.btnClose.onclick = () => {
   Modal.close();
}