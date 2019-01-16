var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var units = "metric";
var city = "Metz";
var appid = "ff7df6d0fadc12d3893f4cab80f6aee5";
var units = "metric";
var response = JSON.parse(this.responseText);
var temperature = response.main.temp;

function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

function init_page() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function get_temperature() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
            
            if(document.getElementById("url_visibility").checked){
                document.getElementById("url").style.display = "block";
            }
            else{
                document.getElementById("url").style.display = "none";
            }

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon").src = src;
            document.getElementById("meteo").innerHTML = temperature;
        }
    };



    xhr.open("GET", get_url(), true);
    xhr.send();
}