var minutos = 1000 * 60;
var horas = minutos * 60;
var dias = horas * 24;
var anos = dias * 365;

var nacimiento = new Date();
nacimiento.setDate(prompt('¿Qué fecha naciste?','01'));
nacimiento.setMonth(prompt('¿Qué mes naciste?','01'));
nacimiento.setFullYear(prompt('¿Qué año naciste?','1990'));
var n = nacimiento.getTime();

var a = (n/anos);

var aTotal = new Date();
var t = aTotal.getTime();
var b = (t/anos);
document.getElementById('anos').innerHTML = b-a + " años";
