<?php
require_once('DBconnect.php');
session_start();

$name = $_POST['name'];
$phone = $_POST['phone'];
$color = $_POST['color'];
$license = $_POST['license'];
$engine_num = $_POST['engine_num'];
$date = $_POST['date'];
$mech = $_POST['mech'];

$sql = "INSERT INTO client (name, phone, color, license, engine_num, date, mech) VALUES ('$name', '$phone', '$color', '$license', '$engine_num', '$date', '$mech')";

$result = mysqli_query($conn, $sql);

if(mysqli_affected_rows($conn) > 0){
    echo "Inserted Successfully";
    header("Location: index.html");
} else {
    echo "Insertion Failed";
}
?>