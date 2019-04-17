$('#food_wa').click(function() {
    $.ajax({
     type: "POST",
     url: "send_wa.php",
     data: { mes: "I Want Food" }
    }).done(function( msg ) {
     alert("WhatsApp Msg Sent");
    });    
});
$('#fruit_wa').click(function() {
    $.ajax({
     type: "POST",
     url: "send_wa.php",
     data: { mes: "I Want Fruit" }
    }).done(function( msg ) {
     alert("WhatsApp Msg Sent");
    });    
});
$('#water_wa').click(function() {
    $.ajax({
     type: "POST",
     url: "send_wa.php",
     data: { mes: "I Want Water" }
    }).done(function( msg ) {
     alert("WhatsApp Msg Sent");
    });    
});
$('#wash_wa').click(function() {
    $.ajax({
     type: "POST",
     url: "send_wa.php",
     data: { mes: "I Want to go to Washroom" }
    }).done(function( msg ) {
     alert("WhatsApp Msg Sent");
    });    
});
$('#room_wa').click(function() {
    $.ajax({
     type: "POST",
     url: "send_wa.php",
     data: { mes: "My Room is not clean, Please clean it" }
    }).done(function( msg ) {
     alert("WhatsApp Msg Sent");
    });    
});
$('#food_cl').click(function() {
    $.ajax({
     type: "POST",
     url: "call_food.php"
    }).done(function( msg ) {
     alert("Call Completed");
    });    
});
$('#fruit_cl').click(function() {
    $.ajax({
     type: "POST",
     url: "call_fruit.php"
    }).done(function( msg ) {
     alert("Call Completed");
    });    
});
$('#water_cl').click(function() {
    $.ajax({
     type: "POST",
     url: "call_water.php"
    }).done(function( msg ) {
     alert("Call Completed");
    });    
});
$('#wash_cl').click(function() {
    $.ajax({
     type: "POST",
     url: "call_wash.php"
    }).done(function( msg ) {
     alert("Call Completed");
    });    
});
$('#room_cl').click(function() {
    $.ajax({
     type: "POST",
     url: "call_room.php"
    }).done(function( msg ) {
     alert("Call Completed");
    });    
});
$('#food_m').click(function() {
    $.ajax({
     type: "POST",
     url: "send_m.php",
     data: { mes: "I Want Food" }
    }).done(function( msg ) {
     alert("Msg Sent");
    });    
});
$('#fruit_m').click(function() {
    $.ajax({
     type: "POST",
     url: "send_m.php",
     data: { mes: "I Want Fruit" }
    }).done(function( msg ) {
     alert("Msg Sent");
    });    
});
$('#water_m').click(function() {
    $.ajax({
     type: "POST",
     url: "send_m.php",
     data: { mes: "I Want Water" }
    }).done(function( msg ) {
     alert("Msg Sent");
    });    
});
$('#wash_m').click(function() {
    $.ajax({
     type: "POST",
     url: "send_m.php",
     data: { mes: "I Want to go to Washroom" }
    }).done(function( msg ) {
     alert("Msg Sent");
    });    
});
$('#room_m').click(function() {
    $.ajax({
     type: "POST",
     url: "send_m.php",
     data: { mes: "My Room is not clean, Please clean it" }
    }).done(function( msg ) {
     alert("Msg Sent");
    });    
});