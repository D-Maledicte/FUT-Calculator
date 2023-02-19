const inputJugados = document.querySelector(`#partidosJugados`);
const inputObtenidos = document.querySelector(`#puntosObtenidos`);
const inputRestantes = document.querySelector(`#partidosRestantes`);
const btn = document.querySelector(`#calcular`);
const pHipoteticos = document.querySelector(`#puntosTotalesHipoteticos`);
const pDerrotas = document.querySelector(`#puntosRestantesDerrotas`);
const resultImage = document.querySelector('#result-image')

let partidosTotales = 20
let puntosTotales = 100
function nextTier(tierSiguiente) {
    let partidosRestantes = partidosTotales - Number(inputJugados.value);
    const puntosObtenidos = Number(inputObtenidos.value);
    v = 4
    while (puntosObtenidos + v + (partidosRestantes - 1) < tierSiguiente) {
    v += 4
    partidosRestantes--
    }
    return v / 4;
}

btn.addEventListener(`click`, calcularPuntos);

function calcularPuntos () {
    if (inputJugados.value > partidosTotales || inputObtenidos.value > puntosTotales) {
        alert ("Revisa los inputs");
        return
    }
    let partidosRestantes = partidosTotales - Number(inputJugados.value);
    const puntosObtenidos = Number(inputObtenidos.value);
    const puntosDerrotas = partidosTotales - Number(inputJugados.value);
    const puntosRestantesPotenciales = (puntosDerrotas * 4) + puntosObtenidos;
    const puntosSumados = puntosObtenidos + puntosDerrotas;
    const tresholds = [24,36,45,51,60,67,72,76]
    if (puntosSumados >= tresholds[0] && puntosSumados < tresholds[1]) {
            const victoriasNecesarias = nextTier(tresholds[1]);
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en ${tresholds[0]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
                resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 24, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/badresult.png')};
    } 
    else if (puntosSumados >= tresholds[1] && puntosSumados < tresholds[2]) {
            const victoriasNecesarias = nextTier(tresholds[2]);
            if (victoriasNecesarias > puntosDerrotas) {
            pDerrotas.innerText = `Estas en ${tresholds[1]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
            resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {
            pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 36, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/badresult.png')};
    }
    else if (puntosSumados >= tresholds[2] && puntosSumados < tresholds[3]) {
            const victoriasNecesarias = nextTier(tresholds[3]);
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en ${tresholds[2]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
                resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 45, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/badresult.png')};
    }
    else if (puntosSumados >= tresholds[3] && puntosSumados < tresholds[4]) {
            const victoriasNecesarias = nextTier(tresholds[4]);
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en ${tresholds[3]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
                resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 51, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/result.png')};
    }
    else if (puntosSumados >= tresholds[4] && puntosSumados < tresholds[5]) {
            const victoriasNecesarias = nextTier(tresholds[6]);
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en ${tresholds[4]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
                resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 60, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/result.png')};
    }
    else if (puntosSumados >= tresholds[5] && puntosSumados < tresholds[6]) {
            const victoriasNecesarias = nextTier(tresholds[7]);
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en ${tresholds[5]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
                resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 67, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/result.png')};
    }
    else if (puntosSumados >= tresholds[6] && puntosSumados < tresholds[7]) {
        if (victoriasNecesarias > puntosDerrotas) {
            pDerrotas.innerText = `Estas en ${tresholds[6]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
            resultImage.setAttribute('src', './img/barbakahn.png');     
        } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 72, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
            resultImage.setAttribute('src', './img/result.png')};
    }
    else if (puntosSumados >= tresholds[7]) {
            pDerrotas.innerText = `Superas el tier de 76`
            resultImage.setAttribute('src', './img/result.png');
    } else {
            const victoriasNecesarias = nextTier(tresholds[0]);
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en el culo de la liga, ya no llegas ni a tramontina oxidado 4`;
                resultImage.setAttribute('src', './img/barbakahn.png');     
            } else {
                pDerrotas.innerText = `Estas en el culo de la liga, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
                resultImage.setAttribute('src', './img/badresult.png');
            }
    }
    pHipoteticos.innerText = `Ganando todo llegarias a ${puntosRestantesPotenciales}`
}


