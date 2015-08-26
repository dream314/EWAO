<?php

$con=mysqli_connect("db583069597.db.1and1.com","dbo583069597","cirqueandrae","db583069597");



if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

//Set Charset to UTF-8 when communicating with SQL
$con->set_charset("utf8"); 

?>
