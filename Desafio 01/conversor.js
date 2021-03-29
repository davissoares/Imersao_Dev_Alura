var valorEmDolar = prompt("Qual o valor em dolar que você deseja realizar a conversão?")

var valorEmDolarNum = parseFloat(valorEmDolar)

var valorEmReal = valorEmDolarNum * 5.76
var valorEmRealConvertido = valorEmReal.toFixed(2)

alert("A conversão é: " + valorEmRealConvertido)
