function somar () {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res1 = window.document.getElementById('res1')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res1.innerHTML = `A soma de ${n1} e ${n2} é de ${s}.`
}
function multiplicar () {
    var tn3 = window.document.getElementById('txtn3')
    var tn4 = window.document.getElementById('txtn4')
    var res2 = window.document.getElementById('res2')
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var m = n3 * n4
    res2.innerHTML = `A Multiplicação de ${n3} e ${n4} é ${m}.`
}
function subtrair () {
    var tn5 = window.document.getElementById('txtn5')
    var tn6 = window.document.getElementById('txtn6')
    var res3 = window.document.getElementById('res3')
    var n5 = Number(tn5.value)
    var n6 = Number(tn6.value)
    var su = n5 - n6 
    res3.innerHTML = `O resultado da subtração entre ${n5} e ${n6} é de ${su}.`
}   
function dividir () {
    var tn7 = window.document.getElementById('txtn7')
    var tn8 = window.document.getElementById('txtn8') 
    var res4 = window.document.getElementById('res4')
    var n7 = Number(tn7.value)
    var n8 = Number(tn8.value)
    var d = n7 / n8
    res4.innerHTML = `A divisão entre ${n7} e ${n8} é de ${d}.`
}