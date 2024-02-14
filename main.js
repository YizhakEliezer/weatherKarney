async function main() {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(async function(position) {
            // Extract latitude and longitude from the position object
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Construct API URL with latitude, longitude, and API key
            const apiKey = 'dcf36bad979cb7811d2a97058a2ccbf2';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

            try {
                // Fetch weather data
                const response = await fetch(apiUrl);
                const data = await response.json();

                const convertTDegreesCelsius = data.main.temp - 273.15;
                const formattedNumberTemp = convertTDegreesCelsius.toFixed(1);
                let mode = data.weather[0].main;
                let icon="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

                // Handle weather conditions
                if (mode === "Clear") {
                    mode = "נקי";
                } else if (mode === "Clouds") {
                    mode = "מעונן";
                } else if (mode === "Rain") {
                    mode = "גשום";
                } else if (mode === "Thunderstorm") {
                    mode = "סופת רעמים";
                } else if (mode === "Drizzle") {
                    mode = "טפטוף";
                } else if (mode === "Snow") {
                    mode = "שלג";
                }

                // Log data to console
                console.log(data);
                console.log(formattedNumberTemp);
                console.log(icon);

                // Display weather information on the webpage
                let weatherInMyHomeKarneyShomron=document.querySelector(".black-border");
                weatherInMyHomeKarneyShomron.innerHTML+="<br>"+formattedNumberTemp+ "°C"+"<br>"+mode+"<br>";
                weatherInMyHomeKarneyShomron.innerHTML+="<img src="+icon+">";
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }, function(error) {
            // Handle errors when retrieving the location
            console.error('Error getting location:', error);
        });
    } else {
        // Geolocation is not supported by this browser
        console.log('Geolocation is not supported by this browser.');
    }
  
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
  