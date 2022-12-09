export function calculaIMC(peso, altura){
  let IMC = peso / (altura * altura);
  return IMC;
}

export function NaN(value){
  return isNaN(value) || value == ''
}