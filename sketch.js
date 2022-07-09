function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  desenhaVaca();
  desenhaCarro();
  movimentaCarro();
  carroComecaDenovo();
  movimentaVaca();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}





