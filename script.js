function search(){
    var city =  document.querySelector("#city").value; 
    localStorage.setItem("city" , city)
    var API = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=77519a1e4cafcc5abe44929d48fcaa31&units=metric';
    getData(API)
    
    async function getData(url) {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        try{
            document.getElementById("place").innerHTML = document.getElementById("city").value;
            document.querySelector("#temp").innerHTML =  data.main.temp + "°" + " <strong style='color:gray;font-size:30px'>" + data.weather[0].main + "</strong>" ;
            document.querySelector("#humidity").innerHTML =data.main.humidity;
            document.querySelector("#description").innerHTML = data.weather[0].description ;
            document.querySelector("#temp_max").innerHTML =  data.main.temp_max + "°";
            document.querySelector("#temp_min").innerHTML =  data.main.temp_min + "°";
            document.querySelector("#windDeg").innerHTML = data.wind.deg;
            document.querySelector("#windSpeed").innerHTML =  data.wind.speed ;
            document.querySelector("#pressure").innerHTML =   data.main.pressure ;
            document.getElementById("city").value = "";
        } catch{
            // error
        }
    }
}

function get(){
    var city = localStorage.getItem("city")
    if(city){
        // exist
        document.getElementById("city").value = city;
        document.getElementById("btn").click();
    } else{
        document.getElementById("city").value = "New york";
        document.getElementById("btn").click();
    }
    
   // return values after refresh


}




    






