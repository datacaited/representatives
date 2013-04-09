<?php

if($_POST['zip']){

  $zip = $_POST['zip'];
	$url = "http://whoismyrepresentative.com/getall_mems.php?zip=".$zip;
	$url .= "&output=json";

	$ch = curl_init(); 
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$request = curl_exec($ch); 
	echo json_encode($request);
	curl_close($ch);
}

if($_POST['lastname']){
	$lastname = $_POST['lastname'];
	$key = $_POST['key'];

	$url = "http://services.sunlightlabs.com/api/";
	$url .= "legislators.getList.json?apikey=c6d8f835d6444905a6ea3d56f069efbf&lastname=".$lastname;

$ch = curl_init(); 
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$request = curl_exec($ch); 
echo json_encode($request);
curl_close($ch);
}

?> 
