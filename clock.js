function showTime(){

var today= new Date();
var h = today.getHours()
var m= today.getMinutes();
var s= today.getSeconds();
var session= "AM";

if(h==0){
    h=12;
}// for 12am



if(h>12){
    h= h-12;
    session="PM";
} // for afternoons 1-12

h= (h < 10)? "0"+ h: h;
m= (m < 10)? "0"+ m: m;
s= (s < 10)? "0"+ s: s;
var time = h + ":" + m + ":" + s + ":" + "" + session;

document.getElementById("myClockDisplay").innerText=time;
document.getElementById("myClockDisplay").textContent= time;// this instead of innerText or innerHTML
setTimeout(showTime,1000); // this is what makes the clock work


}
showTime();