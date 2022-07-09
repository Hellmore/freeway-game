//Código Vaca

let xVaca = 81;
let yVaca = 366;
let larguraVaca = 30;
let alturaVaca = 30;
let colisao = false;
let meusPontos = 0;

function desenhaVaca() {
  image(imagemVaca, xVaca, yVaca, larguraVaca, alturaVaca);
}

function movimentaVaca() {
  if (keyIsDown(87)) {
    yVaca -= 2;
  }
  if (keyIsDown(83)) {
    if (naoVaiParaBaixo()) {
      yVaca += 2;
    }
  }

  function naoVaiParaBaixo() {
    return yVaca < 366;
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      larguraCarros,
      alturaCarros,
      xVaca,
      yVaca,
      15
    );
    if (colisao) {
      VacaNaPosiçãoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function VacaNaPosiçãoInicial() {
  yVaca = 366;
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(178, 34, 34));
  text(meusPontos, 95, 27);
}

function marcaPonto() {
  if (yVaca < 20) {
    meusPontos += 1;
    somDoPonto.play();
    VacaNaPosiçãoInicial();
  }
}
