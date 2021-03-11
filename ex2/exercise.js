
/*fetch(`"https://api.openweathermap.org/data/2.5/weather?q=${joshua}&appid=8b628180040588aedfc183bfb445e9aa"`)
    .then(response => response.json())
    .then(data => console.log(data))*/

var joshua = "London"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${joshua}&appid=8b628180040588aedfc183bfb445e9aa`)
    .then(response => response.json())
    .then(data => {
        var body = document.querySelector("body")
        var div = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        body.appendChild(div)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        console.log(data);
        console.log(data.main)
        console.log(data.weather[0]);
    }); 

