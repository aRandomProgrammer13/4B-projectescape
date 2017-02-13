<<<<<<< Updated upstream
<<<<<<< HEAD
// JavaScript Document















/*


function changeDisplay(choice) {
	switch(choice) {
		case "forest":
			// change story
			document.getElementByID("story").innerHTML = "INSERT TEXT HERE";
			// change buttons
			// this can be done many different ways
			// idea #1:
			document.getElementByID("buttons").innerHTML = "<input type='button' THIS IS NOT COMPLETE><ADD MORE BUTTONS HERE>";

			// idea #2:
			var btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "changeDisplay('path')");
			btn1.innerHTML = "Take the path";
			var btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "changeDisplay('east')");
			btn2.innerHTML = "Head East";
			// you could add as many buttons as you needed here
			document.getElementByID("buttons").innerHTML = btn1 + btn2;
			break;
		case "path":
			// copy code from above and adjust
		case "east":
			// copy code from above and adjust
		case "west":
			// copy code from above and adjust
	}
=======
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
function onLoadHandler() {
    updateScreen("S");
}

function updateScreen(newState) {

    var currentState = newState;
    var text = "";
    var choice1Text = "";
    var choice1NextState = "";
    var choice2Text = "";
    var choice2TextState = "";

    switch (currentState) {

        case "S" :
            text = "You find yourself tied to a chair in a creepy dark room. You assume that the door is locked. What do you do?";
            choice1Text = "Try to get free from the chair";
            choice1NextState = "S1";
            choice2Text = "Stay put";
            choice2NextState = "S2";
            break;

        case "S1" :
            text = "The ropes are too thick and bound too tight for you to move.  But then you find a sharp object by the floor next to you.";
            choice1Text = "Try to get the object";
            choice1NextState = "S3";
            choice2Text = "Leave it alone";
            choice2NextState = "S4";
            break;

        case "S2":
            text = "You stay put and then hear footsteps coming down the hall toward you.  Do you call for help or stay quiet?";
            choice1Text = "Call for help";
            choice1NextState = "S5";
            choice2Text = "Stay quiet";
            choice2NextState = "S6";
            break;
			
			

        default:
            text = "ERROR";
            break;
    }  

    document.getElementById("story").innerHTML = text;

    if (choice1Text == "") {
        document.getElementById("choice1").style.visibility = "hidden";
    } else {
        document.getElementById("choice1").style.visibility = "visible";
        document.getElementById("choice1").value = choice1Text;
        document.getElementById("choice1").setAttribute("onClick", "updateScreen('" + choice1NextState + "');");
    }
    if (choice2Text == "") {
        document.getElementById("choice2").style.visibility = "hidden";
    } else {
        document.getElementById("choice2").style.visibility = "visible";
        document.getElementById("choice2").value = choice2Text;
        document.getElementById("choice2").setAttribute("onClick", "updateScreen('" + choice2NextState + "');");
    }
>>>>>>> origin/Version-1.0
}

=======
// JavaScript Document
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
function changeDisplay(choice) {
	switch("choice") {
=======


function myFunction(x) {
	switch(x)
    	case 1:
	    	document.getElementById("demo").innerHTML = "Nothing happened";
	        document.getElementById("button").setAttribute("onClick", "myFunction(2)");
			break;
			
		case 2:
	    	document.getElementById("demo").innerHTML = "Someone is approaching!";
    	    document.getElementById("button").setAttribute("onClick", "myFunction(1)");
        	break;
    }
}














/*


function changeDisplay(choice) {
	switch(choice) {
>>>>>>> origin/Version-1.0
		case "forest":
			// change story
			document.getElementByID("story").innerHTML = "INSERT TEXT HERE";
			// change buttons
			// this can be done many different ways
			// idea #1:
			document.getElementByID("buttons").innerHTML = "<input type='button' THIS IS NOT COMPLETE><ADD MORE BUTTONS HERE>";

<<<<<<< HEAD
	
	function button(choice) {
	switch(choice) {
		case "chair":
			// change story text
			document.getElementByID("story").innerHTML = "INSERT TEXT HERE";
			// change picture
			document.getElementByID("picture").setAttribute("src", "newimage.jpg");
			// change buttons
			// this can be done many different ways
			// idea #1:
			document.getElementById("buttons").innerHTML = "<input type='button' THIS IS NOT COMPLETE><ADD MORE BUTTONS HERE>";
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
>>>>>>> origin/Version-1.0
			// idea #2:
			var btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "changeDisplay('path')");
			btn1.innerHTML = "Take the path";
			var btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "changeDisplay('east')");
			btn2.innerHTML = "Head East";
			// you could add as many buttons as you needed here
<<<<<<< Updated upstream
			document.getElementByID("buttons").innerHTML = btn1 + btn2;
			break;
		case "path":
=======
			document.getElementByID("buttons").innerHTML = chair + stay;
			break;
		case "stay":
>>>>>>> Stashed changes
			// copy code from above and adjust
		case "east":
			// copy code from above and adjust
		case "west":
			// copy code from above and adjust
	}
}

*/
>>>>>>> Stashed changes
