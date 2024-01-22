// kg/m''

const calcularMasa = () => {
    const kgOb = document.getElementById("kg").value
    const mtOb = document.getElementById("mt").value
    const mCuadrado = mtOb * mtOb;
    let masaCorporal = 0;

    if ( kgOb < 0 || mtOb < 0) {
        alert("Por favor, ingresa valores válidos para el peso y la altura.");
    } else if (kgOb === 0 || mtOb === 0) {
        alert("Llena los campos");
    }else if(kgOb < 1 && mtOb >= 1){
        alert("Los datos introdujidos son raros o poco creibles")
    }else{
        masaCorporal = kgOb / mCuadrado;
    }
     console.log(masaCorporal)
    asignarColor(masaCorporal);
}

const asignarColor = (masa) => {
    removerColor();
    var idElemento = "";
    if (masa <= 18.4) {
        idElemento="amarillo"
    } else if (masa >= 18.5 && masa <= 24.9) {
        idElemento="verde"
    } else if (masa>= 25 && masa <= 29.9) {
        idElemento="naranja"
    } else if (masa >= 30) {
        idElemento="rojo"
    }
    document.getElementById(idElemento).classList.remove("sin-Color");
    document.getElementById(idElemento).classList.add(idElemento);
}

const removerColor = () => {
    const colores = ["amarillo", "verde", "naranja", "rojo"];
    let i = 0;
    do {
        const color = colores[i];
        const elemento = document.getElementById(color);
        if (elemento.classList.contains(color)) {
            elemento.classList.add("sin-Color");
        }
        i++;
    } while (i < colores.length);
};