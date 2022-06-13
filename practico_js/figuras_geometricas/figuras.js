//CODIGO DEL CUADRADO
let ladoCuadrado = document.getElementById ("ladoCuadrado")
let botonAreaCuadrado = document.getElementById ("aceptarAreaCuadrado")
botonAreaCuadrado.addEventListener ("click", areaCuadrado)
let botonPerimetroCuadrado = document.getElementById ("aceptarPerimetrocuadrado")
botonPerimetroCuadrado.addEventListener ("click", perimetroCuadrado)

function areaCuadrado () 
{
    if (ladoCuadrado.value > 0)
    {
    areaCuadrado =  (ladoCuadrado.value*ladoCuadrado.value)
    alert ("El area del cuadrado es de " + areaCuadrado.toFixed (2) + " Centimetros Cuadrados")
    }
    else {alert ("Por favor, ingresar el valor del lado del cuadrado")}

}
function perimetroCuadrado () 
{
    if (ladoCuadrado.value > 0)
    {
    perimetroCuadrado = (ladoCuadrado.value*4)
    alert ("El perimetro del cuadrado es de " + perimetroCuadrado.toFixed (2) + " Centimetros")
    }
    else {alert ("Por favor, ingresar el valor del lado del cuadrado")}
}

//CODIGO DEL TRIANGULO

var lado1AreaTriangulo = document.getElementById ("lado1AreaTriangulo")
var lado2AreaTriangulo = document.getElementById ("lado2AreaTriangulo")
var baseAreaTriangulo = document.getElementById ("baseAreaTriangulo")
var alturaAreaTriangulo = document.getElementById ("alturaAreaTriangulo")
var botonAreaTriangulo = document.getElementById("aceptarAreaTriangulo")
botonAreaTriangulo.addEventListener ("click",areaTriangulo)

