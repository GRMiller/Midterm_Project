
//FOR LOOP
for (var i = 1; i <= 24; i++) {
   var seatChart = document.getElementById('seating_chart');
   var newDiv = document.createElement('div');
   newDiv.id = 'seat' + i;
   newDiv.className = "chair available";
   seatChart.appendChild(newDiv);
}

/*


// MAKE ARRAY TO STORE RESERVED SEATS

var reservedSeats = [];

//USE CONSTRUCTOR TO MAKE OBJECT FOR reservedSeats 
var Seat = function (name, seatNumber, email) {		//DECLARE CONSTRUCTOR OBJECT

//SPECIFY THAT EACH TIME A NEW OBJECT IS CREATED THE CURRENT PARAMETERS WILL BE THE PARAMETERS OF THE NEW OBJECT
	this.name = name;										
	this.seatNumber = seatNumber;
	this.price = Number(price); //USE OUR SHOPPING CART  SCRIPTS TO ADD TOTAL
	this.qty = seatNumber.length;
}


//reserveSeat ()
	//ON CLICK OF "seat open" PUSH RESERVED SEATS INTO ARRAY
function reserveSeat(name, seatNumber, email) {
	
	var name = getElementById("Name").text;
	var email = getElementById("Email").text;
	if(reservedSeats[i].name === name) {
		prompt("We're sorry, this seat is already taken");
	}

	reservedSeats.push(new Seat (name, seatNumber, email));
};

$('reserveBtn')

//listReservedSeats()
	//ON CLICK OF "reserveBtn" DISPLAY RESERVED SEATS & FORM for USER INPUT
		//This is where we could include totalPrice from shopping cart



//displayConfirmation ()
	//ON CLICK OF "submitBtn" DISPLAY CONFIRMATION





//BONUS

//WHEN HOVERING OVER SEAT IN reservedSeats array display Person's Name

*/




	
