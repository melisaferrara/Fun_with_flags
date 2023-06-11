const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get(`id`)
const nombre =urlParams.get(`name`)
const card = document.querySelector(".countriesInfo")

const dataCountry = async () => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    const response = await data.json();
 
    const countriesInfo = response.map(ele => {

        return { img: ele.flags, name: ele.name, population: ele.population, region: ele.region, capital: ele.capital, native: ele.name.official,
         subregion: ele.subregion, coin: ele.currencies, languages: ele.languages, border: ele.borders}

})
    
    countriesInfo.forEach(ele => {
         const currencies = Object.values(countriesInfo)
         const nameCoin = currencies[0].coin
         const value = Object.values(nameCoin)

         const languages = currencies[0].languages
         const languagesValue = Object.values(languages)

         const borderCountries = ele.border && ele.border.length > 0 ? ele.border.join(', ') : 'No bordering countries';

        card.innerHTML += ` <div class="countryInfo">
                           <img src=${ele.img.png}>
                           <div class="info">
                           <h3>${ele.name.common}</h3>
                           <p>Native name: ${ele.native}
                           <p>Population: ${ele.population}</p>
                           <p>Region: ${ele.region}</p>
                           <p>Subregion: ${ele.subregion}</p>
                           <p>Capital: ${ele.capital}</p></div>
                           <div class="info2">
                           <p>Currencies: ${value[0].name}</p>
                           <p>Language(s): ${languagesValue[0]}</p>
                             <p>Border Countries: ${borderCountries}</p>
                           <a href="./index.html">
                           <button id="button">Back</button></a></div></div>`
      
                          
    });
}

dataCountry()    
    
  
