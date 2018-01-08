<?php
header("Content-Type: application/json; charset=UTF-8");
$_POST = json_decode(file_get_contents('php://input'), true);
$_POST["username"];
$servername = "localhost";
$username = "root";
$password = "root";
$dbname="myDB";
$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "INSERT INTO `TaskList` (`id`, `description`) VALUES ('".$_POST["description"]."')";


if ($conn->query($sql) === TRUE) {

 echo json_encode([ 'status' => 'success']);
} else {
  echo json_encode([ 'status' => 'fail']);
}

$conn->close();
?>
