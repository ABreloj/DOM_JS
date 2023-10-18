const lienzo=document.querySelector('#lienzo');
const ctx=lienzo.getContext('2d');

function cuadrito(ctx,x,y){
    ctx.fillStyle='purple';
    ctx.fillRect(x,y,10,10);
}

let ejeX=0;
let ejeY=0;
setInterval(()=>{
    cuadrito(ctx,ejeX,ejeY);
    ejeX+=20;
},500);

/*
ctx.beginPath();
ctx.fillStyle='white';
ctx.arc(200,200,200,0, Math.PI*2);
ctx.fill();

ctx.fillStyle='black';
ctx.strokeRect(100,100,200,200); //Cabeota
ctx.strokeRect(150,150,20,20);  //Ojito izquierdo
ctx.strokeRect(240,150,20,20);  //Ojito derecho
ctx.strokeRect(200,180,20,50);  //Nariz chueca
ctx.strokeRect(150,250,110,20); //Boca

ctx.fillRect(90,90,220,40);     //Parte baja del sombre
ctx.fillRect(110,60,180,40);    //Parte alta del sombrero

ctx.fillRect(160,160,10,10);    //Pupila izquierda
ctx.fillRect(250,160,10,10);    //Pupila Derecha

ctx.strokeRect(180,250,10,10);  //Diente derecho
ctx.strokeRect(210,250,10,10);  //Diente izquierdo

//Corbata
ctx.fillStyle='purple';
ctx.beginPath();
ctx.moveTo(200,300);
ctx.lineTo(230,320);
ctx.lineTo(200,340);
ctx.lineTo(170,320);
ctx.lineTo(200,300);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,330);
ctx.lineTo(240,350);
ctx.lineTo(200,400);
ctx.lineTo(160,350);
ctx.lineTo(200,330);
ctx.fill();
ctx.stroke();


//Lentes
ctx.beginPath();
ctx.arc(160,160,25,0, Math.PI*2,true);
ctx.stroke();
ctx.beginPath();
ctx.arc(250,160,25,0, Math.PI*2,true);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100,160);
ctx.lineTo(134,160);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(275,160);
ctx.lineTo(300,160);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(184,160);
ctx.lineTo(224,160);
ctx.stroke();
*/

