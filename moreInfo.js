const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get(`id`)
const card = document.querySelector(".countries")

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

        card.innerHTML += ` <div class="country">
                           <img src=${ele.img.png}>
                           <p>${ele.name.common}</p>
                           <p>Native name: ${ele.native}
                           <p>Population: ${ele.population}</p>
                           <p>Region: ${ele.region}</p>
                           <p>Subregio: ${ele.subregion}</p>
                           <p>Capital: ${ele.capital}</p>
                           <p>Currencies: ${value[0].name}</p>
                           <p>Language(s): ${languagesValue[0]}</p>
                             <p>Border Countries: ${ele.border}</p>
                           <a href="./index.html">
                           <button id="button">Back</button></div></a>`
                           
                        
                          
    });
}

dataCountry()    
    
  
