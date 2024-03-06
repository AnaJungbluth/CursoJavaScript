function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
      var fsex = document.getElementsByName('radisex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'Imagens/FotoMenino.png')
        }else if(idade < 21){
            img.setAttribute('src', 'Imagens/FotoGaroto.png')
        }else if(idade < 50){
            img.setAttribute('src', 'Imagens/FotoAdulto.png')
        }else{
            img.setAttribute('src', 'Imagens/FotoIdoso.png')
        }
      }else{
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'Imagens/FotoMenina.png')
        }else if(idade < 21){
            img.setAttribute('src', 'Imagens/FotoGarota.png')
        }else if(idade < 50){
            img.setAttribute('src', 'Imagens/FotoAdulta.png')
        }else{
            img.setAttribute('src', 'Imagens/FotoIdosa.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
      res.appendChild(img)
    }

}