var lado1PerimetroTriangulo = document.getElementById ("lado1PerimetroTriangulo")
var lado2PerimetroTriangulo = document.getElementById ("lado2PerimetroTriangulo")
var basePerimetroTriangulo = document.getElementById ("basePerimetroTriangulo")
var botonPerimetroTriangulo = document.getElementById("aceptarPerimetroTriangulo")
botonPerimetroTriangulo.addEventListener ("click",perimetroTriangulo)

    function areaTriangulo () 
    {
    if (lado1AreaTriangulo.value > 0 && lado2AreaTriangulo.value > 0 && baseAreaTriangulo.value)
    {
        if(alturaAreaTriangulo.value > 0)
        {      
            if(lado1AreaTriangulo.value === lado2AreaTriangulo.value && lado2AreaTriangulo.value === baseAreaTriangulo.value)
            {
                const areaEqui = ((baseAreaTriangulo.value * alturaAreaTriangulo.value)/2)
                alert ("El area del triangulo Equilatero es de " + areaEqui.toFixed (2) + " Centimetros cuadrados")
            }
            if(lado1AreaTriangulo.value===lado2AreaTriangulo.value)
            {
                const areaIsos = ((baseAreaTriangulo.value * alturaAreaTriangulo.value)/2)
                alert ("El area del triangulo Isosceles es de " + areaIsos.toFixed (2) + " Centimetros cuadrados")
            }
            if(lado1AreaTriangulo.value != lado2AreaTriangulo.value && lado2AreaTriangulo.value != baseAreaTriangulo.value) 
            {
                const areaEsca = ((baseAreaTriangulo.value * alturaAreaTriangulo.value)/2)
                alert ("El area del triangulo Escaleno es de " + areaEsca.toFixed (2) + " Centimetros cuadrados")
            }
            else
            { alert ("Por favor verificar valores")};
        }
        else 
        {
            if (lado1AreaTriangulo.value === lado2AreaTriangulo.value && lado2AreaTriangulo.value === baseAreaTriangulo.value)
            {
                
                const alturaEqui = Math.sqrt ((lado1AreaTriangulo.value**2-(lado2AreaTriangulo.value/2)**2))
                const areaEqui = ((baseAreaTriangulo.value * alturaEqui)/2)
                alert ("El area del triangulo Equilatero es de " + areaEqui.toFixed (2) + " Centimetros cuadrados. Con una altura de "+alturaEqui.toFixed (2) + " centimetros")
            }
            if(lado1AreaTriangulo.value===lado2AreaTriangulo.value)
            {
                const alturaIsos = Math.sqrt (((lado1AreaTriangulo.value**2)-((baseAreaTriangulo.value**2)/4)))
                const areaIsos = ((baseAreaTriangulo.value * alturaIsos)/2)
                alert ("El area del triangulo Isosceles es de " + areaIsos.toFixed (2) + " Centimetros cuadrados. Con una altura de "+alturaIsos.toFixed (2)+ " centimetros")
            }
            if(lado1AreaTriangulo.value != lado2AreaTriangulo.value && lado2AreaTriangulo.value != baseAreaTriangulo.value) 
            {
                const subPerimetro = ((Number(lado1AreaTriangulo.value) + Number(lado2AreaTriangulo.value) + Number(baseAreaTriangulo.value))/2)
                const alturaEsca = Number((2/baseAreaTriangulo.value)*Math.sqrt(subPerimetro*(subPerimetro-baseAreaTriangulo.value)*(subPerimetro-lado1AreaTriangulo.value)*(subPerimetro-lado2AreaTriangulo.value)))
                const areaEsca = Number((baseAreaTriangulo.value * alturaEsca)/2)
                console.log (areaEsca)
                alert ("El area del triangulo Escaleno es de " + areaEsca.toFixed (2) + " Centimetros cuadrados. Con una altura de "+alturaEsca.toFixed (2)+ " centimetros")
            }
            else
                { alert ("Por favor verificar valores")};
        }
    }
    else {alert ("Por favor, ingresar los valores de los dos lados y de la base del triangulo. La altura es opcional")}
    }

    function perimetroTriangulo ()  
    {
    if (lado1PerimetroTriangulo.value > 0 && lado2PerimetroTriangulo.value > 0 && basePerimetroTriangulo.value)
    {
      perimetroTriangulo =  Number((lado1PerimetroTriangulo.value) + (lado2PerimetroTriangulo.value) + (basePerimetroTriangulo.value))
      alert ("El perimetro del triangulo es de " + perimetroTriangulo.toFixed(2) + " Centimetros")
    }
    else {alert ("Por favor, ingresar los valores de los dos lados y de la base del triangulo")}
    }
//CODIGO DEL CIRCULO

const pi = Math.PI
let radio = document.getElementById ("radioCirculo")
let botonAreaCirculo = document.getElementById("aceptarAreaCirculo")
botonAreaCirculo.addEventListener ("click",areaCirculo)
let botonPerimetroCirculo = document.getElementById("aceptarPerimetroCirculo")
botonPerimetroCirculo.addEventListener ("click",perimetroCirculo)
let botonDiametroCirculo = document.getElementById("aceptarDiametroCirculo")
botonDiametroCirculo.addEventListener ("click",diametroCirculo)


function areaCirculo () 
{
    if (radio.value > 0)
    {
    areaCirculo = (pi*(radio.value**2))
    alert ("El area del circulo es de " + areaCirculo.toFixed (2) + " Centimetros cuadrados")
    }
    else { alert ("Por favor, ingresar el valor del radio")}
}
    
function perimetroCirculo ()  
{
    if (radio.value > 0)
    {
    perimetroCirculo = (2*(radio.value*pi))
    alert ("El perimetro del circulo es de " + perimetroCirculo.toFixed (2) + " Centimetros")
    }
    else { alert ("Por favor, ingresar el valor del radio")}
}

function diametroCirculo ()  
{
    if (radio.value > 0)
    {
    diametroCirculo = (2*radio.value)
    alert ("El diametro del circulo es de " + diametroCirculo.toFixed (2) + " Centimetros")
    }
    else { alert ("Por favor, ingresar el valor del radio del circulo")}
}