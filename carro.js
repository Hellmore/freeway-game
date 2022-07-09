//Código Carro

let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [40, 96, 150, 210, 265, 314];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let larguraCarros = 50;
let alturaCarros = 40;

function desenhaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i];
}

function carroComecaDenovo() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (carroSumiu(xCarros[i])){
      xCarros[i] = 550;
    }
  }
}

function carroSumiu(xCarros){
  return xCarros < -50;
}