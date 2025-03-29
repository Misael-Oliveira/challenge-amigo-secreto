//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Lista de amigos
let amigos = []

//Função para adicionar amigos
function adicionarAmigo() {
   let nome = document.querySelector('input').value
 
   //Valor Inválido para espaço
if(nome== "" ) {
    alert("Valor inválido.")
}
//Nomes já adicionados
if(amigos.includes(nome)){
    let mensagemDeRepeticao=document.querySelector('p')
    mensagemDeRepeticao.innerHTML="Nome repetido"
}

//Adicionar amigos na lista
else { limparP()
    amigos.push(nome)
    console.log(amigos)
    exibirLista ()
}
limparCampo() 
}
//Função para limpar o campo de entrada
function limparCampo() {
    nome=document.querySelector('input')
    nome.value=""
}
//Função para limpar o campo de nomes repetidos
function limparP(){
    let limpar=document.querySelector('p')   
    limpar.innerHTML=""
   }
//Função para exibir lista de nomes na tela
function exibirLista (){
    
   for (let i =0; i<amigos.length; i++)  {
   //Quando tiver um nome na lista
    if(amigos.length==1){
    let li=document.createElement('li')
   
   document.getElementById('listaAmigos').appendChild(li)
   li.innerHTML=amigos[i]
   }
   //Para caso tiver mais de um nome na lista
   else{
    i=(i+amigos.length-1)
    let li=document.createElement('li')
    document.getElementById('listaAmigos').appendChild(li)
    li.innerHTML=amigos[i]
   }
}

}
//Função que exibi o nome sorteado
    function sortearAmigo(){
       if(amigos.length==0){
        alert("Sem nomes!")
       }
       else{ exibirSorteado ()
       }    
    }
    //Função que sorteia o nome e exibi na tela
    function exibirSorteado() {
       let maximo=amigos.length
       let minimo=0
       
        let random=Math.floor(Math.random()*(maximo-minimo)+minimo)
    
        let li=document.createElement('li')
        document.getElementById('resultado').appendChild(li)
        li.innerHTML=amigos[random]
    }