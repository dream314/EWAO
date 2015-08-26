/* First figure out the current minutes past the hour */

function minsLeft() {
  now = new Date()
  mins = now.getMinutes();
  
/*Next figure out how many minutes are left */

  tmlft = 60 - mins ;

/*Write to the document */
 		
 		document.getElementById("timeleft").innerHTML = tmlft;


}

/* Run the above function again every second.  This is not elegant */

function init() {
  timer = setInterval("minsLeft()", 1000);
}
