let num = [6,4,3,9]

num[4] = 7

num.push(8)

num.sort()

//FORMA PADRÃO DE MOSTRAR
console.log(`Nosso vetor é ${num}`)
console.log(`Comprimento do vetor ${num.length}`)

//FORMA MAIS INTELIGENTE, MAIS NÃO A MAIS SIMPLES
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

//BUSCA A POSIÇÃO DO VALOR INSERIDO
let pos = num.indexOf(4)

//SE RETORNA -1 O VALOR NÃO ESTÁ NO VETOR
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`Valor está na posição ${pos}`)
}

