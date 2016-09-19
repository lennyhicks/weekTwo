var con = "Peanut Butter";
var con2 = "Jelly";
var cond = [1, 2];


//Do you wish to create a Web Page?
var page = false;

function d(msg) {
    console.log(msg);
}

function openBread(page) {
    if (page) {
        d("<html>");
        d("<head>");
        d("<title>Let's Make a sandwhich</title>")
        d("</head>");
        d("<body>");
        d("<div>")
        d("<h1> Let's Open our bread</h1>")
    }
    d("Untwist bread tie with rightHand while holding breadPackage with leftHand");
    d("Lay down bread tie from right hand onto counter side by side");
    d("Let go of bread from rightHand");

    if (page) {
        d("</div>")
    }
    if (page) {
        d("<div>");
        d("<h1>Let's Close Our Bread</h1>")
        closeBread();
        d("</div>");
    } else {closeBread();}
}

function closeBread() {
    d("Pick up bread tie off counter with rightHand.");
    d("Grab bread with leftHand.");
    d("Twist bread tie back onto front opening of bread package.");
}

function openJar(condiment) {
    d("Grab " + condiment + " with leftHand.");
    d("Twist " + condiment + " Lid with rightHand counterClockWise Until open.");
    d("Lay " + condiment + " Lid on counter with rightHand.");
    d("Let go of " + condiment + " Lid");
    if (page) {
        d("<div>");
        d("<h1>Let's get Our Condiment</h1>")
        getCondiment(condiment);
        d("</div>");
    } else {getCondiment(condiment);}

}

function getCondiment(condiment) {
    d("Grab knifeHandle with rightHand.");
    d("Place knife into " + condiment + " Jar Keep holding knifeHandle.");
    d("Scoop " + condiment + " with knife.");
    d("Remove knife with " + condiment + " from the jar.");
    d("Place " + condiment + " Jar on counter with leftHand.")
    d("Let go of " + condiment + " Jar from leftHand.");

    if (page === true) {
        d("<div>");
        d("<h1>Let's Spread Our Condiment</h1>")
        spreadCondiment(condiment);
        d("</div>");
    } else {spreadCondiment(condiment);}

}

function closeJar(condiment) {
    d("Lay down Knife from rightHand on counter")
    d("Let go of knife with rightHand")
    d("Pickup " + condiment + " Jar from counter with leftHand.");
    d("Pickup " + condiment + " Lid from counter with rightHand.");
    d("Twist " + condiment + " Lid with rightHand onto " + condiment + " clockWise Until closed.");
    d("Let go of " + condiment + " Lid with rightHand.");
    d("Place " + condiment + " on counter eith leftHand.");
    d("Let go of " + condiment + " Jar from leftHand.");
}

function spreadCondiment(condiment) {
    d("Grab any empty slice of bread from the counter in your leftHand.");
    d("Spread " + condiment + " with rightHand onto slice of bread in leftHand on side away from hand.");
    d("Lay down slice of bread from leftHand on counter with " + condiment + " side facing up.");
    d("Let go of " + condiment + " bread with leftHand.");
    d("Grab napkin or something used to clean utensils with leftHand.");
    d("Wipe knifeblade with the item you grabbed in leftHand with knife sharp side away from you.");
    d("Travel to Trash Can.");
    d("Throw away item in left hand.");
    d("Travel back to counter.");

    if (page) {
        d("<div>");
        d("<h1>Let's close Our Condiment</h1>")
        closeJar(condiment);
        d("</div>");
    } else {closeJar(condiment);}


}

function completeSandwhich(con1, con2) {
    if (page) {
        d("<div>");
        d("<h1>Let's Finish our Sandwhich</h1>")
    }
    d("Grab Slice of bread with " + con1 + " in leftHand with " + con1 + " facing away from your hand.");
    d("Grab Slice of bread with " + con2 + " in rightHand with " + con2 + " facing away from your hand.");
    d("Press bread together with " + con1 + " and " + con2 + " facing each other.");
    d("Hold on to entire sandwhich with leftHand.");
    d("Lay down completed sandwhich with leftHand onto counter.");
    d("Let go of sandwhich");
    if (page) {
        d("</div>");
        d("</body>");
        d("</html>");
    }

}

function makeSandwhich(page, con1, con2) {
    openBread(page);
    closeBread();
    openJar(con1);
    openJar(con2);
    completeSandwhich(con1, con2);
}
makeSandwhich(page, con1, con2);