//enter value
//click button
//get value from input
//conversion
//display result

document.querySelector('#switchConverter').addEventListener('click', switchConverter);

let converter=convertFToC;

document.querySelector('#convert').addEventListener('click', () => setTemperature(converter));


function convertFToC(fahrenheit){
    return Math.floor((fahrenheit - 32) / 1.8) + '°C';
}

function convertCToF(celsius){
    return Math.floor((celsius * (9/5)) + 32) + '°F';
}

function setTemperature(converter){
    const temp = document.querySelector('#temperature').value;
    document.querySelector('#result').innerText= converter(temp);
};



function switchConverter(){
    let unit = document.querySelector('#unit');
    let switchUnit = document.querySelector('#switchConverter');
    let result = document.querySelector('#result');

    if(converter===convertFToC){
        switchUnit.innerText = '°C => °F';
        unit.innerText = '°C';
        result.innerText  = '-18 °C';   
        converter = convertCToF;
    }else{
        switchUnit.innerText  = '°F => °C';
        unit.innerText  = '°F';
        result.innerText  = '32 °F';
        converter = convertFToC;
    }    
}


