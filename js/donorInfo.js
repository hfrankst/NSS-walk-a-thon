"use strict";
console.log("donorInfo page");
//this iife will hold the functions that are responsible for holding the donor info in a private array
var Donor = (function(moneyDonor){

	return{
	//the donor info function will go here; this will be the getInfo function, getting the info from the input forms
	buildDonorTable: function(info){
		console.log("info object from the donorInfo", info);
		var table = document.getElementById('table-body');
		var newRow = table.insertRow(0);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		var cell4 = newRow.insertCell(3);
		

		cell1.innerHTML = info.name;
		cell2.innerHTML = info.email;
		cell3.innerHTML = info.pledge;
		cell4.innerHTML = info.donationType;

		}

	};

})(Donor || {});


