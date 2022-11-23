  /*
  function perfil(){
    if (
    
    document.getElementById("caixa").computed.style.display=="none" ){
    document.getElementById("caixa").style.display=="block"
    }

    else{
        document.getElementById("caixa").style.display=="none";
    }
    
}*/
 
function perfil(){
    let caixa = document.getElementById("caixa")    // primeiro passo pegar o elemento
    let valor_display = window.getComputedStyle(caixa).getPropertyValue('display');
    
    if (valor_display  == 'none'){
            document.getElementById("caixa").style.display="block"
            }else{
            document.getElementById("caixa").style.display="none";
            }
}





/*document.getElementById("caixa").style.display=="none"*/
    /*window.getComputedStyle("caixa", null)*/