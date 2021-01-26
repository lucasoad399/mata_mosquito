
var altura=0, largura=0;
var indiceVidas=0;
var tempo=10;
function gira(){
  var direcao = Math.floor(Math.random() *2+1);
  //console.log(direcao)
  if (direcao==1) return 'rotateY(180deg)';
}
function ajustaPalcoTamanho(){
  altura=window.innerHeight;
  largura = window.innerWidth;
  console.log(largura+" "+altura)


}

function contaTempo(){
  tempo = document.getElementById('contador').innerHTML;
  if(tempo==0){
    clearInterval();
    clearInterval(criaMosca);
    window.location.href='vitoria.html';
  } else {
    tempo--;
    document.getElementById('contador').innerHTML = tempo;
  }
}



ajustaPalcoTamanho();
var posicaoX = Math.floor(Math.random() * largura);
var posicaoY = Math.floor(Math.random() * altura);

console.log("posicaoX: "+posicaoX + " | posicaoY: "+ posicaoY)


classeRandomica = function (){
  var tamanho = Math.floor(Math.random() * 3+1);
  //console.log('tamanho = '+ tamanho)
  if(tamanho==1) return 'mosquito1';
  else if(tamanho==2) return 'mosquito2';
  else return 'mosquito3';
}






var clicou=false;
function geraMosquito(){

  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();
    clicou=false;

  }



  posicaoX = Math.floor(Math.random() * (largura-200));
  posicaoY = Math.floor(Math.random() * (altura-200));
  var mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  //mosquito.style.width = '50px';


  mosquito.className = classeRandomica();
  mosquito.style.transform = gira();
  mosquito.style.position = 'absolute';
  mosquito.style.top = posicaoY+"px";
  mosquito.style.left = posicaoX+"px";
  var corpo = document.getElementsByTagName('body')[0];
  corpo.appendChild(mosquito);
  mosquito.id = 'mosquito';

  mosquito.onclick = function(){
    clicou=true;
    this.remove();

  }
  testaVidas();





  function testaVidas(){
    var vidas = document.getElementsByClassName('vidas');

    if(indiceVidas==4){
      window.location.href='fim.html';
    } else{
      if(clicou==false){
        vidas[indiceVidas].src = 'imagens/coracao_vazio.png';
        if((vidas[indiceVidas]+1)!=undefined){
          indiceVidas++;
        }
      }

    }
} //fim testaVidas









console.log('clicou: '+ clicou + ' indiceVidas: '+ indiceVidas)
}
/*
var mosquito = document.createElement('img');
mosquito.src = 'imagens/mosca.png';
var corpo = document.getElementsByTagName('body')[0];
corpo.appendChild(mosquito);
*/
