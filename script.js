let teclas = {
    UP:     38,
    DOWN:   40,
    RIGHT:  39,
    LEFT:   37
};

let canva = document.getElementById("canva");
let papel = canva.getContext("2d");
let x;
let y;
let xinicial = 0;
let colorsito = "black";
let boton = document.getElementById("boton");

function track(){console.log("")};

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){

    lienzo.beginPath();
    lienzo.strokeStyle = color;

    lienzo.shadowColor = '#05b5b3';
    lienzo.shadowBlur    = 2;
    lienzo.shadowOffsetX = -2;
    lienzo.shadowOffsetY = -2;
    lienzo.lineWidth     = 20;//20
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function empezarDibujo(evento){

    if(evento.type == "mousedown"){
        dibujar = true;
        console.log(evento)
    }
    if(evento.type == "mouseup"){
       // dibujar == false;
        console.log("ff")
    }else{console.log("jk")}

}

function dibujar(evento){


    x = evento.layerX;
    y = evento.layerY;
    
    if(dibujar == true){
        dibujarLinea(colorsito, x,y, x+1,y+y, papel);
        console.log(x,y);
    };

};

function moving(){
    console.log("hii");
}

 

function Stopdibujar(evento){
        x = evento.layerX;
        y = evento.layerY;
};

function botonAction(){
    document.body.style.backgroundColor = "black";
}


//document.addEventListener("keydown", dibujar);
document.addEventListener("mousedown", empezarDibujo);
document.addEventListener("mouseup", empezarDibujo);
document.addEventListener("mousemove", dibujar);
boton.addEventListener("click", botonAction);

//BOTON

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