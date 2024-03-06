let num = document.getElementById('txtnum')
let lista = document.getElementById('sellista')
let res = document.querySelector('div#res')
let vetor = []


function inNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,vet){
    if(vet.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adiciona(){
    if(inNumero(num.value) && !inLista(num.value, vetor)){
       vetor.push(Number(num.value))
       let item = document.createElement('option')
       item.text =  `Valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else{
        alert('Valor invalido ou já encontrado na lista')
    }

    num.value = ' '
    num.focus()
}

function finalizar(){
    if(vetor.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0

        for(let i in vetor){
            if(maior < vetor[i]){
                maior = vetor[i]
            }

            if(menor > vetor[i]){
                menor = vetor[i]
            }

            soma += vetor[i]
        }

        res.innerHTML += `<p>O maior valor da lista é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor da lista é ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma/vetor.length}.</p>`
    }
}
