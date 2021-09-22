document.addEventListener("DOMContentLoaded",function(){
document.querySelector("form").onsubmit = function(){
let weight = document.querySelector("#weight").value;
let height = document.querySelector("#height").value/100;
let temp = weight / (height*height) ;
console.log(temp);
let bmi = (temp);
console.log(bmi);
if( bmi < 18.5){document.querySelector("p").innerHTML="you are underweighted";}
else if(bmi >= 18.5 && bmi <= 24.9 ){document.querySelector("p").innerHTML="you are normal";}
else{document.querySelector("p").innerHTML="you are over weighted";}
return false;
}

});


// .tofixed();