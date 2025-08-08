let resultado = saldoDePartidas (80,20)
var rank = ("")

if(resultado<=10){
rank = "Ferro"
}
else if (resultado>=11 && resultado<=20){
rank = "Bronze"
}
else if (resultado>=21 && resultado<=50){
rank = "Prata"
}
else if (resultado>=51 && resultado<=80) {
rank = "Ouro"
}
else if (resultado>=81 && resultado<=90){
rank = "Diamante"
}
else if (resultado>=91 && resultado<=100) {
rank = "Lendario"
}
else if (resultado>=101){
rank = "Imortal"
}
function saldoDePartidas (vitoria, derrota){
let resultadoDasPartidas = vitoria - derrota
return resultadoDasPartidas
}
console. log("O Héroi tem saldo de " + resultado + " está no nível " + rank)