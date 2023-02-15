let temperature = document.getElementById('temperature');
let timeanddate = document.getElementById('time&date')
let icon = document.getElementById('icon')
let type = document.getElementById('type')
let place = document.getElementById('place')
function searchdata() {
    let input = document.getElementById('inputname').value
    fetchdata(input)
}
let fetchdata = async (city) => {

    let url = `https://api.weatherapi.com/v1/current.json?key=8be593ce52b04f17a5272142230402&q=${city}&aqi=no`
    let res = await fetch(url);
    let data = await res.json();
    let nameis = data.location.name
    let localtime = data.location.localtime
    let temperature = data.current.temp_c
    let icon = data.current.condition.icon
    let type =data.current.condition.text
    update(nameis, localtime, temperature, icon,type);
}
function dateextracter(e){
let data = new Date(e);
}
function update(na, localtime, temp, ic,typ) {
    temperature.innerText = `${temp}C`;
    timeanddate.innerText = localtime.split(" ")[1];
    dateextracter(localtime.split(" ")[0])
    place.innerText = na;
    type.innerText=typ
    // icon.setAttribute(src,ic)
}