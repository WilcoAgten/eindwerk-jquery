<?php

die;

$conn = new PDO(
    "mysql:host=localhost;dbname=jqueryvschool",
    "root",
    "root"

);
$query = "INSERT into subscribers(email) VALUES (?)";
$stmt = $conn->prepare($query);
$stmt->execute([
    $_POST['email']
]);
