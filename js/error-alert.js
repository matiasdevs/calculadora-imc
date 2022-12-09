export const errorAlert = {
  element: document.querySelector('.screen-error'),
  open(){
    errorAlert.element.classList.add('open');
  },
  close(){
    errorAlert.element.classList.remove('open');
  }
}

