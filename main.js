import { Modal } from './modal.js'

const form = document.querySelector('form');
const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

form.onsubmit = function(event){
  event.preventDefault();

  const peso = inputPeso.value;
  const altura = inputAltura.value;
  const result = calculaIMC(peso, altura);

  Modal.message.innerText = `Seu IMC é de ${result.toFixed(2)}`;
  Modal.open();
  
}

function calculaIMC(peso, altura){
  let IMC = peso / (altura * altura);
  return IMC;
}

// form.onsubmit = () => {}

// form.onsubmit = envioFormulario;
// function envioFormulario() {

// } 