
//carro 1
let xcarro = 600;
let ycarro = 40;
let velocarro1 = 2;

//carro2
let xcarro2 = 600;
let ycarro2 = 96;
let velocarro2 = 2.5;

//carro3 
let xcarro3 = 600;
let ycarro3 = 150;
let velocarro3 = 3.2;

function mostracarro(){
  image(imgcarro1, xcarro, ycarro, 50, 40 );
  image(imgcarro1, xcarro2, ycarro2, 50, 40 );
  image(imgcarro1, xcarro3, ycarro3, 50, 40 );
}

//velocidade do carro
function movimentacarro(){
  xcarro -= velocarro1 ;
  xcarro2 -= velocarro2;
  xcarro3 -= velocarro3;
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
