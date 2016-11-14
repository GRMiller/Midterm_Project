

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
var seatNumber = [];
var email;
var name;
var seatNumber;






//CONSTRUCTOR OBJECT
var Seat = function (name, seatNumber, email) {		//DECLARE CONSTRUCTOR OBJECT

	this.name = name;										
	this.seatNumber = seatNumber;
	this.email = email;
};






//CHANGE CLASS IF AVAILABLE OR TELL USER SEAT IS UNAVAILABLE 
$('.available').on('click', function (){

	$(this).removeClass('available').addClass('taken');
 
 	for (var i = 0; i < reservedSeats.length; i++) {
 		if (reservedSeats[i].seatNumber === seatNumber) {
 			alert("This seat is already taken. Please choose another seat.");
 			return;
 		}
 	}
	reservedSeats.push (new Seat (seatNumber)); // Maybe wait to make object tell all info collected
});

// $('.taken').on('click', function () {

// 	alert("This seat is already taken. Please choose another.")

// });




//CLICK RESERVE BUTTON
	//Form with user's selected seats and input fields for name and email appears

// 	$('.reserveBtn').on('click', function () { 	//choose selector and event to trigger event

// 		for (var i = 0; i < reservedSeats.length; i++) {
//  			var elSelectedSeats = document.getElementById('selected_seats');
//  			v
//  			elSelectedSeats.appendChild(reservedSeats[i].seatNumber)

// 		}
// 	});
		// for (var i = 0; i < reservedSeats.length; i++) {
		// reservedSeats.forEach(function () {

		// 	var elSelectedSeats = document.getElementById('selected_seats');

		// 	elSelectedSeats.appendChild(reservedSeats[i].seatNumber); //to get the value of seatNumber and then append to page
		// 	});
		// }
	
	
		//get seats that have class taken (or are in array)
		//display seats that have class taken (or are in array)
		//display form and submit button
		//close, provide confirmation, and push name and e-mail into array on click of submit btn






//reserveSeat() on CLICK SUBMIT

function reserveSeat(name, seatNumber, email) {
	
	var name = 'john';
	var email = 'john@john.com';
	var seatNumber = $('.taken').attr('id');
	
	reservedSeats.push (new Seat (name, seatNumber, email));
	
};

$('.submitBtn').on('click', reserveSeat(name, seatNumber, email));




//listReservedSeats()
	//ON CLICK OF "reserveBtn" DISPLAY RESERVED SEATS & FORM for USER INPUT
		//This is where we could include totalPrice from shopping cart





//displayConfirmation ()
	//ON CLICK OF "submitBtn" DISPLAY CONFIRMATION


//removeReservedSeat ()
	// function removeReservedSeatAll () {
	// 	var reservedSeats = [];
	// };




//BONUS - 
/*2 ideas: 	1)inside of the reserveSeat function use a setAttribute method 
			To add attribute of title to images 
			Title value is user's information 
			On hover that info will automatically display

			2)On click of taken div Alert will pop up this seat is reserved by:
			Function with for each loop runs and finds matching seat number
			Returns property value of name*/


// $('.taken').on('click', function (){

// 	 $(this).;
 
//  	for (var i = 0; i < reservedSeats.length; i++) {
//  		if (reservedSeats[i].seatNumber === seatNumber) {
//  			alert("This seat is already taken. Please choose another seat.");
//  			return;
//  		}
//  	}
// 	// reservedSeats.push (new Seat (seatNumber)); // Maybe wait to make object tell all info collected
// });







	
