function showdate(){
    var now = new Date();           //Cria uma nova variavel do tipo date
    
    
    var monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro");   //Criaçao de um array para depois escrever o mes
    
    
    var data = (now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +    now.getFullYear () )  //Guardar no valor data , o dia (now.getDate()) , o nome do mes ( now.getMonth()) e o ano (now.getFullYear).
    
    document.getElementById("MyDateDisplay").innerText = data;      //Escreve no id MyDateDisplay a data 
    document.getElementById("MyDateDisplay").textContent = data;
    
    setTimeout(showdate, 1000);
}

showdate(); //Executa a funçao