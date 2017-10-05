let friends = ["Daniel", "Ronnie", "Barbara", " Jared", "Lacon"];
let locations = ["Library", "Kitchen", "Bedroom", "Living Room", "Study", "Parlor", 
"Hall", "Bathroom", "Courtyard", "PoolHouse"];
let weapons = ["Posion", "Rope", "Revolver", "Knife", "Bat", "Choking", "Crowbar", "Shotgun",
"Sword", "Hammer", "Fountain", "Spike Trap", "Bleach", "Blunt Weapon", "Beating", "Candlestick",
"Wrench", "Chloroform", "Cliff", "Cynaide"];

$(document).ready(function(){
    for(let i = 1; i <= 100; i++){
        let h3 = $("<h3>Clue " + i + "</h3>");
        h3.click(function(){
            alert("Clue " + i + ": " +
            friends[i%5] + " did it in the " +
            locations[i%10] + " with a " + 
            weapons[i%20])});
        $("body").append(h3);
    }
})

function createH3(i){
    let h3 = $("<h3>Clue " + i + "</h3>");
    h3.click(function(){
        alert("Clue " + i + ": " +
        friends[i%5] + " did it in the " +
        locations[i%10] + " with a " + 
        weapons[i%20])}).bind(i);
    $("body").append(h3);
}

function createAlert(num){
    return function(){alert("Clue " + num + ": " +
    friends[num%5] + " did it in the " +
    locations[num%10] + " with a " + 
    weapons[num % 20])};
}