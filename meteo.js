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

            // Efface les tableaux à l'initiation de la page
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

// Permet de récupérer, par la touche entrée la fonction qui affiche les valeurs par défauts
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

            // Par défaut 1er jour est coché, et seul le table_1_j est affiché
            document.forms["RadioButton"]["1jourRadio"].checked=true;
            document.getElementById("table_1jour").style.display = "block";
            document.getElementById("table_2jour").style.display  = "none";
            document.getElementById("table_3jour").style.display  = "none";
            document.getElementById("table_4jour").style.display  = "none";
            document.getElementById("table_5jour").style.display  = "none";
            
            // Par défaut la pression, l'humidité et la vitesse du vent est décochée et les données effacées
            if(document.getElementById("PressureCheck").checked){
                document.getElementById("PressureCheck").checked=false;}
                for (let i = 0;i < 5; i++){
                    document.getElementById("pressure" + i).innerHTML = "";
                }
            if(document.getElementById("HumidityCheck").checked){
                document.getElementById("HumidityCheck").checked=false;}
                for (let i = 0;i < 5; i++){
                    document.getElementById("humidity" + i).innerHTML = "";
                }
            if(document.getElementById("WindSpeedCheck").checked){
                document.getElementById("WindSpeedCheck").checked=false;}
                for (let i = 0;i < 5; i++){
                    document.getElementById("windspeed" + i).innerHTML = "";
                }
            // Toutes les températures et les icones sont récupérées, mais seuls les premières sont affichées par défaut
            for (let i = 0;i < 5;i++) {
                temperature=Math.round(response.list[i*8].main.temp);
                document.getElementById("temperature" + i).innerHTML = temperature;
                icon = response.list[i*8].weather[0].icon;
                src = "http://openweathermap.org/img/w/" + icon + ".png";
                document.getElementById("icon" + i).src = src;
                
            }
            
        }
    }
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

/* ensemble des fonctions récupérant des valeurs supplémentaires : pression, humidité, vitesse du vent */

function get_pressure() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
           
            var checkBox = document.getElementById("PressureCheck");
            var response = JSON.parse(this.responseText);
            var pressure;

            if (checkBox.checked == true){
                for (let i=0; i<5; i++){
                    pressure=(response.list[i*8].main.pressure);
                    document.getElementById("pressure" + i).innerHTML = pressure;
                }
            } else {
                for (let i=0; i<5; i++){
                    document.getElementById("pressure" + i).innerHTML = "";
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

            if (checkBox.checked == true){
                for (let i=0; i<5; i++){
                    humidity=(response.list[i*8].main.humidity);
                    document.getElementById("humidity" + i).innerHTML = humidity;
                }
            } else {
                for (let i=0; i<5; i++){
                    document.getElementById("humidity" + i).innerHTML = "";
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

            if (checkBox.checked == true){
                for (let i=0; i<5; i++){
                    windspeed=(response.list[i*8].wind.speed);
                    document.getElementById("windspeed" + i).innerHTML = windspeed;
                }
            } else {
                for (let i=0; i<5; i++){
                    document.getElementById("windspeed" + i).innerHTML = "";
                }
            }
        }
    }
    xhr.open("GET", get_url(), true);
    xhr.send();
}

/* la fonction unique qui permet d'afficher les prévisions suivant le nombre de jour que l'on souhaite */

function get_Njour() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();
           
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

