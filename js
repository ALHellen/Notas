function calcularImc(peso, altura){
  let altura2 = altura ** 2;
  let imc = peso*altura2;
  return imc;
}


let p = prompt("Digite seu peso: ");
let a = prompt("Digite sua altura: ");
let funcao = calcularImc(p,a);
alert("Seu imc é: " + funcao);
