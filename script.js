let dicionario = []
dicionario.push({pt:"maçã", en:"Apple"})
dicionario.push({pt:"uva", en:"Grape"})
dicionario.push({pt:"melancia", en:"Watermelon"})

function traduzir(){
   
   //1) ler
   let palavra = document.getElementById("campo").value 

   //2) buscar
   let registro = dicionario.find( p => p.pt===palavra )

   //2.1) validação
   if (registro==undefined){
    alert ("não encontrado")

   }else{
    let traducao = registro.en

    //3) exibir
    document.getElementById("saida").innerText = traducao
   }
}