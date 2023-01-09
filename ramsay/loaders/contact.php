<?php
ini_set("display_errors", "on");
require "../vendor/autoload.php";
use Messenger\Messenger;
if(isset($_POST['contact_type'])){

	$name = trim($_POST['name']);
	$user_email = trim($_POST['email']);
	//$phone = trim($_POST['phone']);
	$subject = trim($_POST['subject']);
	$message = trim($_POST['message']);






	$messenger = new Messenger();

	$extra_data_array = [
		"name" => $name,
		"user_email" => $user_email,
		"subject" => $subject,
		"message" => $message

	];

	$feedback = $messenger->sendMessage("ojadtech@gmail.com", 'New Message Received', $extra_data_array, "../email_template.html");

	echo $feedback;






}