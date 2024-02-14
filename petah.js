async function main() {
    const re=await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.097780&lon=34.894630&appid=dcf36bad979cb7811d2a97058a2ccbf2');
     const data= await re.json();
     const convertTDegreesCelsius=data.main.temp-273.15;
     let formattedNumberTemp = convertTDegreesCelsius.toFixed(1);
     console.log(data);
     console.log(formattedNumberTemp);
      let mode=data.weather[0].main;
      let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

      
      if(mode==="Clear"){
       mode="נקי";
      }
      else if(mode==="Clouds"){
       mode="מעונן";
      }else if(mode==="Rain"){
       mode="גשם";
      } 
      
      else if(mode==="Thunderstorm"){
       mode="סופת רעמים";
      }  
 
      else if(mode==="Drizzle"){
       mode="טפטוף";
      }
      
      else if(mode==="Snow"){
       mode="שלג";
      }  
        console.log(icon);
        let weatherInMyHomeKarneyShomron=document.querySelector(".black-border");
      weatherInMyHomeKarneyShomron.innerHTML+="<br>"+formattedNumberTemp+ "°C"+"<br>"+mode+"<br>";
      weatherInMyHomeKarneyShomron.innerHTML+="<img src="+icon+">";
 
 
 
 
 
 
  }
 
 

 
 main();
 
 
 





document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    let isMenuVisible = false;
  
    // Function to toggle menu visibility
    function toggleMenu() {
      if (isMenuVisible) {
        menu.style.display = "none";

      } else {
        menu.style.display = "block";
      
      }
      isMenuVisible = !isMenuVisible;
    }
  
    // Toggle menu visibility when menu icon is clicked
    menuIcon.addEventListener("click", function(event) {
      toggleMenu();
      event.stopPropagation(); // Prevent the click event from propagating to the document
    });
  
    // Close menu when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = "none";
        isMenuVisible = false;
      }
    });
  });
  













  async function fetchData() {

    // Check if it has been more than an hour since the last access
    // 3600000 milliseconds = 1 hour
    const re = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=378e96a64c03bf97d24b6afdfbce95c4');
    const data = await re.json();
    console.log(data);
 
 
    const dataDay1=data.list[3].dt_txt.substring(0, 10);
    const tempDay1=(data.list[3].main.temp - 273.15).toFixed(1);
    const weatherDay1=data.list[3].weather[0].main;
    const iconDay1="https://openweathermap.org/img/wn/"+data.list[3].weather[0].icon+"@2x.png";
 
    const dataDay2=data.list[11].dt_txt.substring(0, 10);
    const tempDay2=(data.list[11].main.temp - 273.15).toFixed(1);
    const weatherDay2=data.list[11].weather[0].main;
    const iconDay2="https://openweathermap.org/img/wn/"+data.list[11].weather[0].icon+"@2x.png";
 
    const dataDay3=data.list[19].dt_txt.substring(0, 10);
    const tempDay3=(data.list[19].main.temp - 273.15).toFixed(1);
    const weatherDay3=data.list[19].weather[0].main;
    const iconDay3="https://openweathermap.org/img/wn/"+data.list[19].weather[0].icon+"@2x.png";
 
    const dataDay4=data.list[27].dt_txt.substring(0, 10);
    const tempDay4=(data.list[27].main.temp - 273.15).toFixed(1);
    const weatherDay4=data.list[27].weather[0].main;
    const iconDay4="https://openweathermap.org/img/wn/"+data.list[27].weather[0].icon+"@2x.png";
 
    const dataDay5=data.list[35].dt_txt.substring(0, 10);
    const tempDay5=(data.list[35].main.temp - 273.15).toFixed(1);
    const weatherDay5=data.list[35].weather[0].main;
    const iconDay5="https://openweathermap.org/img/wn/"+data.list[35].weather[0].icon+"@2x.png";
    
 
    
 
 function getMode(mode){
       if (mode === "Clear") {
          return  mode = "נקי";
   } else if (mode === "Clouds") {
    return  mode = "מעונן";
   } else if (mode === "Rain") {
    return  mode = "גשום";
   } else if (mode === "Thunderstorm") {
    return  mode = "סופת רעמים";
   } else if (mode === "Drizzle") {
    return mode = "טפטוף";
   } else if (mode === "Snow") {
      return mode = "שלג";
   }
 }
 
 
 
 // console.log(getMode(weatherDay1));
 
 // for(var  i = 0; i <  4; i++) {
 //    getMode(weatherDay1);
 //    console.log(weatherDay1);
 // }
 
    // console.log(data.list[3].dt_txt);
    // console.log(data.list[3].main.temp);
    // console.log(data.list[3].weather[0].main);
 
 
    // console.log(data.list[11].dt_txt);
    // console.log(data.list[11].main.temp);
    // console.log(data.list[11].weather[0].main);
 
    // console.log(data.list[19].dt_txt);
    // console.log(data.list[19].main.temp);
    // console.log(data.list[19].weather[0].main);
 
    // console.log(data.list[27].dt_txt);
    // console.log(data.list[27].main.temp);
    // console.log(data.list[27].weather[0].main);
 
    // console.log(data.list[35].dt_txt);
    // console.log(data.list[35].main.temp);
    // console.log(data.list[35].weather[0].main);
 
 
 
    const dataTime = document.getElementById("dataTime");
    const tempTime = document.getElementById("tempTime");
 
    dataTime.innerHTML +=
    "<p>"+dataDay1+'</p>'+      
    "<p>"+dataDay2+'</p>'+
    "<p>"+dataDay3+'</p>'+
    "<p>"+dataDay4+'</p>'+
    "<p>"+dataDay5+'</p>'; 
  
 
    tempTime.innerHTML +=
    "<p>"+tempDay1+" ° C"+ "<br>"+getMode(weatherDay1)+"<img src="+iconDay1+">"+'</p>'+
     "<p>"+tempDay2+" ° C"+ "<br>"+getMode(weatherDay2)+"<img src="+iconDay2+">"+'</p>'+
     "<p>"+tempDay3+" ° C"+ "<br>"+getMode(weatherDay3)+"<img src="+iconDay3+">"+'</p>'+
     "<p>"+tempDay4+" ° C"+ "<br>"+getMode(weatherDay4)+"<img src="+iconDay4+">"+'</p>'+
     "<p>"+tempDay5+" ° C"+ "<br>"+getMode(weatherDay5)+"<img src="+iconDay5+">"+'</p>';
    
 
 }
 fetchData();