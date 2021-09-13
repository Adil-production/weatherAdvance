function ok(){
    document.querySelector("#alert").style.display = "none";
    document.querySelector("#main").style.display = "block";
    document.querySelector("#main2").style.display = "block";
    var city =  document.querySelector("#city").value; 
    localStorage.setItem("city" , city)
    var API = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=77519a1e4cafcc5abe44929d48fcaa31&units=metric';
    document.querySelector("#main2").style.display = "block";

    getData(API)
    
    async function getData(url) {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        try{

        
        document.querySelector("#main #temp").innerHTML =  +  data.main.temp + "°" + " " + data.weather[0].main ;
        document.querySelector("#main2 #humidity").innerHTML = "humidity : "  +  data.main.humidity;
        document.querySelector("#main2 #description").innerHTML =  "description  :  " +  data.weather[0].description ;
        document.querySelector("#main2 #temp_max").innerHTML = "Temperature max : "  +  data.main.temp_max + "°";
        document.querySelector("#main2 #temp_min").innerHTML = "Temperature min : "  +  data.main.temp_min + "°";
        document.querySelector("#main2 #windDeg").innerHTML = "wind degree : "  +  data.wind.deg + "°";
        document.querySelector("#main2 #windSpeed").innerHTML = "wind speed : "  +  data.wind.speed + "°";
        document.querySelector("#main2 #pressure").innerHTML = "pressure :  " +  data.main.pressure ;
        }catch{
            document.querySelector("#alert").style.display = "block";
            document.querySelector("#main").style.display = "none";
            document.querySelector("#main2").style.display = "none";
        }
    }
    
   






}
function get(){

    document.querySelector("#city").value = localStorage.getItem("city")


}




    






