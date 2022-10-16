let teclas = {
    UP:     38,
    DOWN:   40,
    RIGHT:  39,
    LEFT:   37
};

//document.addEventListener("keydown", dibujar);
document.addEventListener("mousedown", empezarDibujo);
document.addEventListener("mouseup", empezarDibujo);
document.addEventListener("mousemove", dibujar);



let canva = document.getElementById("canva");
let papel = canva.getContext("2d");
let x;
let y;
let colorsito = "rgba(9,9,121,1)";



//dibujarLinea("blue", 199, 199, 201, 201, papel);

function track(){console.log("")};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){

    lienzo.beginPath();
    lienzo.strokeStyle = color;

    lienzo.shadowColor = 'rgba(6, 151, 214, 1)';
    lienzo.shadowBlur = 1;
    lienzo.shadowOffsetX = 50;
    lienzo.shadowOffsetY = 50;

    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function empezarDibujo(evento){

    if(evento.type == "mousedown"){
        dibujar = true;
        console.log(dibujar)
    }
    if(evento.type == "mouseup"){
        dibujar == false;
        console.log(dibujar)
    }  

}

function dibujar(evento){
            
    x = evento.layerX;
    y = evento.layerY;
    console.log(x,y);
    //dibujarLinea(colorsito, x,y, x-55,y-52, papel);       
    //dibujarLinea(colorsito, x,y, x+15,y+12, papel);    
    
    if(dibujar == true){
        dibujarLinea(colorsito, x,y, x+2,y+30, papel);
    };
    
}



  





function Stopdibujar(evento){

        x = evento.layerX;
        y = evento.layerY;
};

/*switch(evento.keyCode){

    case teclas.DOWN:
        dibujarLinea(colorsito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    break;

    case teclas.UP:
        dibujarLinea(colorsito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
    break;

    case teclas.LEFT:
        dibujarLinea(colorsito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    break;

    case teclas.RIGHT:
        dibujarLinea(colorsito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    break;

}
*/