// MAKE ARRAY TO STORE RESERVED SEATS

var reservedSeats = [];

//USE CONSTRUCTOR TO MAKE OBJECT FOR reservedSeats 
var Seat = function (name, seatNumber, price) {		//DECLARE CONSTRUCTOR OBJECT

//SPECIFY THAT EACH TIME A NEW OBJECT IS CREATED THE CURRENT PARAMETERS WILL BE THE PARAMETERS OF THE NEW OBJECT
	this.name = name;										
	this.seatNumber = seatNumber;
	this.price = Number(price); //USE OUR SHOPPING CART  SCRIPTS TO ADD TOTAL
}


//reserveSeat ()
	//ON CLICK OF "seat open" PUSH RESERVED SEATS INTO ARRAY
function reserveSeat(name, seatNumber, price) {
	reservedSeats.push(new Seat (name, seatNumber, price));
}

//listReservedSeats()
	//ON CLICK OF "reserveBtn" DISPLAY RESERVED SEATS & FORM for USER INPUT
		//This is where we could include totalPrice from shopping cart

//displayConfirmation ()
	//ON CLICK OF "submitBtn" DISPLAY CONFIRMATION





//BONUS

//WHEN HOVERING OVER SEAT IN reservedSeats array display Person's Name
	
