const inputJugados = document.querySelector(`#partidosJugados`);
const inputObtenidos = document.querySelector(`#puntosObtenidos`);
const inputRestantes = document.querySelector(`#partidosRestantes`);
const btn = document.querySelector(`#calcular`);
const pHipoteticos = document.querySelector(`#puntosTotalesHipoteticos`);
const rachaDePartidos = document.querySelector(`#racha`)
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

function calcularPuntos () {
    if (inputJugados.value > partidosTotales || inputObtenidos.value > puntosTotales || inputJugados.value == "" || inputObtenidos == "") {
        alert ("Revisa los inputs");
        return
    }
    let partidosRestantes = partidosTotales - Number(inputJugados.value);
    const partidosJugados = Number(inputJugados.value);
    const puntosObtenidos = Number(inputObtenidos.value);
    const puntosDerrotas = partidosRestantes
    const puntosRestantesPotenciales = (puntosDerrotas * 4) + puntosObtenidos;
    const puntosSumados = puntosObtenidos + puntosDerrotas;
    
    const victoriasDigitadas = Math.round((puntosObtenidos - 1 * partidosJugados) / 3);
    const derrotasDigitadas = partidosJugados - victoriasDigitadas;
    const formaActual = victoriasDigitadas - derrotasDigitadas
    let forma = formaActual;

    if (forma < -15) {forma = -15}
    else if (forma > 15) {forma = 15}
    
    if(formaActual > 0) {
        forma = "+" + forma
    };

    for (let i = 0; i < tresholds.length; i++) {
        if (tresholds[i].puntos > puntosSumados) {
            let victoriasNecesarias = nextTier(tresholds[i].puntos)
            const tierActual = tresholds[i - 1].name
            const puntajeTierActual = tresholds[i - 1].puntos
            const recompensa = tresholds[i - 1].recompensa
            if (victoriasNecesarias > puntosDerrotas) {
                recompensas.innerText = `Tu recompensa es: ${recompensa}`; 
                if (puntajeTierActual >= 45) {
                    pDerrotas.innerText = `Estas en ${tierActual}, otro dia en la oficina`;
                    resultImage.setAttribute('src', './img/siuu.png')
                } else {
                    pDerrotas.innerText = `Estas en ${tierActual}. Ya no llegas al siguiente tier... EA se te esta cagando de shisa`;
                    resultImage.setAttribute('src', './img/barbakahn.png');
                };     
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
    rachaDePartidos.innerText = `Tu racha actual es de ${victoriasDigitadas}V y ${derrotasDigitadas}D. Tu forma es ${forma}`
}