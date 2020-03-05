var vacationType 
var groupSize
var result 
var destination 
var travelSuggestion;

vacationType = prompt(" What kind of trip would you like to go on, musical, tropical, or adventurous?");
groupSize = prompt("How many are in your group?");

if (vacationType.toLowerCase() === "musical") {
    destination = 'New Orleans'
} else if (vacationType.toLowerCase() === "tropical") {
    destination = "Beach Vacation in Mexico";
} else if (vacationType.toLowerCase() === "adventurous") {
    destination = "Whitewater Rafting the Grand Canyon";
}

if (Number(groupSize) > 0 && Number(groupSize) < 3) {
    travelSuggestion = "First Class flight";
} else if (Number(groupSize) > 2 && Number(groupSize) < 6) {
    travelSuggestion = "Helicopter";
} else if (Number(groupSize) > 5) {
    travelSuggestion = "Charter Flight";
}

result = "Since you’re a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to a vacation in " + destination;

console.log(result);