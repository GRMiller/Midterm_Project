
//MAKE SEATING CHART
for (var i = 1; i <= 24; i++) {
   var seatChart = document.getElementById('seating_chart');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}


// MAKE ARRAY TO STORE RESERVED SEATS

var reservedSeats = [];
var seatNumber = []





//USE CONSTRUCTOR TO MAKE OBJECT FOR reservedSeats 

var Seat = function (seatNumber) {		//DECLARE CONSTRUCTOR OBJECT

	// this.name = name;										
	this.seatNumber = seatNumber;
	// this.price = Number(price); //USE OUR SHOPPING CART  SCRIPTS TO ADD TOTAL
	// this.qty = seatNumber.length;
};





//MAKE FUNCTION THAT LETS USER CHOOSE SEAT. 
	//IF SEAT IS AVAILABLE GENERATE FORM FOR USER INPUT
	//IF SEAT IS UNAVAILABLE PROMPT MESSAGE SEAT TAKEN

$('.chair').on('click', function (){
	
	var seatNumber = $(this).attr('id');

	if ($('available')) {              //maybe ($(this).hasClass('available'))
		reservedSeats.push (new Seat (seatNumber));
		// $(this).css(backgroundColor, "#2e4629")
	} else if ($('taken')) {
		prompt("This seat is already taken. Please choose another seat")
	};
});





//reserveSeat ()
	//ON CLICK OF "seat open" PUSH RESERVED SEATS INTO ARRAY

var email;
function reserveSeat(name, seatNumber, email) {
	
	var name = document.getElementById("Name").text;
	var email = document.getElementById("Email").text;
	
	for (var i = 0; i < reservedSeats.length; i++) { //LOOP THROUGH PROPERTIES OF OBJECTS IN CART
		
		// if (reservedSeats[i].seatNumber === seatNumber) {	//TO CHECK FOR DUPLICATE ITEMS
			reservedSeats[i].name = this.name;			//ADD NAME TO OBJECT
			reservedSeats[i].email = this.email;	
			
			return; //STOP LOOP AND ACT
		}	//END FUNCTION when IF = TRUE

	}	//END LOOP
; //END FUNCTION

$('reserveBtn').on('click', reserveSeat(name, seatNumber, email)) 
//listReservedSeats()
	//ON CLICK OF "reserveBtn" DISPLAY RESERVED SEATS & FORM for USER INPUT
		//This is where we could include totalPrice from shopping cart





//displayConfirmation ()
	//ON CLICK OF "submitBtn" DISPLAY CONFIRMATION


//removeReservedSeat ()

function removeReservedSeatAll () {
	var reservedSeats = [];
};




//BONUS

//WHEN HOVERING OVER SEAT IN reservedSeats array display Person's Name






	
