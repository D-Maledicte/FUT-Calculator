const inputJugados = document.querySelector(`#partidosJugados`);
const inputObtenidos = document.querySelector(`#puntosObtenidos`);
const inputRestantes = document.querySelector(`#partidosRestantes`);
const btn = document.querySelector(`#calcular`);
const pHipoteticos = document.querySelector(`#puntosTotalesHipoteticos`);
const pDerrotas = document.querySelector(`#puntosRestantesDerrotas`);
const recompensas = document.querySelector(`#recompensas`);
const resultImage = document.querySelector('#result-image')
const tresholds = [
    {name: 'Rango 10',puntos: 4,recompensa: '500 puntos FC / 1 Sobre De Mezcla De Jugadores unicos y 1 Eleccion de jugador FUT Champions (intransferible)',},
    {name: 'Rango 9',puntos: 12,recompensa: '500 puntos FC / 5.000 monedas FUT / 2 sobres Oro Jumbo Premium / 1 Sobre De Jugadores Top De Oro y 1 Eleccion de jugador FUT Champions (intransferible)',},
    {name: 'Rango 8',puntos: 24,recompensa: '750 puntos FC / 10.000 monedas FUT / 2 sobres Oro Jumbo Premium / 1 Megasobre / 1 Sobre De Jugadores Top De Oro y 2 Eleccion de jugador FUT Champions (intransferible)',},
    {name: 'Rango 7',puntos: 36,recompensa: '750 puntos FC / 15.000 monedas FUT / 1 Sobre De Jugadores unicos / 1 Sobre Jumbo De Jugadores unicos / 2 elecciones de jugadores FUT Champions (intransferibles)',},
    {name: 'Rango 6',puntos: 45,recompensa: '1.000 puntos FC / 25.000 monedas FUT / 1 Sobre TOTW Premium / 1 Sobre De Jugadores unicos / 1 Sobre Ultimate / 2 elecciones de jugadores FUT Champions (intransferibles)',},
    {name: 'Rango 5',puntos: 51,recompensa: '1.250 puntos FC / 30.000 monedas FUT / 1 Sobre TOTW Premium / 1 Sobre De Jugadores unicos / 1 Sobre Ultimate / 3 elecciones de jugadores FUT Champions (intransferibles)',},
    {name: 'Rango 4',puntos: 60,recompensa: '1.250 puntos FC / 50.000 monedas FUT / 1 Sobre TOTW Premium / 1 Sobre Jumbo De Jugadores unicos / 1 Sobre Ultimate / 3 elecciones de jugadores FUT Champions (intransferibles)',},
    {name: 'Rango 3',puntos: 67,recompensa: '1.250 puntos FC / 75.000 monedas FUT / 2 Sobres TOTW Premium / 1 Sobre Ultimate / 3 elecciones de jugadores FUT Champions (intransferibles)',},
    {name: 'Rango 2',puntos: 72,recompensa: '1.250 puntos FC / 100.000 monedas FUT / 2 Sobres TOTW Premium / 2 Sobres Ultimate / 3 elecciones de jugadores FUT Champions (intransferibles)',},
    {name: 'Rango 1',puntos: 76,recompensa: '1.250 puntos FC / 100.000 monedas FUT / 3 Sobres TOTW Premium / 1 Sobre De Jugadores unicos / 2 Sobres Ultimate / 3 elecciones de jugadores FUT Champions (intransferibles)',}
]
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

