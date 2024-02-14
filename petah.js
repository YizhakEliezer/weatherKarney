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
  