
 function submitForm(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phoneNo").value;
    var query = document.getElementById("query").value;
    alert("Hi " + name +','+
            "\nWill reach you @ " + phone +
            "\nWe received your queries about " + query);
}

function calculateRate(){
        alert("Development is In-progress..\n Will back to you soon..")
}

$("#fahrenheit").keyup(function(){
        calculateTempInCelsius(parseFloat(this.value),true);
});
$("#celsius").keyup(function(){
        calculateTempInFahrenheit(parseFloat(this.value),true);
});
   
function calculateTempInCelsius(val){
        if(typeof val == "number" && !isNaN(val)){
                $("#celsius").val((val -32 )* 5 /9);
        }else{
                $("#celsius").val(0);
        }
        
}
    
function calculateTempInFahrenheit(val){
        if(typeof val == "number" && !isNaN(val)){
                $("#fahrenheit").val((val* 9 / 5) + 32);
        }else{
                $("#fahrenheit").val(0);
        }
        
}