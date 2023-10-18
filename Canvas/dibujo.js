const lienzo=document.querySelector('#lienzo');
const ctx=lienzo.getContext('2d');

ctx.fillStyle='red';
ctx.beginPath();
ctx.fillRect(95,90,230,230);
ctx.stroke();

ctx.fillStyle='black';
ctx.beginPath();
ctx.fillRect(150,150,35,35);    
ctx.fillRect(240,150,35,35);
ctx.fillRect(158,260,110,30);  
ctx.stroke();

ctx.fillStyle='red';
ctx.beginPath();
ctx.fillRect(175,260,20,20);
ctx.stroke();

ctx.fillStyle='green';
ctx.beginPath();
ctx.fillRect(184,30,30,60);
ctx.fillRect(184,30,70,23);
ctx.stroke();

ctx.fillStyle='yellow';
ctx.beginPath();
ctx.fillRect(165,164,11,11);
ctx.fillRect(255,164,11,11);
ctx.stroke();

ctx.fillStyle='black';
ctx.beginPath();
//para izqueirda a
ctx.fillRect(20,372,11,11);  
ctx.fillRect(23,369,11,11);  
ctx.fillRect(26,366,11,11);    
ctx.fillRect(29,363,11,11);  
ctx.fillRect(32,360,11,11);  
ctx.fillRect(35,357,11,11);  
ctx.fillRect(38,354,11,11);    
ctx.fillRect(42,351,11,11); 
ctx.fillRect(45,348,11,11); 
ctx.fillRect(48,345,11,11);   
//Pata derecha a
ctx.fillRect(77,372,11,11);  
ctx.fillRect(74,369,11,11);  
ctx.fillRect(73,366,11,11);    
ctx.fillRect(70,363,11,11);  
ctx.fillRect(67,360,11,11);  
ctx.fillRect(64,357,11,11);  
ctx.fillRect(61,354,11,11);    
ctx.fillRect(58,351,11,11); 
ctx.fillRect(55,348,11,11); 
ctx.fillRect(52,345,11,11); 
//Medio de a
ctx.fillRect(38,366,11,11);  
ctx.fillRect(41,366,11,11);  
ctx.fillRect(44,366,11,11);  
ctx.fillRect(47,366,11,11);  
ctx.fillRect(50,366,11,11); 
ctx.fillRect(53,366,11,11);  
ctx.fillRect(56,366,11,11);  
ctx.fillRect(59,366,11,11);  
ctx.fillRect(61,366,11,11);  
ctx.fillRect(64,366,11,11);  

//palo a
ctx.fillRect(97,345,11,38);
//base a
ctx.fillRect(102,374,11,11);
ctx.fillRect(104,374,11,11);
ctx.fillRect(108,374,11,11);
ctx.fillRect(112,374,11,11);
//panza a
ctx.fillRect(114,370,11,11);
ctx.fillRect(118,366,11,11);
ctx.fillRect(114,362,11,11);
ctx.fillRect(110,358,11,11);
ctx.fillRect(106,358,11,11);


//palo r
ctx.fillRect(135,345,11,38);

//cresta r
ctx.fillRect(138,360,11,11);
ctx.fillRect(141,357,11,11);
ctx.fillRect(144,354,11,11);
ctx.fillRect(147,351,11,11);
ctx.fillRect(151,348,11,11);



//panza a
ctx.fillRect(186,374,11,11);
ctx.fillRect(182,374,11,11);
ctx.fillRect(178,374,11,11);
ctx.fillRect(174,374,11,11);
ctx.fillRect(170,370,11,11);
ctx.fillRect(174,366,11,11);
ctx.fillRect(178,362,11,11);
ctx.fillRect(182,358,11,11);
ctx.fillRect(186,358,11,11);

//palo a
ctx.fillRect(194,358,11,30);

//palo h
ctx.fillRect(215,350,11,40);

//techo h
ctx.fillRect(215,364,25,11);

//patita derecha h
ctx.fillRect(232,364,11,25);


//panza a
ctx.fillRect(266,374,11,11);
ctx.fillRect(262,374,11,11);
ctx.fillRect(258,374,11,11);
ctx.fillRect(254,374,11,11);
ctx.fillRect(250,370,11,11);
ctx.fillRect(254,366,11,11);
ctx.fillRect(258,362,11,11);
ctx.fillRect(262,358,11,11);
ctx.fillRect(266,358,11,11);
//palo a
ctx.fillRect(272,358,11,30);


//palo m
ctx.fillRect(290,350,11,40);

//priera curva de m
ctx.fillRect(298,360,11,11);
ctx.fillRect(301,356,11,11);
ctx.fillRect(304,352,11,11);
ctx.fillRect(307,348,11,11);
//segunda parte de la primera curva de la m
ctx.fillRect(317,360,11,11);
ctx.fillRect(314,356,11,11);
ctx.fillRect(307,352,11,11);
ctx.fillRect(304,348,11,11);
ctx.fillRect(317,360,11,26);

//segunda curva de m
ctx.fillRect(317,360,11,11);
ctx.fillRect(321,356,11,11);
ctx.fillRect(324,352,11,11);
ctx.fillRect(327,348,11,11);
//segunda parte de la primera curva de la m
ctx.fillRect(337,360,11,11);
ctx.fillRect(334,356,11,11);
ctx.fillRect(331,352,11,11);
ctx.fillRect(327,348,11,11);
ctx.fillRect(337,348,11,40);


ctx.stroke();
