$("#geocomplete").geocomplete();

function submitForm() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phoneNo").value;
        var query = document.getElementById("query").value;
        var emailID = document.getElementById("emailID").value;
        alert("Hi " + name + ',' +
                "\nWill reach you @ " + phone + " or " + emailID +
                "\nWe received your queries about " + query);
}

function calculateRate() {
        alert("Development is In-progress..\n Will back to you soon..")
}

$("#fahrenheit").keyup(function () {
        document.getElementById("celsius").value = calculateTempInCelsius(parseFloat(this.value));
});
$("#celsius").keyup(function () {
        document.getElementById("fahrenheit").value = calculateTempInFahrenheit(parseFloat(this.value));
});

function calculateTempInFahrenheit(val) {
        if (typeof val == "number" && !isNaN(val)) {
                return Math.round((val * 1.8 + 32) * 10) / 10;
        } else {
                document.getElementById("fahrenheit").value = 0;
                throw Error('The given argument is not a number');
        }

}

function calculateTempInCelsius(val) {
        if (typeof val == "number" && !isNaN(val)) {
                return Math.round((val - 32) * 5 / 9 * 10) / 10;
        } else {
                document.getElementById("celsius").value = 0;
                throw Error('The given argument is not a number');
        }
}

function getCurrentWeather() {
        let name = $("#fname").val() + " " + $("#lname").val();
        let geoLoc = $("#geocomplete").val();
        let tempStr = $("#temp").val() == "C" ? "℃" : "℉";
        let inputString = "https://api.openweathermap.org/data/2.5/weather?q="
        inputString += geoLoc;
        inputString += "&units=metric&apikey=c184205bc1fcbcdc42c4b37ccf710de3";
        $.get(inputString, function (data) {
                let tempVal = $("#temp").val() == "C" ? data.main.temp : calculateTempInFahrenheit(data.main.temp);
                alert("Hi " + name +
                        ",\n" + "Your selected location is " + geoLoc
                        + "\nCurrent temperature is " + Math.round(tempVal * 10) / 10 + tempStr);
                resetInputs();

        }).fail(function () {
                alert("Hi " + name +
                        ",\nSorry we are unable to fetch data for your location.");
        });
}

function resetInputs() {
        $("#fname").val("");
        $("#lname").val("");
        $("#geocomplete").val("");
}