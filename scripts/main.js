let fahrenheit = document.getElementById('fahrenheit');
let celcius = document.getElementById('celcius');
let kelvin = document.getElementById('kelvin');

fahrenheit.addEventListener('input', function(e){
    let fahrenheit = e.target.value;    // Taking the value of fahrenheit from the User input.

    let celciusfromfahrenheit = Math.round((fahrenheit - 32) * 5/9);
    let kelvinfromfahrenheit = Math.round((fahrenheit - 32) * 5/9 + 273);

    // Set the calculated value inside the number fields.
    if (fahrenheit == ''){
        celcius.value = '';
        kelvin.value = '';
    } else {
        celcius.value = celciusfromfahrenheit;
        kelvin.value = kelvinfromfahrenheit;
    }
});

celcius.addEventListener('input', function(a){
    let celcius = a.target.value;    // Taking the value of celcius from the User input.

    let fahrenheitfromcelcius = Math.round((celcius * 9/5) + 32);
    let kelvinfromcelcius = Math.round(celcius + 273);

    // Set the calculated value inside the number fields.
    if (celcius == ''){
        fahrenheit.value = '';
        kelvin.value = '';
    } else {
        fahrenheit.value = fahrenheitfromcelcius;
        kelvin.value = kelvinfromcelcius;
    }
});

kelvin.addEventListener('input', function(b){
    let kelvin = b.target.value;    // Taking the value of celcius from the User input.

    let fahrenheitfromkelvin = Math.round(kelvin - 273);
    let celciusfromkelvin = Math.round((kelvin - 273) * 9/5 + 32);

    // Set the calculated value inside the number fields.
    if (kelvin == ''){
        celcius.value = '';
        fahrenheit.value = '';
    } else {
        celcius.value = fahrenheitfromkelvin;
        fahrenheit.value = celciusfromkelvin;
    }
});