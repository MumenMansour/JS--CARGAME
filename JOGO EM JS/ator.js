//ator
let xator = 100
let yator = 366



function mostraator ( ){
  image(imgator, xator, yator , 30,30);
}


function movimentaator(){
  if(keyIsDown(UP_ARROW)){
    yator -= 3
  }
  {if(keyIsDown(DOWN_ARROW))
    yator += 3
  }
}