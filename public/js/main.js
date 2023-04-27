const submitButton = document.getElementById('submitButton')
let cityName = document.getElementById('cityName')
let city_name = document.getElementById('city_name')
let temp = document.getElementById('temp')
let status = document.getElementById('status')
const getinfo = async (e) =>{
    e.preventDefault();
  let cityval = cityName.value
   
    if(cityval ===''){
        cityval= 'noida'
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=afd159e31ee1ec493690e5b84b9b6fc4`
        const response = await fetch(url)
        const data = await response.json()
        arrData = [data]
        temp.innerText = arrData[0].main.temp
        city_name.innerText = arrData[0].name
        let cloud = arrData[0].weather[0].main
        console.log(cloud)
        let temp_status = document.getElementById('temp_status')
        if(cloud =="Clouds"){
            temp_status.innerHTML = "<i class='fa-solid fa-cloud'></i>"
        }else if(cloud =="Clear"){
            temp_status.innerHTML = "<i class='fa-solid fa-sun'></i>"
        }else if(cloud =='Rain'){
            temp_status.innerHtml = "<i class='fa-solid fa-cloud-rain'></i>"
        }else{
            temp_status.innerHtml = "<i class='fa-solid fa-sun'></i>"
        }
        }catch{
            city_name.innerText = 'plz enter city name properly '
        }
    }
}
submitButton.addEventListener('click',getinfo)


//https://api.openweathermap.org/data/2.5/weather?q=noida&units=metric&appid=afd159e31ee1ec493690e5b84b9b6fc4