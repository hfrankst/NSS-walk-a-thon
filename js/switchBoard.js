"use strict";
console.log("switchBoard page");
var Donor = (function(moneyDonor){
	

	var info = {}; 
	//variables declared to be used for the event listeners
	var donateBtn = document.getElementById('donate');
	var cancelBtn = document.getElementById('cancel');

	
	//event listener for the cancel button
	cancelBtn.addEventListener('click', formReset); 

		function formReset () {
			document.getElementById('myForm').reset();
			console.log("Form has been reset");	
		}
	
	//the donate button needs to run the getInfo() function from the donorInfo page
	donateBtn.addEventListener('click', submitDonation);

		function submitDonation (){
			//variables for each part of the form
			var inputName = document.getElementById('inputName').value;
			var inputEmail = document.getElementById('inputEmail').value;
			var inputDonation = parseInt(document.getElementById('inputDonation').value);
			var donationType;
			var lumpSum = document.getElementById('gridRadios1');
			var perLap = document.getElementById('gridRadios2');

			if(lumpSum.checked){
				donationType = "Lump Sum";
			} else if(perLap.checked){
				donationType = "Per Lap";
			} else {
				alert("Pick a donation type.");
			}

			info = {
				name: inputName,
				email: inputEmail,
				pledge: "$" + inputDonation,
				donationType: donationType
			};
			console.log("info object", info);
			formReset();
			document.getElementById('inputName').focus();

			console.log("Form has been submitted");
			//last thing should call the buildDonorTable() from the donorInfo.js so that it can store that info into the info object
	Donor.buildDonorTable(info);
	}

})(Donor || {});