// Get btn from HTML
const btn = document.getElementById("btn");

// Creates and shows list of 15 cities from search
function showFifteenCities(data) {
  const cities = Object.values(data.data.slice(0, 15));
  console.log(data);
  console.log(cities);

  // Render 'p' elements and fill it with values
  const divList = document.getElementById("list");
  for (i = 0; i < cities.length; i++) {
    const city = document.createElement("p");
    const cityName = document.createTextNode(cities[i]);
    city.appendChild(cityName);
    divList.appendChild(city);
  }
}

// Get cities by searched country name
function getCities() {
  const input = document.getElementById("input").value;
  console.log(input);
  fetch("https://countriesnow.space/api/v0.1/countries/cities", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      country: `${input}`,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => showFifteenCities(data))
    .then()
    .catch(
      (error) =>
        console.log(error) + alert("Country does not exist! Please try again.")
    );
}

btn.addEventListener("click", getCities);
