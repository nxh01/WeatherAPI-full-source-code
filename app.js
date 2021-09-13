// json objekt i javascriptit qe na mundson me shfaq me marr te dhana me i ru ne database etj

function Search() {
var emri = document.getElementById('qyteti').value
var qyteti = document.getElementById('Emri')
var temp = document.getElementById('temperatura')

const apikey = '5bfe7dfb63643534add03d8a6fd4ab5d'
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + emri + '&appid=' + apikey)
.then(response => response.json()) // JSON - objekt i javascript
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var tempCelsius = tempValue - 273.15
        tempCelsius = parseInt(tempCelsius)
        qyteti.innerHTML = nameValue
        temp.innerHTML = tempCelsius + '°C'
    });
    
}
