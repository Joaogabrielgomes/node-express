fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(Response => {
    return Response.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('resultado-bid').innerHTML = "R$" + economia.USDBRL.bid
    document.getElementById('resultado-high').innerHTML = "R$" + economia.USDBRL.high
    document.getElementById('resultado-low').innerHTML = "R$" + economia.USDBRL.low
})