
function mytimmer() {
   var mydate = new Date();
   y = mydate.getFullYear();
   z = mydate.getMonth();
   w = mydate.getDay();
   d = mydate.getDate();
   h = mydate.getHours();
   m = mydate.getMinutes();
   s = mydate.getSeconds();
  ms = mydate.getMilliseconds();
  rr = h +":"+ m +":"+s 
 document.getElementById("date").innerHTML = rr ;
 setTimeout("mytimmer()", 100);
 }
mytimmer();