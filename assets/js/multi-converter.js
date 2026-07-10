const units={

Length:{
Meter:1,
Kilometer:1000,
Centimeter:0.01,
Millimeter:0.001,
Mile:1609.344,
Yard:0.9144,
Foot:0.3048,
Inch:0.0254
},

Mass:{
Kilogram:1,
Gram:0.001,
Milligram:0.000001,
Ton:1000,
Pound:0.453592,
Ounce:0.0283495
},

Time:{
Second:1,
Minute:60,
Hour:3600,
Day:86400,
Week:604800
},

Volume:{
Liter:1,
Milliliter:0.001,
CubicMeter:1000,
Cup:0.236588,
Gallon:3.78541
},

Area:{
SquareMeter:1,
SquareKilometer:1000000,
SquareFoot:0.092903,
SquareYard:0.836127,
Acre:4046.86,
Hectare:10000
},

Speed:{
MeterPerSecond:1,
KilometerPerHour:0.277778,
MilePerHour:0.44704,
Knot:0.514444
},

Temperature:{
Celsius:"C",
Fahrenheit:"F",
Kelvin:"K"
}

};

const category=document.getElementById("category");
const from=document.getElementById("from");
const to=document.getElementById("to");

for(let key in units){
category.innerHTML+=`<option>${key}</option>`;
}

loadUnits();

category.onchange=loadUnits;

function loadUnits(){

from.innerHTML="";
to.innerHTML="";

let list=units[category.value];

for(let unit in list){

from.innerHTML+=`<option>${unit}</option>`;
to.innerHTML+=`<option>${unit}</option>`;

}

}

function convert(){

let value=parseFloat(document.getElementById("amount").value);

if(isNaN(value)){
document.getElementById("result").innerHTML="Enter a value";
return;
}

let cat=category.value;

if(cat==="Temperature"){

let result;

let f=from.value;
let t=to.value;

if(f===t){
result=value;
}

else if(f==="Celsius"&&t==="Fahrenheit"){
result=value*9/5+32;
}

else if(f==="Fahrenheit"&&t==="Celsius"){
result=(value-32)*5/9;
}

else if(f==="Celsius"&&t==="Kelvin"){
result=value+273.15;
}

else if(f==="Kelvin"&&t==="Celsius"){
result=value-273.15;
}

else if(f==="Fahrenheit"&&t==="Kelvin"){
result=(value-32)*5/9+273.15;
}

else if(f==="Kelvin"&&t==="Fahrenheit"){
result=(value-273.15)*9/5+32;
}

document.getElementById("result").innerHTML=result.toFixed(4)+" "+t;

return;

}

let base=value*units[cat][from.value];

let result=base/units[cat][to.value];

document.getElementById("result").innerHTML=result.toFixed(6)+" "+to.value;

}
