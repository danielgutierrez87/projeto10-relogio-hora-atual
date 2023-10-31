

function carregar() {
    var msg = document.querySelector('div#msg')
        var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes() 
    
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
            document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
            document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
            document.body.style.background = '#515154'
    }
}