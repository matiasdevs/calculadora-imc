import { Modal } from './modal.js'
import { errorAlert } from './error-alert.js';
import { calculaIMC, NaN } from './utils.js';

const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

form.onsubmit = function(event){
  event.preventDefault();

  const peso = inputPeso.value;
  const altura = inputAltura.value;

  const errorNaN = NaN(peso) || NaN(altura);

  if(errorNaN) {
    errorAlert.open();
    return;
  }

  errorAlert.close();

  const result = calculaIMC(peso, altura);
  Modal.message.innerText = `Seu IMC é de ${result.toFixed(2)}`;
  Modal.open();
  
}


// form.onsubmit = () => {}

// form.onsubmit = envioFormulario;
// function envioFormulario() {

// } 