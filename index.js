function updateTime() {
  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");
  let pretoriaTime = moment().tz("Africa/Johannesburg");

  pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM Do YYYY");
  pretoriaTimeElement.innerHTML = pretoriaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //second city//

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");

  bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //third city//
   let turkeyElement = document.querySelector("#turkey");
   let turkeyDateElement = turkeyElement.querySelector(".date");
   let turkeyTimeElement = turkeyElement.querySelector(".time");
   let turkeyTime = moment().tz("Turkey");

   turkeyDateElement.innerHTML = turkeyTime.format("MMMM Do YYYY");
   turkeyTimeElement.innerHTML = turkeyTime.format(
     "h:mm:ss [<small>]A[</small>]"
   );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  cityName = cityTimeZone.replace("_"," ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML =`

 <div class="city">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
`;
}
updateTime();
setInterval(updateTime, 1000);

let cityOptions = document.querySelector("#city");
cityOptions.addEventListener("change", updateCity);
