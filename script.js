function gerarTabuada(){
    var numero = document.getElementById('numero')
    var tabuada = document.getElementById('tabu')
    
    if(numero.value.length === 0){
        alert("Por favor, digite um número!")
    }else{
        var n = Number(numero.value)
        var c = 1
        tabuada.innerHTML = ''
        while(c<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}