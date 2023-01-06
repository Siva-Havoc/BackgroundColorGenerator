// author - Siva M 

var body=document.getElementById("gradient");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var css=document.querySelector("h2");

// Function to set gradient to the respective input

function setGradient()
{
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);



// thanks to ZeroToMastery