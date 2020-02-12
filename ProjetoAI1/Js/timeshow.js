function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23      horas
    var m = date.getMinutes(); // 0 - 59    minutos
    var s = date.getSeconds(); // 0 - 59    segundos
    
   
    
    h = (h < 10) ? "0" + h : h;     //Colocar 0 antes do 10 
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s ;      //Escrever na variavel time, as horas , minutos e segundos
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000); //Executar funçao a cada 1000 ms = 1s
    
}

showTime(); //Executar a funçao