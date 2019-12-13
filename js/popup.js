/*
	$(".layer").css("display","block");
	$(".layer").show();
	$(".layer").slideDown();
	$(".layer").fadeOut();
	*/
$(".logout-btn").hide()
//layer popup
$(".close").click(function(e){
	e.preventDefault();
	$(".layer").fadeOut();
});
$(".about1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#about").find(".layer").fadeIn();
	
});
$(".map1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#map").find(".layer").fadeIn();
	
});
$(".attractions1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#attractions").find(".layer").fadeIn();
	
});
$(".contact1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#contact").find(".layer").fadeIn();
	
});
$(".recruit1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#recruit").find(".layer").fadeIn();
	
});
$(".gym1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#gym").find(".layer").fadeIn();
	
});
$(".pool1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#pool").find(".layer").fadeIn();
	
});
$(".cu1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#cu").find(".layer").fadeIn();
	
});
$(".laundry1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#laundry").find(".layer").fadeIn();
	
});
$(".restaurant1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#restaurant").find(".layer").fadeIn();
	
});
$(".bar1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#bar").find(".layer").fadeIn();
	
});
$(".cafe1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#cafe").find(".layer").fadeIn();
	
});
$(".roomservice1").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#roomservice").find(".layer").fadeIn();
	
});
$(".room11").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#room1").find(".layer").fadeIn();
	
});
$(".room21").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#room2").find(".layer").fadeIn();
	
});
$(".room31").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#room3").find(".layer").fadeIn();
	
});
$(".room41").click(function(e){
	e.preventDefault();
	$(".register").fadeOut();
	$(".login").fadeOut();
	$("#room4").find(".layer").fadeIn();
	
});

$(".login-btn").click(function(e){
	e.preventDefault();
	$(".login").fadeOut();
	$(".layer").fadeOut();
	$(".register").fadeOut();
	$("#login1").find(".login").fadeIn();
});

$(".close").click(function(e){
	e.preventDefault();
	$(".login").fadeOut();
	$(".register").fadeOut();
	$(".layer").fadeOut();
});
$(".menu-btn").click(function(e){
	e.preventDefault();
	$(".login").fadeOut();
	$(".register").fadeOut();
	$(".layer").fadeOut();
});
$(".btn").click(function(e){
	e.preventDefault();
	$(".login").fadeOut();
	$(".layer").fadeOut();
});

$(".register-btn").click(function(e){
	e.preventDefault();
	$(".login").fadeOut();
	$(".layer").fadeOut();
	$("#register1").find(".register").fadeIn();

});

$(".signin-btn").click(function(e){
	e.preventDefault();
	alert("No registration availiable!");
	$(".register").fadeOut();
	$("#login1").find(".login").fadeIn();
});
$("#recruit-btn").click(function(e){
	e.preventDefault();
	alert("Message Sent!");
	$(".layer").fadeOut();
});
$("#contact-btn").click(function(e){
	e.preventDefault();
	alert("Message Sent!");
	$(".layer").fadeOut();
});