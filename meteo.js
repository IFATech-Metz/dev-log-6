var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?
// date=1527811200&opacity=0.9&fill_bound=true&appid={api_key}

var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city = "Metz";
var appid = "ff7df6d0fadc12d3893f4cab80f6aee5";
var units = "metric";

let forcastArray = [];

function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
}

/*
function init_page() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var response = JSON.parse(this.responseText);
            var temperature;
            var icon;
            var src;
            var pas;
            for (pas = 1; pas < 6; pas++) {
                temperature=Math.round(response.list[pas-1].main.temp);
                document.getElementById("meteo" + pas).innerHTML = temperature;
                icon = response.list[pas - 1].weather[0].icon;
                src = "http://openweathermap.org/img/w/" + icon + ".png";
                switch (pas){
                    case 1 : document.getElementById("icon1").src = src;
                    case 2 : document.getElementById("icon2").src = src;
                    case 3 : document.getElementById("icon3").src = src;
                    case 4 : document.getElementById("icon4").src = src;
                    case 5 : document.getElementById("icon5").src = src;
                }
            }
        }
    }
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}
*/


function handleKeyPress(e)
{
    var key = e.key;
    if(key == "Enter"){
        /*get_temperature();
        get_pressure();*/
        requete(ville);
    }
}  


// handle key -> xhr
// xhr ->  objet - > get temp
// get temp -> get pression

function requete(ville){
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parsingData(this.responseText);
        }
        else parsingData(false);
    }
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function parsingData(dataJ){
    let parsedJ = (dataJ ? JSON.parse(dataJ) : false);
    if(parsedJ){
        for(let i = 0; i < 5; i++){
            let objetData = {
                "pression": "",
                "temperature": "",
                "humidite": "",
                "windspeed": "", 
            };            
            let n = i*8;
            objetData.pression = parsedJ.list[n].main.pressure;
            objetData.temperature = parsedJ.list[n].main.temp;
            objetData.humidite = parsedJ.list[n].main.humidity;
            objetData.windspeed = parsedJ.list[n].wind.speed;
            forcastArray = [...forcastArray, objetData]
        }
    }
    //console.log(forcastArray);
}

function getData(ville){
    requete(ville);
}

/*function get_temperature() {
    console.log("hello");
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
            var temperature;
            var src;
            var pas;
            for (pas = 1;pas < 6; pas++){
                temperature=Math.round(response.list[pas-1].main.temp);
                document.getElementById("meteo" + pas).innerHTML = temperature;
                icon = response.list[pas - 1].weather[0].icon;
                src = "http://openweathermap.org/img/w/" + icon + ".png";
                switch (pas){
                    case 1 : document.getElementById("icon1").src = src;
                    case 2 : document.getElementById("icon2").src = src;
                    case 3 : document.getElementById("icon3").src = src;
                    case 4 : document.getElementById("icon4").src = src;
                    case 5 : document.getElementById("icon5").src = src;
                }
            }
        }
    }
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}
*/

/*function get_pressure() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
            
            /*if(document.getElementById("url_visibility").checked){
                document.getElementById("url").style.display = "block";
            }
            else{
                document.getElementById("url").style.display = "none";
            }*/
            //if (document.getElementById("pression").checked){
                //var response = JSON.parse(this.responseText);
                //var pressure;
                //var pas;
                //for (pas = 1;pas < 6; pas++){
                    //pressure=response.list[pas-1].main.pressure;
                    //document.getElementById("pressure" + pas).innerHTML = pressure;
                    //document.getElementById("pressure" + pas).style.display = block;
                //}
            //}
            /*else{
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("pressure" + pas).style.display = "none";
                }
            }*/
            
        //}
    //}

    //xhr.open("GET", get_url(), true);
    //xhr.send();
//}