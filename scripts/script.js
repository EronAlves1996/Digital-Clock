let actualDate = new Date();
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

dayDate.innerHTML = `${actualDate.getDate()} de ${months[actualDate.getMonth()]} de ${actualDate.getFullYear()}`;
hours.innerHTML = `${actualDate.getHours()}:${actualDate.getMinutes()}:${actualDate.getSeconds()}`;

