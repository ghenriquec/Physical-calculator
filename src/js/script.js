const calculate = document.getElementById('calculate');

let inputs = document.querySelectorAll(".input");

/* Mask for input */
$(document).ready(function () {
  $('.weight').mask("#00", {
    reverse: true
  });
})

$(document).ready(function () {
  $('.height').mask("#0.00", {
    reverse: true
  });
})

const clearText = () => {
  document.getElementById('namePacient').value = "";
  document.getElementById('weightPacient').value = "";
  document.getElementById('heightPacient').value = "";
  document.getElementById('result').innerHTML = "";
}

const focusFunx = () => {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

const calculateIMC = () => {
  const namePacient = document.getElementById('namePacient');
  const weightPacient = document.getElementById('weightPacient');
  const heightPacient = document.getElementById('heightPacient');
  const result = document.getElementById('result');

  if (namePacient.value !== '' && weightPacient.value !== '' && heightPacient.value !== '') {
    const resultIMC = (parseFloat(weightPacient.value) / parseFloat(heightPacient.value ** 2)).toFixed(2)
    const weightMaximum = (18.5 * (heightPacient.value ** 2)).toFixed(1);
    const weightMinimum = (25 * (heightPacient.value ** 2)).toFixed(1);

    let messageReturn = '';

    if (resultIMC < 18.5) {
      messageReturn = 'abaixo do peso.';
    } else if (resultIMC < 25) {
      messageReturn = 'com o peso ideal';
    } else if (resultIMC < 30) {
      messageReturn = 'acima do peso.';
    } else if (resultIMC < 35) {
      messageReturn = 'com obesidade de grau I.';
    } else if (resultIMC < 40) {
      messageReturn = 'com obesidade de grau II.';
    } else {
      messageReturn = 'com obesidade de grau III.';
    }
    result.textContent = `${namePacient.value} seu imc é de ${resultIMC} e você está ${messageReturn}. Procure manter seu peso entre ${weightMinimum} Kg & ${weightMaximum} Kg`
  } else {
    alert('Para calcular o seu IMC , preencha todos os campos.');
  }
}

calculate.addEventListener("click", calculateIMC)

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunx);
});

