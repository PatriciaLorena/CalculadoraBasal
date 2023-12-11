/*
let form = document.getElementById('calculadora');
console.log(form.innerHTML);
form.innerHTML = "<h1> Titulo desde el JS </h1>";
form.style.background = "blue";
*/
const CALCULAR = document.getElementById('calcular');
//console.log(CALCULAR);

const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIA = document.getElementById('dia');
let form = document.getElementById('metodo');
let concepto = document.getElementById("concepto");
let hidra = document.getElementById('hidratacion');
let como  = document.getElementById("como")
let comoCaldular = document.getElementById("comoCalcular")

CALCULAR.addEventListener('click', calcular)


function calcular(){ 
    let peso = document.getElementById('peso').value;
    peso = parseInt(peso);
    if(peso<=0 || isNaN(peso)){
        ERROR.innerHTML = "*DEBE COMPLETAR LOS DATOS"
        ERROR.style.display = "block"
        DIA.style.display = "none"
        MAN.style.display = "none"
        FLU.style.display = "none"

    }else if(peso<=30){
        DIA.innerHTML = " FLU = " + segar(peso) + " cc/24"
        DIA.style.display = "block"
        FLU.innerHTML = " MAN = " + ((segar(peso))/24).toFixed(0) + " cc/24"
        FLU.style.display = "block"
        MAN.innerHTML = "MAN + MAN/2 = " + (segar(peso)/24 *1.5)
        MAN.style.display = "block"
        ERROR.style.display = "none"
        concepto.style.display = "none"
        hidra.style.display = "none"
        form.innerHTML = "Método Utilizado: Holliday-Segar";
        comoCaldular.innerHTML = "¿Como se calcula?";
        como.innerHTML = "<li>De 0kg a 10kg, se calcula 100cc por cada kilo.</li><li>Se suman 50cc por cada kilo de peso por arriba de 10kg, hasta 20kg</li><li>De 20kg para arriba, se suman 20cc por cada kilo adicional</li>"
    }else{
        DIA.innerHTML = " SC * 1500 =  " + (superficieCorporal(peso))*1500
        DIA.style.display = "block"
        FLU.innerHTML = " SC * 2000 = " + (superficieCorporal(peso))*2000
        FLU.style.display = "block"
        MAN.style.display = "none"
        ERROR.style.display = "none"
        concepto.style.display = "none"
        hidra.style.display = "none"
        form.innerHTML = "Método Utilizado: Superficie corporal";
        comoCaldular.innerHTML = "¿Como se calcula?";
        como.innerHTML = "<li>Utilizar la formula: Superficie corporal = ( (peso * 4) + 7) / (peso + 90)</li>"
        }
}

function segar(peso){
    let resultado;
    if(peso <=10){
           resultado = (peso * 100);
    }else if( peso>10 && peso<=20){
            resultado = (10 * 100 + (peso - 10 ) * 50);
    }else{
            resultado = (10 * 100 + 10 * 50 + (peso -20 ) * 20) 
    }
    return resultado;
}

function superficieCorporal(peso){
    if(peso>30){
    return ((peso * 4) + 7) / (peso + 90);
    }
    
}




