
// JavaScript Document
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
}