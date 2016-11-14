

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
for (var i = 1; i <= 6; i++) {
   var seatChart = document.getElementById('seating_chart1');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}

// ROW 3
for (var i = 1; i <= 6; i++) {
   var seatChart = document.getElementById('seating_chart2');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}

// ROW 4
for (var i = 1; i <= 8; i++) {
   var seatChart = document.getElementById('seating_chart3');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}


// END SEATING CHART LOOP



// MAKE ARRAY TO STORE RESERVED SEATS

var reservedSeats = [];
var email;
var name;
var seatNumber;




//USE CONSTRUCTOR TO MAKE OBJECT FOR reservedSeats 

var Seat = function (seatNumber) {		//DECLARE CONSTRUCTOR OBJECT

	this.name = name;										
	this.seatNumber = seatNumber;
	this.email = email;
};





//MAKE FUNCTION THAT LETS USER CHOOSE SEAT. 
	//IF SEAT IS AVAILABLE CHANGE CLASS TO TAKEN
	//IF SEAT IS UNAVAILABLE PROMPT MESSAGE SEAT TAKEN

$('.available').on('click', function (){
	
	var seatNumber = $(this).attr('id');

	$(this).removeClass('available').addClass('taken');

	
 
 	for (var i = 0; i < reservedSeats.length; i++) {
 		if (reservedSeats[i].seatNumber === seatNumber) {
 			alert("This seat is already taken. Please choose another seat.");
 			return;
 		}
 		
 	}
	
	reservedSeats.push (new Seat (seatNumber));
});


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
 });

// END RESERVE AND SUBMIT BUTTONS




// // on click of "reserveBtn" Generate form for user input and display seats with "taken class"
// 	$('.reserveBtn').on('click', function () { 	//choose selector and event to trigger event

// 		for (var i = 0; i < reservedSeats.length; i++) {
//  			var elSelectedSeats = document.getElementById('selected_seats');
//  			var seatNumContainer = document.createElement('div');
//  			elSelectedSeats.appendChild(reservedSeats[i].seatNumber);

// 		}
// 		});


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






//reserveSeat ()
	//ON CLICK OF "submitBtn" PUSH RESERVED SEATS INTO ARRAY

// var email;
// function reserveSeat(name, seatNumber, email) {
	
// 	var name = document.getElementById("Name").text;
// 	var email = document.getElementById("Email").text;
	
// 	for (var i = 0; i < reservedSeats.length; i++) { //LOOP THROUGH PROPERTIES OF OBJECTS IN CART
		
// 		{	//TO CHECK FOR DUPLICATE ITEMS
// 			reservedSeats[i].name = this.name;			//ADD NAME TO OBJECT
// 			reservedSeats[i].email = this.email;	
			
// 			return; //STOP LOOP AND ACT
// 		}	//END FUNCTION when IF = TRUE

// 	}	//END LOOP
//  //END FUNCTION
// };



//listReservedSeats()
	//ON CLICK OF "reserveBtn" DISPLAY RESERVED SEATS & FORM for USER INPUT
		//This is where we could include totalPrice from shopping cart





//displayConfirmation ()
	//ON CLICK OF "submitBtn" DISPLAY CONFIRMATION


//removeReservedSeat ()
	// function removeReservedSeatAll () {
	// 	var reservedSeats = [];
	// };




//BONUS

//WHEN HOVERING OVER SEAT IN reservedSeats array display Person's Name