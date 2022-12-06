function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date(); // momento atual 
    var horas = data.getHours();
    var minutos = data.getMinutes();
    
    msg.innerHTML = `Agora são ${horas}:${minutos}` 
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = "manha.png"
        document.body.style.background = '#f8f1e8'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#febe8a'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#0d2233'
    }
}