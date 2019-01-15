var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city = "Metz";
var appid = "f5e810531af1756846022c6f387acf25";

function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "appid=" + appid;
}

function init_page() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("meteo").innerHTML = this.responseText;
        }
    };
    
    xhr.open("GET", get_url(), true)
    xhr.send()
}