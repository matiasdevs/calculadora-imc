const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const modalIMC = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const btnClose = document.querySelector('.close');

form.onsubmit = function(event){
  event.preventDefault();

  const peso = inputPeso.value;
  const altura = inputAltura.value;
  const result = calculaIMC(peso, altura);

  modalMessage.innerText = `Seu IMC é de ${result.toFixed(2)}`;
  closeAction();
  
}

btnClose.onclick = () => {
  closeAction();
}

function closeAction(){
  modalIMC.classList.toggle('open')
}

function calculaIMC(peso, altura){
  return IMC = peso / (altura * altura);
}

// form.onsubmit = () => {}

// form.onsubmit = envioFormulario;
// function envioFormulario() {

// } 