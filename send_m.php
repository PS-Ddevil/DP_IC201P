<?php 
 
// Update the path below to your autoload.php, 
// see https://getcomposer.org/doc/01-basic-usage.md 
require_once 'vendor/autoload.php'; 
 
use Twilio\Rest\Client; 
 
$sid    = "AC846d887f599a48d515d2398d7b38f8ef"; 
$token  = "6f011cff6523ce4f3144b3390dd17a5f"; 
$twilio = new Client($sid, $token); 
 
$message = $twilio->messages 
                  ->create("+917355414418", // to 
                           array( 
                               "from" => "+12512202767",       
                               "body" => $_POST['mes'] 
                           ) 
                  ); 
 
print($message->sid);
?>