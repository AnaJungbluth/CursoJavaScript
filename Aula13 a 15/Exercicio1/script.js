function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12){
    img.src = 'Imagens/FotoManha.png'
    document.body.style.background = 'rgb(177, 197, 209)'
}else if(hora >= 12 && hora < 18){
    img.src = 'Imagens/FotoTarde.png'
    document.body.style.background = 'rgb(251, 190, 162)'
}else{
    img.src = 'Imagens/FotoNoite.png'
    document.body.style.background = 'rgb(22, 82, 110)'
}
}