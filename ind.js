// Calculadora IMC
const name = "Lucas"
const peso = 50
const altura = 1.80
const imc = peso/(altura*2)

if(imc<20){
    console.log(`Seu imc é ${imc}. Você está abaixo do seu peso ideal`)
}

if(imc >=20 && imc<=25){
    console.log(`Seu IMC é:${imc}. Você está no seu peso ideal.`)
}

if (imc>25 && imc<=30){
    console.log(`Seu IMC é: ${imc}. Você está acima do peso.`)

}
if(imc>30){
    console.log(`Seu IMC é: ${imc}. Você está obeso.`)
}
