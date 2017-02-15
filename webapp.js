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

        case "S":
            text = "You find yourself tied to a chair in a creepy dark room. You assume that the door is locked. What do you do?";
            choice1Text = "Try to get free from the chair";
            choice1NextState = "S1";
            choice2Text = "Stay put";
            choice2NextState = "S2";
            break;

        case "S1":
            text = "The ropes are too thick and bound too tight for you to move.  But then you find a sharp object by the floor next to you.";
            choice1Text = "Try to get the object";
            choice1NextState = "S3";
            choice2Text = "Leave it alone";
            choice2NextState = "S4";
            break;

        case "S2":
            text = "You stay put and then hear footsteps coming down the hall toward you.  Do you call for help or stay quiet?";
            choice1Text = "Call for help";
            choice1NextState = "S.3";
            choice2Text = "Stay quiet";
            choice2NextState = "S.4";
            break;

        case "S3":
            text = "When you try to get the object you decide to get it by tipping your chair over so that your hand was by the object you then cut yourself free.";
            choice1Text = "Do you break the window and jump out?";
            choice1NextState = "S.5";
            choice2Text = "Or try opening the front door and escape.";
            choice2NextState = "S.6";
            break;
			
			case "S5":
            text = "You land in a large garbage bin full of trash bags"
            choice1NextState = "S7";
            choice2Text = "Or try opening the front door and escape.";
            choice2NextState = "S8";
            break;
			
		 case "S5":
            text = "The shadow heard you and grabbed you on the neck, you can't breath.";
            choice1Text = "Think about your life";
            choice1NextState = "S9";
            choice2Text = "struggle";
            choice2NextState = "S10";
            break;
			
		case "S9":
            text = "You start to loose consiousness, and you fade into darkness....";
			choice1Text="You died. Restart?"
			choice2Text="You died. Restart?"
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
}
