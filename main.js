async function main() {
    const re=await fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.171588&lon=35.110583&appid=dcf36bad979cb7811d2a97058a2ccbf2');
    const data= await re.json();
    const convertTDegreesCelsius=data.main.temp-273.15;
    let formattedNumberTemp = convertTDegreesCelsius.toFixed(1);
    console.log(formattedNumberTemp);
     let weatherInMyHomeKarneyShomron=document.querySelector(".black-border");
     weatherInMyHomeKarneyShomron.innerHTML+="<br>"+formattedNumberTemp+ "°C";
//    const ree=await fetch('https://api.openweathermap.org/data/2.5/weather?id=833&lang=IR&appid=dcf36bad979cb7811d2a97058a2ccbf2');
//    const cityList=await fetch('city.list.json');
//    const object=await cityList.json();
// let ArrayList = [];

// let selectElement = document.getElementById("your-select-element-id"); // Assuming your select element has an id attribute
// for (let i = 0; i < object.length; i++) {
//    ArrayList.push("https://api.openweathermap.org/data/2.5/weather?id=" + object[i].id + "&lang=" + object[i].country + "&appid=dcf36bad979cb7811d2a97058a2ccbf2");
//    const dd = await fetch(ArrayList[i]);
//    const cc = await dd.json();
//    const c=cc.main.temp-273.15;
//    let formattedNumber = c.toFixed(0); // Assuming you want to show temperature
//    let option = document.createElement("option");
//    option.text = cc.name + "   " + formattedNumber + "°C"; // Assuming you want to display city name and temperature
//    option.value = i; // Assuming you want to use the index as the value
//    selectElement.add(option);
// }





 }




main();
