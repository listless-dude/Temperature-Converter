// When User Visits the page for the first time, the cards are invisble.
document.getElementById('cards').style.visibility = 'hidden';

// When the User enters inputs data, the calculation is done in realtime.
document.getElementById('fahrenheit').addEventListener('input', function(e){

    const kelvin = 273.15;              // Declared constant value of Kelvin.
    let fahrenheit = e.target.value;    // Taking the value of fahrenheit from the User input.

    let celciusfromfahrenheit = ((fahrenheit - 32) * 5/9).toFixed(2);

    // Set the calculated value inside the card.
    document.getElementById('outputcelcius').innerHTML = celciusfromfahrenheit + " °C";

    // When the User inputs data, the cards become visible.
    document.getElementById('cards').style.visibility = 'visible';
});