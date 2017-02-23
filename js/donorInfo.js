"use strict";
console.log("donorInfo page");
//this iife will hold the functions that are responsible for holding the donor info in a private array
var Donor = (function(moneyDonor){

	return{
	//the donor info function will go here; this will be the getInfo function, getting the info from the input forms
	getInfo: function(info){
		console.log("info object from the donorInfo", info);
	}

	//the addDonor method will be here and this will be how the info gets put into the info object. 
	//this function will need to grab the donorInfo and put it into a table


	};

})(Donor || {});


// moneyDonor.addDonor()