function tabuada(){
    var num = document.getElementById('txtnum')
    var res = document.getElementById('seltabuada')

    if(num.value.length == 0){
        alert('Digite um número')
    }else{
        var n = Number(num.value)
        res.innerHTML = ''
        for(var cont=0;cont<=10;cont++){
            let item = document.createElement('option') 
            item.text = `${n} x ${cont} = ${cont*n}`
            item.value = `res${cont}`
            res.appendChild(item)
        }
    }
}