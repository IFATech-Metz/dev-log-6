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

            document.getElementById("table_1jour").style.display  = "none";
            document.getElementById("table_2jour").style.display  = "none";
            document.getElementById("table_3jour").style.display  = "none";
            document.getElementById("table_4jour").style.display  = "none";
            document.getElementById("table_5jour").style.display  = "none";

        }
    }
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function handleKeyPress(event) {
    var key = event.key;
    if(key == "Enter")
    { get_val_default(); }
}

function get_val_default() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            var temperature;
            var icon;
            var src;
            var pas; 
            var jour=1;

            document.forms["RadioButton"]["1jourRadio"].checked=true;
            document.getElementById("table_1jour").style.display = "block";
            document.getElementById("table_2jour").style.display  = "none";
            document.getElementById("table_3jour").style.display  = "none";
            document.getElementById("table_4jour").style.display  = "none";
            document.getElementById("table_5jour").style.display  = "none";
            
            if(document.getElementById("PressureCheck").checked){
                document.getElementById("PressureCheck").checked=false;}
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("pressure" + pas).innerHTML = "";
                }
            if(document.getElementById("HumidityCheck").checked){
                document.getElementById("HumidityCheck").checked=false;}
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("humidity" + pas).innerHTML = "";
                }
            if(document.getElementById("WindSpeedCheck").checked){
                document.getElementById("WindSpeedCheck").checked=false;}
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("windspeed" + pas).innerHTML = "";
                }
            
            for (pas = 1;pas <= 41; pas = 8) {
                temperature=Math.round(response.list[pas-1].main.temp);
                document.getElementById("temperature" + jour).innerHTML = temperature;
                icon = response.list[pas-1].weather[0].icon;
                src = "http://openweathermap.org/img/w/" + icon + ".png";
                document.getElementById("icon" + jour).src = src;
                jour++;

            }
        }
    }
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}
*/


<<<<<<< HEAD
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
=======
/* ensemble des fonctions récupérant des valeurs supplémentaires : pression, humidité, vitesse du vent */

function get_pressure() {
>>>>>>> 0be4ea1026fae8a8187c50ced2b260ff80ee7ff6
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
           
            var checkBox = document.getElementById("PressureCheck");
            var response = JSON.parse(this.responseText);
            var pressure;

            if (checkBox.checked == true){
                var pas;
                for (pas = 1;pas < 6; pas++){
                    pressure=(response.list[pas-1].main.pressure);
                    document.getElementById("pressure" + pas).innerHTML = pressure;
                }
            } else {
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("pressure" + pas).innerHTML = "";
                }
            }
        }
    }
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function get_humidity() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
           
            var checkBox = document.getElementById("HumidityCheck");
            var response = JSON.parse(this.responseText);
            var humidity;
            var pas;

            if (checkBox.checked == true){
                for (pas = 1;pas < 6; pas++){
                    humidity=(response.list[pas-1].main.humidity);
                    document.getElementById("humidity" + pas).innerHTML = humidity;
                }
            } else {
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("humidity" + pas).innerHTML = "";
                }
            }
        }
    }
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function get_windspeed() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
           
            var checkBox = document.getElementById("WindSpeedCheck");
            var response = JSON.parse(this.responseText);
            var windspeed;
            var pas;

            if (checkBox.checked == true){
                for (pas = 1;pas < 6; pas++){
                    windspeed=(response.list[pas-1].wind.speed);
                    document.getElementById("windspeed" + pas).innerHTML = windspeed;
                }
            } else {
                for (pas = 1;pas < 6; pas++){
                    document.getElementById("windspeed" + pas).innerHTML = "";
                }
            }
        }
    }
<<<<<<< HEAD
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}
*/

/*function get_pressure() {
=======
    xhr.open("GET", get_url(), true);
    xhr.send();
}

/* la fonction unique qui permet d'afficher les prévisions suivant le nombre de jour que l'on souhaite */

function get_Njour() {
>>>>>>> 0be4ea1026fae8a8187c50ced2b260ff80ee7ff6
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
<<<<<<< HEAD
            
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
=======
           
            if(document.RadioButton.Njour[0].checked){
                document.getElementById("table_1jour").style.display = "block";
                document.getElementById("table_2jour").style.display = "none";
                document.getElementById("table_3jour").style.display = "none";
                document.getElementById("table_4jour").style.display = "none";
                document.getElementById("table_5jour").style.display = "none";
            }
            if(document.RadioButton.Njour[1].checked){
                document.getElementById("table_1jour").style.display = "block";
                document.getElementById("table_2jour").style.display = "block";
                document.getElementById("table_3jour").style.display = "none";
                document.getElementById("table_4jour").style.display = "none";
                document.getElementById("table_5jour").style.display = "none";
            }
            if(document.RadioButton.Njour[2].checked){
                document.getElementById("table_1jour").style.display = "block";
                document.getElementById("table_2jour").style.display = "block";
                document.getElementById("table_3jour").style.display = "block";
                document.getElementById("table_4jour").style.display = "none";
                document.getElementById("table_5jour").style.display = "none";
            }
            if(document.RadioButton.Njour[3].checked){
                document.getElementById("table_1jour").style.display = "block";
                document.getElementById("table_2jour").style.display = "block";
                document.getElementById("table_3jour").style.display = "block";
                document.getElementById("table_4jour").style.display = "block";
                document.getElementById("table_5jour").style.display = "none";
            }
            if(document.RadioButton.Njour[4].checked){
                document.getElementById("table_1jour").style.display = "block";
                document.getElementById("table_2jour").style.display = "block";
                document.getElementById("table_3jour").style.display = "block";
                document.getElementById("table_4jour").style.display = "block";
                document.getElementById("table_5jour").style.display = "block";
            }
        }
    }
    xhr.open("GET", get_url(), true);
    xhr.send();
}

>>>>>>> 0be4ea1026fae8a8187c50ced2b260ff80ee7ff6
