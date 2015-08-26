/*First figure out how many minutes and seconds past the hour */

function flipPage() {
  now01 = new Date();
  mins01 = now01.getMinutes();
  secs01 = now01.getSeconds();

/*Convert time to seconds */
  
   tmnow =  (mins01 * 60 + secs01);

/*Figure out which second we're at */   

   		if (tmnow == 0) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=0";
   		} else if (tmnow == 180) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=1";
   		} else if  
      		 (tmnow == 360) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=2";
   		} else if 
      		 (tmnow == 540) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=3";
   		} else if  
      		 (tmnow == 720) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=4";
   		} else if 
      		 (tmnow == 900) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=5";
   		} else if 
      		 (tmnow == 1080) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=6";
   		} else if
      		 (tmnow == 1260) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=7";
   		} else if  
      		 (tmnow == 1440) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=8";
   			
   		} else if  
      		 (tmnow == 1620) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=9";
   		} else if  
      		 (tmnow == 1800) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=10";   			
   		} else if  
      		 (tmnow == 1980) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=11";   			
   		} else if  
      		 (tmnow == 2160) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=12";   			
   		} else if  
      		 (tmnow == 2340) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=13";   			
   			
   		} else if  
      		 (tmnow == 2520) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=14";
   		} else if  
      		 (tmnow == 2700) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=15";
   		} else if  
      		 (tmnow == 2880) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=16";
   		} else if  
      		 (tmnow == 3060) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=17";
   		} else if  
      		 (tmnow == 3240) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=18";
   		} else if  
      		 (tmnow == 3420) {
   			document.getElementById("libframe").src  = "libretto.php?pgnow=19";
   		} 
   		
   	}

/* Run the above function again every second.  This is not elegant */

function init() {
  timer = setInterval("flipPage()", 1000);
}  