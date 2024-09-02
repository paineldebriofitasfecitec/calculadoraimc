function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (!peso || !altura || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    let resultado = "";

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultado = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        resultado = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        resultado = "Obesidade Grau II";
    } else {
        resultado = "Obesidade Grau III";
    }

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)}: ${resultado}`;
}
