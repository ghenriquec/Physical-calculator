const calculate = document.getElementById('calculate');

$(document).ready(function () {
  $('.weightAthlete').mask("#00", {
    reverse: true
  });
})

$(document).ready(function () {
  $('#timeTravelled').mask('00:00:00');
})


const physical = () => {
  const name = document.getElementById('nameAthlete').value
  const weight = document.getElementById('weightAthlete').value
  const distance = document.getElementById('distanceTravelled').value
  const time = document.getElementById('timeTravelled').value

  const result = document.getElementById('result')
  const caloryValue = 0.0175;

  var arrayTime = time.split(":").map(function (item) {
    return parseInt(item, 10);
  });

  const hour = arrayTime[0]
  const minute = arrayTime[1] / 60
  const second = arrayTime[2] / 3600

  const totalHour = hour + minute + second;
  const hourToMinutes = totalHour * 60;

  const pace = (hourToMinutes / distance).toFixed(2)
  const velocityMedium = (distance / totalHour).toFixed(2);
  const calory = ((velocityMedium * weight * caloryValue) * hourToMinutes).toFixed(0)

  if (name !== '' && distance !== '' && weight !== '') {
    result.textContent = `Olá ${name}! Você percorreu ${distance} km em ${hour}h, ${arrayTime[1]} min e ${arrayTime[2]}s. Isso quer dizer que a sua velocidade média foi de ${velocityMedium} km/h, o que o corresponde a um pace de ${pace}min/km. Com ${weight}kg, você gastou cerca de ${calory} cal”`;
  } else {
    alert('Para ter os resultados, preencha todos os campos.');
  }
}

calculate.addEventListener('click', physical)

const clearText = () => {
  document.getElementById('nameAthlete').value = "";
  document.getElementById('weightAthlete').value = "";
  document.getElementById('distanceTravelled').value = "";
  document.getElementById('timeTravelled').value = "";
  document.getElementById('result').innerHTML = "";
}
