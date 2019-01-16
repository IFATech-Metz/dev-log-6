var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city = "Metz";
var appid = "ff7df6d0fadc12d3893f4cab80f6aee5";
var units = "metric";

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

            var response = JSON.parse(this.responseText);
            var temperature = Math.round(response.list[0].main.temp);

            var icon = response.list[0].weather[0].icon;

            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("meteo1").innerHTML = temperature;
            temperature = Math.round(response.list[1].main.temp);

            document.getElementById("icon1").src = src;
            icon = response.list[1].weather[0].icon;

            document.getElementById("meteo2").innerHTML = temperature;
            temperature = Math.round(response.list[2].main.temp);

            document.getElementById("icon2").src = src;
            icon = response.list[2].weather[0].icon;

            document.getElementById("meteo3").innerHTML = temperature;
            temperature = Math.round(response.list[3].main.temp);

            document.getElementById("icon3").src = src;
            icon = response.list[3].weather[0].icon;

            document.getElementById("meteo4").innerHTML = temperature;
            temperature = Math.round(response.list[4].main.temp);

            document.getElementById("icon4").src = src;
            icon = response.list[4].weather[0].icon;

            document.getElementById("meteo5").innerHTML = temperature;
            temperature = Math.round(response.list[5].main.temp);

            document.getElementById("icon5").src = src;
            icon = response.list[5].weather[0].icon;

        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function handleKeyPress(e)
{
    var key = e.key;
    if(key === "Enter") get_temperature();
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

            var response = JSON.parse(this.responseText);
            var temperature = Math.round(response.list[0].main.temp);
            var icon = response.list[0].weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon1").src = src;
            document.getElementById("meteo1").innerHTML = temperature;

            temperature = Math.round(response.list[1].main.temp);
            icon = response.list[1].weather[0].icon;
            src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon2").src = src;
            document.getElementById("meteo2").innerHTML = temperature;

            temperature = Math.round(response.list[2].main.temp);
            icon = response.list[2].weather[0].icon;
            src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon3").src = src;
            document.getElementById("meteo3").innerHTML = temperature;

            temperature = Math.round(response.list[3].main.temp);
            icon = response.list[3].weather[0].icon;
            src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon4").src = src;
            document.getElementById("meteo4").innerHTML = temperature;

            temperature = Math.round(response.list[4].main.temp);
            icon = response.list[4].weather[0].icon;
            src = "http://openweathermap.org/img/w/" + icon + ".png";
            document.getElementById("icon5").src = src;
            document.getElementById("meteo5").innerHTML = temperature;

        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}