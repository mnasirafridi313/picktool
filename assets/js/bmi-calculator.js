const weight=document.getElementById("weight");
const height=document.getElementById("height");
const calculateBMI=document.getElementById("calculateBMI");
const bmiResult=document.getElementById("bmiResult");
const copyBMI=document.getElementById("copyBMI");

if(calculateBMI){

calculateBMI.addEventListener("click",function(){

if(weight.value===""||height.value===""){

bmiResult.innerHTML="Please enter your weight and height.";

return;

}

const kg=parseFloat(weight.value);
const cm=parseFloat(height.value);

if(kg<=0||cm<=0){

bmiResult.innerHTML="Please enter valid values.";

return;

}

const meter=cm/100;

const bmi=(kg/(meter*meter)).toFixed(1);

let status="";

if(bmi<18.5){

status="🟦 Underweight";

}else if(bmi<25){

status="🟩 Normal Weight";

}else if(bmi<30){

status="🟨 Overweight";

}else{

status="🟥 Obese";

}

bmiResult.innerHTML=`

<div class="resultCard">

<div class="resultBox">

<h2>${bmi}</h2>

<p>BMI</p>

</div>

</div>

<div class="extraInfo">

<p><strong>Weight:</strong> ${kg} kg</p>

<p><strong>Height:</strong> ${cm} cm</p>

<p><strong>Status:</strong> ${status}</p>

</div>

`;

});

}

if(copyBMI){

copyBMI.addEventListener("click",function(){

navigator.clipboard.writeText(bmiResult.innerText);

copyBMI.textContent="Copied ✓";

setTimeout(function(){

copyBMI.textContent="Copy Result";

},2000);

});

}
