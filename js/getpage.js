/*First figure out how many minutes and seconds past the hour */

function curPage() {
  now01 = new Date();
  mins01 = now01.getMinutes();
  secs01 = now01.getSeconds();

/*Convert time to seconds */
  
   tmnow =  (mins01 * 60 + secs01);

/*Figure out which second we're at */   

   		if (tmnow >= 0 && tmnow <= 179) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=0";
   		} else if (tmnow >= 180 && tmnow <= 359) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=1";
   		} else if  
      		 (tmnow >= 360 && tmnow <= 539) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=2";
   		} else if 
      		 (tmnow >= 540 && tmnow <= 719) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=3";
   		} else if  
      		 (tmnow >= 720 && tmnow <= 899) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=4";
   		} else if 
      		 (tmnow >= 900 && tmnow <= 1079) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=5";
   		} else if 
      		 (tmnow >= 1080 && tmnow <= 1259) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=6";
   		} else if
      		 (tmnow >= 1260 && tmnow <= 1439) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=7";
   		} else if  
      		 (tmnow >= 1440 && tmnow <= 1619) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=8";
   			
   		} else if  
      		 (tmnow >= 1620 && tmnow <= 1799) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=9";
   		} else if  
      		 (tmnow >= 1800 && tmnow <= 1979) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=10";   			
   		} else if  
      		 (tmnow >= 1980 && tmnow <= 2159) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=11";   			
   		} else if  
      		 (tmnow >= 2160 && tmnow <= 2339) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=12";   			
   		} else if  
      		 (tmnow >= 2340 && tmnow <= 2519) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=13";   			
   			
   		} else if  
      		 (tmnow >= 2520 && tmnow <= 2699) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=14";
   		} else if  
      		 (tmnow >= 2700 && tmnow <= 2879) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=15";
   		} else if  
      		 (tmnow >= 2880 && tmnow <= 3059) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=16";
   		} else if  
      		 (tmnow >= 3060 && tmnow <= 3239) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=17";
   		} else if  
      		 (tmnow >= 3240 && tmnow <= 3419) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=18";
   		} else if  
      		 (tmnow >= 3420 && tmnow <= 3600) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=19";
   		} 
   		
   	}

/* Run the above function again every second.  This is not elegant */

/*
function init() {
  timer = setInterval("curPage()", 1000);
}  

*/