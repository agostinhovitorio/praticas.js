function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()     
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.webp'
        document.body.style.background = '#d4bcb4'
    } else if (hora >= 12 && hora <= 18) {        
        //BOA TARDE!
        img.src = 'tarde.webp'
        document.body.style.background = '#7d7069'
    } else {
        //BOA NOITE!
        img.src = 'noite.webp'
        document.body.style.background = '#1f4575'
    }
}