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
}

