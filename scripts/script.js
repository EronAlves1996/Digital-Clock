const dayDate = document.getElementById("date");
const hours = document.getElementById("clock");
const months = ["Janeiro",
   "Fevereiro",
   "Março",
   "Abril",
   "Maio",
   "Junho",
   "Julho",
   "Agosto",
   "Setembro",
   "Outubro",
   "Novembro",
   "Dezembro"];

let idInterval;

if(!idInterval){
   idInterval = setInterval(refreshDate, 1000);
}

function refreshDate() {
   let actualDate = new Date();
   let paramClock = [actualDate.getHours(), actualDate.getMinutes(), actualDate.getSeconds()];
   for(let i=0;i<3;i++){
      if(paramClock[i] < 10){
         paramClock[i] = '0' + paramClock[i];
      }   
   }
   dayDate.innerHTML = `${actualDate.getDate()} de ${months[actualDate.getMonth()]} de ${actualDate.getFullYear()}`;
   hours.innerHTML = `${paramClock[0]}:${paramClock[1]}:${paramClock[2]}`;
}
