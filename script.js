/*---- Setting Global Variables ----*/

var firstName;
var lastName;
var email;
var address;
var emojii;
var pin;
var passwordLength = 8;
	


function start(){

/*---- IIE to fetch the entered values to a variable upon submit----*/
	(function (){
		firstName 	=	 document.getElementById("userFirstName").value;
		lastName 	= 	 document.getElementById("userLastName").value;
		email 		= 	 document.getElementById("getEmail").value;
		address 	= 	 document.getElementById("getAddress").value;
		emojii 		= 	 document.getElementById("getEmojii").value;
		pin 		= 	 document.getElementById("getPin").value;
	})();

/*---- create appendable random unicode value ----*/

var unicode = 0;
let unicodeCreator 	= () => { 

    var random 	    = 		Math.floor(Math.random() * 750);
	unicode 		    = 		unicodeBlocks[random];
}

unicodeCreator();

/*---- Add all values to an array (if not empty) by converting to individual characters -----*/

var stash = [];
 	function stashInputs(obj){
 		if(obj != "") {

 		     obj = obj.split('');

            for(var i=0; i < obj.length ; i++)
            { // splits and adds individual character to array step-by-step
 		         stash.push(obj[i]);
             }

 	}
 	}

stashInputs(firstName);
stashInputs(lastName);
stashInputs(email);
stashInputs(address);
stashInputs(emojii);
stashInputs(pin);
stashInputs(unicode);

// console.log(stash); // to log the list of all stored characters on the array

/*---- Fisher-Yates Array Shuffling Algorithm ----*/

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(stash);

/*---- Creating the final key and printing it ----*/

let keygen = () => {

var key="";

	for(var i = 0; i < passwordLength ; i++)
	{
		key += stash[i];
	}
    
	document.getElementById("holder").value = key; 

}

keygen();


}