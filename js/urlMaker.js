function urlMaker() {
  
/*First figure out how many minutes and seconds past the hour */

  now01 = new Date();
  mins01 = now01.getMinutes();
  secs01 = now01.getSeconds();
  
/*Convert time to seconds */

   tmnow = (mins01 * 60 + secs01);

/* Base URLs */

    lanurl = "https://www.youtube.com/embed/JP8gt6viQKQ?"  ;
    bosurl = "https://www.youtube.com/embed/1csa1pEAAFw?"  ;
    valurl = "https://www.youtube.com/embed/ko6lUAWEXlQ?"  ;
    
 /* Options with current seconds appended */
    
    vidopts=  "&rel=0&autoplay=1&loop=1&disablekb=1&controls=0&showinfo=0&modestbranding=1&autohide=1&start=" + tmnow ;
    
 /* Write the URLs to the document */
    
	document.getElementById("lanvid").src = lanurl + vidopts ;
	document.getElementById("bosvid").src = bosurl + vidopts ;
	document.getElementById("valvid").src = valurl + vidopts ;


}
