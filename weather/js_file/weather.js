var d = new Date();
var d2;
//.getFullYear() -> 현재 년도
//getmonth() => 월 0~11
// date -> 일
// day 0~ 6 요일
// new Date
var a= new Vue({
    el:"#WeatherData",
    data : {
        weatherlist: [
            {year: d.getFullYear() , month: d.getMonth(), date: d.getDate(), day:d.getDay(), weather: "cloudy",},



        ]

    }
})
if(d.getDate() == 1) {
    d2 = new Date(d.getFullYear(),d.getMonth(),0);
    a.weatherlist.push(
        {year: d2.getFullYear(),
        month: d2.getMonth(),
        date: d2.getDate(),
        day: d2.getDay(),
        weather: "cloudy",})
}

