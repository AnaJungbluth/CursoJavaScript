var idade = 16
console.log(`Você tem ${idade} anos `)
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
        console.log('Voto é opsional')
}else{
        console.log('Voto é obrigatório')
}
