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
		/* This is the start of the story */
            text = "You find yourself tied to a chair in a creepy dark room. You assume that the door is locked. What do you do?";
            choice1Text = "Try to get free from the chair";
            choice1NextState = "S1";
            choice2Text = "Stay put";
            choice2NextState = "S.2";
            break;

        case "S1":
		/*This is the "S" storyline */
            text = "The ropes are too thick and bound too tight for you to move.  But then you find a sharp object by the floor next to you.";
            choice1Text = "Try to get the object";
            choice1NextState = "S2";
            choice2Text = "Leave it alone";
            choice2NextState = "S3";
            break;

        case "S.2":
		/*This is the "S." storyline */
            text = "You stay put and then hear footsteps coming down the hall toward you.  Do you call for help or stay quiet?";
            choice1Text = "Call for help";
            choice1NextState = "S.3";
            choice2Text = "Stay quiet";
            choice2NextState = "S.4";
            break;

        case "S2":
            text = "When you try to get the object you decide to get it by tipping your chair over so that your hand was by the object you then cut yourself free.";
            choice1Text = "Do you break the window and jump out?";
            choice1NextState = "S4";
            choice2Text = "Or try opening the door and escape.";
            choice2NextState = "S5";
            break;
			
		case "S3":
			text ="You leave the object alone so you are still tied to the chair, though you still made a lot of noise during your struggle."
			 choice1Text = "Continue";
            choice1NextState = "S.11";
			break;
			
		case "S4":
			text ="You broke the window with the sharp object and jumped out of the window, you landed into a bin full of trash bags."
			choice1Text =""
			break;
	
			
		case "S.3":
            text = "You call for help but the person yells, 'be quiet!'";
            choice1Text = "Still call for help";
            choice1NextState = "S.10";
            choice2Text = "Shut up";
            choice2NextState = "S.4";
            break;
			
		case "S.4":
            text = "You stayed quiet and the foot steps walks away.";
            choice1Text = "continue";
            choice1NextState = "S.5";
			 break;
		 
		case "S.5":
			text ="You then decide what to do next and see a silver glint on the floor";
			 choice1Text = "Grab the object";
            choice1NextState = "S.6";
			 break;
		
		case "S.6":
			text ="You are tring to break free from the ropes while using the sharp object to cut yourself free"
			choice1Text ="Keep on cutting";
			choice1NextState ="S.8";
			break;
		
		
		case "S.8":
			text ="You keep on cutting, but you accidently slit across your wrist. You dropp the object and cry in fustration."
			choice1Text ="Cry (you have no choice for this one)";
			choice1NextState ="S.10";
			break;
			
		case "S.10":
			text ="There is suddenly a sound of keys jingling and the door knob turns."
			choice1Text ="Stay back onto chair";
			choice1NextState ="S.11";
			break;
			
		case "S.11":
			text ="A person with a ski mask comes in and laughs"
			choice1Text ="continue";
			choice1NextState ="S.12";
			break;
			
		case "S.12":
			text ="The kidnapper asks, 'Do you want to escape?'"
			choice1Text ="Yes";
			choice1NextState ="S.13";
			choice2Text ="No";
			choice2NextState ="S.14";
			break;
			
		case "S.13":
			text  ="You jump out of the window and escape and you live"
			choice1Text ="continue";
			choice1NextState ="S";
			break;
		
		case "S.14":
			text ="The man said 'Ok....For being honest...I'll grant you a quick death for annoying me.' Then he shot you on the head.'"
			choice1Text ="continue";
			choice1NextState ="Dead";
			break;
	
		case "Dead":
			text ="you died, restart?"
			choice1Text ="restart";
			choice1NextState = "S";
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