// function calcularPuntos () {
//     if (inputJugados.value > partidosTotales || inputObtenidos.value > puntosTotales) {
//         alert ("Revisa los inputs");
//         return
//     }
//     let partidosRestantes = partidosTotales - Number(inputJugados.value);
//     const puntosObtenidos = Number(inputObtenidos.value);
//     const puntosDerrotas = partidosRestantes
//     const puntosRestantesPotenciales = (puntosDerrotas * 4) + puntosObtenidos;
//     const puntosSumados = puntosObtenidos + puntosDerrotas;
//     const tresholds = [24,36,45,51,60,67,72,76]
//     if (puntosSumados >= tresholds[0] && puntosSumados < tresholds[1]) {
//             const victoriasNecesarias = nextTier(tresholds[1]);
//             if (victoriasNecesarias > puntosDerrotas) {
//                 pDerrotas.innerText = `Estas en ${tresholds[0]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//                 resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 24, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/badresult.png')};
//     } 
//     else if (puntosSumados >= tresholds[1] && puntosSumados < tresholds[2]) {
//             const victoriasNecesarias = nextTier(tresholds[2]);
//             if (victoriasNecesarias > puntosDerrotas) {
//             pDerrotas.innerText = `Estas en ${tresholds[1]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//             resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {
//             pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 36, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/badresult.png')};
//     }
//     else if (puntosSumados >= tresholds[2] && puntosSumados < tresholds[3]) {
//             const victoriasNecesarias = nextTier(tresholds[3]);
//             if (victoriasNecesarias > puntosDerrotas) {
//                 pDerrotas.innerText = `Estas en ${tresholds[2]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//                 resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 45, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/badresult.png')};
//     }
//     else if (puntosSumados >= tresholds[3] && puntosSumados < tresholds[4]) {
//             const victoriasNecesarias = nextTier(tresholds[4]);
//             if (victoriasNecesarias > puntosDerrotas) {
//                 pDerrotas.innerText = `Estas en ${tresholds[3]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//                 resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 51, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/result.png')};
//     }
//     else if (puntosSumados >= tresholds[4] && puntosSumados < tresholds[5]) {
//             const victoriasNecesarias = nextTier(tresholds[6]);
//             if (victoriasNecesarias > puntosDerrotas) {
//                 pDerrotas.innerText = `Estas en ${tresholds[4]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//                 resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 60, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/result.png')};
//     }
//     else if (puntosSumados >= tresholds[5] && puntosSumados < tresholds[6]) {
//             const victoriasNecesarias = nextTier(tresholds[7]);
//             if (victoriasNecesarias > puntosDerrotas) {
//                 pDerrotas.innerText = `Estas en ${tresholds[5]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//                 resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 67, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/result.png')};
//     }
//     else if (puntosSumados >= tresholds[6] && puntosSumados < tresholds[7]) {
//         if (victoriasNecesarias > puntosDerrotas) {
//             pDerrotas.innerText = `Estas en ${tresholds[6]}. Ya no llegas al siguiente tier, EA se te esta cagando de shisa`;
//             resultImage.setAttribute('src', './img/barbakahn.png');     
//         } else {pDerrotas.innerText = `Perdiendo lo que queda llegas al tier de 72, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//             resultImage.setAttribute('src', './img/result.png')};
//     }
//     else if (puntosSumados >= tresholds[7]) {
//             pDerrotas.innerText = `Superas el tier de 76`
//             resultImage.setAttribute('src', './img/result.png');
//     } else {
//             const victoriasNecesarias = nextTier(tresholds[0]);
//             if (victoriasNecesarias > puntosDerrotas) {
//                 pDerrotas.innerText = `Estas en el culo de la liga, ya no llegas ni a tramontina oxidado 4`;
//                 resultImage.setAttribute('src', './img/barbakahn.png');     
//             } else {
//                 pDerrotas.innerText = `Estas en el culo de la liga, necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
//                 resultImage.setAttribute('src', './img/badresult.png');
//             }
//     }
//     pHipoteticos.innerText = `Ganando todo llegarias a ${puntosRestantesPotenciales}`
// }

// Supongamos que tienes un array de objetos llamado "objetos" y una variable llamada "puntosSumados"
// let objetos = [
//     { id: 1, puntos: 10 },
//     { id: 2, puntos: 20 },
//     { id: 3, puntos: 15 }
//   ];
//   let puntosSumados = 12;
  
//   // Recorre el array de objetos y compara el valor de "puntos" de cada objeto con "puntosSumados"
//   for (let i = 0; i < objetos.length; i++) {
//     if (objetos[i].puntos > puntosSumados) {
//       // Si el valor de "puntos" del objeto es mayor que "puntosSumados", ese es el objeto que estás buscando
//       console.log("El objeto con el ID " + objetos[i].id + " tiene más puntos que " + puntosSumados);
//       break; // Puedes detener el bucle una vez que encuentres el objeto que buscas
//     }
//   }

function calcularPuntos () {
    if (inputJugados.value > partidosTotales || inputObtenidos.value > puntosTotales) {
        alert ("Revisa los inputs");
        return
    }
    let partidosRestantes = partidosTotales - Number(inputJugados.value);
    const puntosObtenidos = Number(inputObtenidos.value);
    const puntosDerrotas = partidosRestantes
    const puntosRestantesPotenciales = (puntosDerrotas * 4) + puntosObtenidos;
    const puntosSumados = puntosObtenidos + puntosDerrotas;
    
    for (let i = 0; i < tresholds.length; i++) {
        if (tresholds[i].puntos > puntosSumados) {
            let victoriasNecesarias = nextTier(tresholds[i].puntos)
            const tierActual = tresholds[i - 1].name
            const recompensa = tresholds[i - 1].recompensa
            // if (victoriasNecesarias === 1) {
            //     victoriasNecesarias = 0;
            // }
            if (victoriasNecesarias > puntosDerrotas) {
                pDerrotas.innerText = `Estas en ${tierActual}. Ya no llegas al siguiente tier... EA se te esta cagando de shisa`;
                recompensas.innerText = `Tu recompensa es: ${recompensa}`; 
                resultImage.setAttribute('src', './img/barbakahn.png');     
            }
            else {
                pDerrotas.innerText = `Perdiendo lo que queda estas en ${tierActual}... necesitas ${victoriasNecesarias} victorias para alcanzar el siguiente tier`;
                recompensas.innerText = `Tu recompensa es: ${recompensa}`; 
            if (tresholds[i - 1].puntos >= 45) {
                resultImage.setAttribute('src', './img/result.png')}
            else {
                resultImage.setAttribute('src', './img/badresult.png')
            }
            }
            break;
        }
        else if (puntosSumados >= tresholds[i].puntos) {
            const tierActual = tresholds[i].name
            const recompensa = tresholds[i].recompensa
            pDerrotas.innerText = `Estas en ${tierActual}... PRO PRO`;
            recompensas.innerText = `Tu recompensa es: ${recompensa}`;
            resultImage.setAttribute('src', './img/barbakahn.png');
        } 
      }
    pHipoteticos.innerText = `Ganando todo llegarias a ${puntosRestantesPotenciales}`
}