const dataLink = "https://restcountries.com/v3.1/all"
const card = document.querySelector(".countries")

const countries = async (url) => {
    const data = await fetch(url)
    const response = await data.json()

    const countriesInfo = response.map(ele => {

        return { img: ele.flags, name: ele.name, population: ele.population, region: ele.region, capital: ele.capital }

    })
   
    countriesInfo.forEach(ele => {

        card.innerHTML += ` <div class="country">
                            <img src=${ele.img.png}>
                             <p>${ele.name.common}</p>
                             <p>Population: ${ele.population}</p>
                             <p>Region: ${ele.region}</p>
                             <p>Capital: ${ele.capital}</p>
                             <a href="./index2.html?id=${ele.name.common}">
                             <button id="button">More</button></div></a>`

    });

}


countries(dataLink)