//codigo de carros 
//indice posicao 0-1-2 , começa sempre com o indice 0
let ycarros = [40, 96 , 150];
let velocarros = [2 , 2.5 , 3.2];
let xcarros = [ 600 , 600, 600];

function mostracarro(){
  for (let i = 0;  i < imgcarro.length; i = i+1 ) {
  image(imgcarro[i], xcarros[i],ycarros[i], 50, 40 );
  }
}

//velocidade do carro
function movimentacarro(){
  xcarros-= velocarros[0];
  xcarros-= velocarros[1];
  xcarros-= velocarros[2];
}

//resetar os carros

function resetposicao(){
  if (xcarro <-50){
    xcarro = 600
  }
   if (xcarro2 <-50){
    xcarro2 = 600
  }
   if (xcarro3 <-50){
    xcarro3 = 600
  }
}

