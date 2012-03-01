/**
 * Variables are not typesafe.
 */
var valtozo;
valtozo = 'alma';
//console.log(valtozo);
valtozo = 1;
//console.log(valtozo);
console.log(valtozo + 'fa');
masikValtozo = 2;
//console.log(masikValtozo);
masikValtozo = 'meggy';
//console.log(masikValtozo);
//console.log(masikValtozo+3);
var kutya = new Object();
kutya.legs = 4;
kutya.bark = 'Wau Wau';
kutya.colour = 'Brown';
kutya.nev = 'Kutyuli';
var lDog = {
    legs: 4,
    bark: 'Wau Wau',
    colour: 'Brown',
    nev: 'Kutyuli'
};

var versenyzok = new Array();
versenyzok[0] = 'Kimi Raikonnen';
versenyzok[1] = 'S. Vettel';
versenyzok[2] = 'J. Button';
versenyzok[3] = 'N. Rosberg';
var racers = ['Kimi Raikonnen', 'S. Vettel', 'J. Button', 'N. Rosberg'];

/**
 * Flow of Control Statements
 * If-Else
 */
if (true) {
    var x = true;
} else {
    // Vicces ag, ami teljesen felesleges :-)
    var x = false;
};
var x = true || false;
var x = (input == true) ? true : false;
/**
 * Switch-Case
 */
var input = 5;
switch (input) {
case 1:
    console.log(1);
    break;
case 4:
    console.log(5);
    break;
default:
    console.log('Default');
}
/**
 * Loops
 */
for (var i in racers) {
    console.log(racers[i]);
}
for (var i = 0; i < racers.length; i++) {
    console.log(racers[i]);
}
var i = 0;
while (i < racers.length) {
    console.log(racers[i]);
    i++;
}