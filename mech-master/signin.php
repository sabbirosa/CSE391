<?php

require_once('DBconnect.php');

session_start();


$username = $_POST['email'];
$pas = $_POST['password'];
$sql = "SELECT * FROM panel WHERE username = '$username' AND password = '$pas'";


$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) !=0 ){
	$_SESSION['username'] = $username;
	header("Location:dataview.php");
}
else{
	$_SESSION['error']=true;
	header("Location: dataview.php");
}

?>
