<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];

	$to = "iymon0217@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>