//FOR LOOPS -- 4 ROWS

// ROW 1
for (var i = 1; i <= 4; i++) {
   var seatChart = document.getElementById('seating_chart');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}

// ROW 2
for (var i = 5; i <= 10; i++) {
   var seatChart = document.getElementById('seating_chart1');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available ";
   seatChart.appendChild(newDiv);
}

// ROW 3
for (var i = 11; i <= 16; i++) {
   var seatChart = document.getElementById('seating_chart2');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}

// ROW 4
for (var i = 17; i <= 24; i++) {
   var seatChart = document.getElementById('seating_chart3');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}

// END SEATING CHART LOOP





// DECLARE VARIABLES
var reservedSeats = [];

var seatNumbers = [];
var email;
var name;
var seatNumber;






//CONSTRUCTOR OBJECTS
var Seat = function (name, seatNumber, email) {		//DECLARE CONSTRUCTOR OBJECT


	this.seatNumber = seatNumber;

};


var CustomerReservation = function (name, seatNumber, email) {

	this.name = name;
	this.seatNumber = seatNumber;
	this.email = email;
};



//CHANGE CLASS IF AVAILABLE OR TELL USER SEAT IS UNAVAILABLE
$('.available').on('click', function (){

	$(this).removeClass('available').addClass('taken');

	var seatNumber = $(this).attr('id')

 	for (var i = 0; i < seatNumbers.length; i++) {

 		if (seatNumbers[i].seatNumber === seatNumber) {
 			alert("Sorry this seatis already taken. Please choose another.");
 			return;
 		}
 	}

	seatNumbers.push (new Seat (name, seatNumber, email)); // Maybe wait to make object tell all info collected

});

// $('.taken').on('click', function () {

// 	alert("This seat is already taken. Please choose another.")

// });


// RESERVE AND SUBMIT BUTTONS


$(document).ready(function(){

 $('.reserveBtn').mouseenter(function(){
    $('.reserveBtn').fadeTo('fast', 0.5);
  });
  $('.reserveBtn').mouseleave(function(){
    $('.reserveBtn').fadeTo('slow', 1);
  });
   $('.submitBtn').mouseenter(function(){
    $('.submitBtn').fadeTo('fast', 0.5);
  });
  $('.submitBtn').mouseleave(function(){
    $('.submitBtn').fadeTo('slow', 1);
  });
  
  var $message = $('#message');

	$('div').mouseenter(function() {
		if ($(this).hasClass('available')) {
			$message.text("This seat is available!");
		} else if ($(this).hasClass('taken')) {
			$message.text("Sorry, this seat is reserved for " + reservedSeats[i].name");
		}
	});

	$('div').mouseleave(function() {
		$message.text("Reserve a seat!");
	});
 });

// END RESERVE AND SUBMIT BUTTONS




// reserveSeat() on CLICK SUBMIT

function reserveSeat(name, seatNumber, email) {

	
	var seatNumber = seatNumbers;

  	$('.submitBtn').on('click', function(e){
  		e.preventDefault();
  		name = $('#user_name').val();
 		email = $('#user_email').val();
  

  	reservedSeats.push (new CustomerReservation (name, seatNumber, email));
  
	return name;
	});	

};

$('.submitBtn').on('click', reserveSeat(name, seatNumber, email));






//BONUS -
/*2 ideas: 	1)inside of the reserveSeat function use a setAttribute method
			To add attribute of title to images
			Title value is user's information
			On hover that info will automatically display
			2)On click of taken div Alert will pop up this seat is reserved by:
			Function with for each loop runs and finds matching seat number
			Returns property value of name*/


// $('.taken').on('click', function (){



