function contagem(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar'
    }else{
       res.innerHTML = 'Contando: <br>'
       var i = Number(ini.value)
       var f = Number(fim.value)
       var p = Number(pas.value)

       if(p <= 0){
        alert('Passe Invalido, considerando passo 1')
        p = 1
       }

       if(i < f){//Contagem Cresente
            for(var cont = i; cont <= f; cont+=p){
                res.innerHTML += ` ${cont} \u{1F449} ` 
            }    
        }else{//Contagem Descresente
            for(var cont = i; cont >= f; cont-=p){
                res.innerHTML += ` ${cont} \u{1F449} ` 
            }   
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}

