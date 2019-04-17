<?php
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'AC0c41c8bd550aed97f397450e4009c607';
$auth_token = '215a656ab78e150d0c85e564264ee0b9';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_ACCOUNT_SID"]

// A Twilio number you own with Voice capabilities
$twilio_number = "+12056196668";

// Where to make a voice call (your cell phone?)
$to_number = "+917355414418";

$client = new Client($account_sid, $auth_token);
$client->account->calls->create(  
    $to_number,
    $twilio_number,
    array(
        "url" => "https://dpic201p.000webhostapp.com/xml/voice_wash.xml"
    )
);
?>
