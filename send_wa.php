<?php 
 
// Update the path below to your autoload.php, 
// see https://getcomposer.org/doc/01-basic-usage.md 
require_once 'vendor/autoload.php'; 
 
use Twilio\Rest\Client; 
 
$sid    = "AC3e6ec5bb366fb1897f57cbe2063ffa40"; 
$token  = "8040b19583869e279f3c8da8d6336b07"; 
$twilio = new Client($sid, $token); 
 
$message = $twilio->messages 
                  ->create("whatsapp:+919532108220", // to 
                           array( 
                               "from" => "whatsapp:+14155238886",       
                               "body" => $_POST['mes']
                           ) 
                  ); 
 
print($message->sid);