var bgEL = document.getElementById("background");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");

var totalNumber = 0;

var changeBackground = function() {
    bgEL.style.width = totalNumber = "%";
};

var buttonClick = function(name) {
    if (name == "plus") {
        if(totalNumber <= 90) {
            totalNumber += 10;
            changeBackground();
            console.log(totalNumber);
        } else {
            alert("Cannot exceed limit.");
        }
    }
    
    if (name == "minus") {
        if(totalNumber >= 10) {
            totalNumber -= 10;
            changeBackground();
            console.log(totalNumber);
        } else {
            alert("Cannot go lower.");
        }
    }

};

// Add Event Listeners to the buttons:

plus.addEventListener("click", buttonClick.bind(null, "plus")); // USE bind and null bc w/out it, the event triggers on load.
minus.addEventListener("click", buttonClick.bind(null, "minus"));
