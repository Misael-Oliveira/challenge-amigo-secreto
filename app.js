//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
   let nome = document.querySelector('input').value
    
if(nome== "" ) {
    alert("Valor inválido.")
}
else {
    amigos.push(nome)
    console.log(amigos)
    exibirLista ()
}
limparCampo() 
}
function limparCampo() {
    nome=document.querySelector('input')
    nome.value=""
}


function exibirLista (){
    
   for (let i =0; i<amigos.length; i++)  {
   if(amigos.length==1){
    let li=document.createElement('li')
   
   document.getElementById('listaAmigos').appendChild(li)
   li.innerHTML=amigos[i]
   }
   else{
    i=(i+amigos.length-1)
    let li=document.createElement('li')
    document.getElementById('listaAmigos').appendChild(li)
    li.innerHTML=amigos[i]
   }
}

}

    function sortearAmigo(){
        exibirSorteado ()
    
    }
    function exibirSorteado() {
       let maximo=amigos.length
       let minimo=0
       
        let random=Math.floor(Math.random()*(maximo-minimo)+minimo)
    
        let li=document.createElement('li')
        document.getElementById('resultado').appendChild(li)
        li.innerHTML=amigos[random]
    }