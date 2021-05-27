let txtArea = document.querySelector("textarea");
let charNumbers = document.querySelector(".charNumbers"); 
let maxLength = txtArea.maxLength; //textarea max length
let fill = document.querySelector(".fill"); //space filled
txtArea.addEventListener("keyup", function(){
    charNumbers.innerText= this.value.length; //displays how many characters are written
    fill.style.strokeDashoffset = 94 - (94 * (this.value.length*100/maxLength)) / 100; 
    if(this.value.length < maxLength-20){
        fill.style.stroke  = "#03a9f4";
    }else if(this.value.length == maxLength){
        fill.style.stroke  = "red";
    }else{
        fill.style.stroke  = "orange"
    }
    
});