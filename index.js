const calculate = document.getElementById('calculate');

function corrida () {
    const nome = document.getElementById('nome').value;
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');
    const valorCaloria = 0.0175;

    var b = tempo.split(",").map(function(item) {
        return parseInt(item, 10);
    });

    var horas = b[0]
    var minutos = b[1]/60
    var segundos = b[2]/3600
    var horaTotal =  horas + minutos + segundos
    var hourToMinutes = horaTotal * 60;
    var pace = (hourToMinutes/distancia).toFixed(2)
    var velocidadeMedia = (distancia/horaTotal).toFixed(2);
    var caloria = ((velocidadeMedia * peso * valorCaloria) * hourToMinutes).toFixed(0);
    
    

    if (nome !== '' && distancia !== '' && peso !== '') {

        resultado.textContent = `Olá ${nome}! Você percorreu ${distancia} km em ${horas}h, ${b[1]} min e ${b[2]}s. Isso quer dizer que a sua velocidade média foi de ${velocidadeMedia} km/h, o que o corresponde a um pace de ${pace}min/km. Com ${peso}kg, você gastou cerca de ${caloria} cal ” `;

    }else {
        resultado.textContent = 'Para ter os resultados da corrida, preencha todos os campos.';
    }
}
calculate.addEventListener('click', corrida)