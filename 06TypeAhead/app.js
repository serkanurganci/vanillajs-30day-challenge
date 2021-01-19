const endpoint =
  "https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json";

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //here we need to figure out if the city or state matches what was searched.

    const regex = new RegExp(wordToMatch, "gi");

    return place.name.match(regex) || place.region.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  if (this.value === "") {
    suggestions.innerHTML = `
        <li>Filter for a city</li>
        <li>or a region</li>
        `;
  } else {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.name.replace(
          regex,
          `<span class="h1">${this.value}</span>`
        );
        const stateName = place.region.replace(
          regex,
          `<span class="h1">${this.value}</span>`
        );
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(
                  place.population
                )}</span>
            </li>
        `;
      })
      .join("");
    suggestions.innerHTML = html;
  }
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
