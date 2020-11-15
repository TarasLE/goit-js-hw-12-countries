export default function fetchCountries(event) {
    event.preventDefault();
    clearCountriesList()

    searchQuery = event.target.value.trim()

    const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
    return fetch(url, option).then(response => response.json()).
        then(data => data).then(findDesirableCountry).catch(error => {
             console.log('Error fetching data');
        })
}

function appendCountriesList(countries) {
    refs.countriesContainer.insertAdjacentHTML("beforeend",countriesListTpl(countries))
}

function renderDesirableCountry(country) {
    refs.countriesContainer.insertAdjacentHTML("beforeend",desiranbleCountryTpl(country))
}

function clearCountriesList() {
    refs.countriesContainer.innerHTML = '';
}

function findDesirableCountry(data) {
    
    if (data.length > 10) {
            error({
                   delay: 1000,
                    text: 'Too many matches found. Please try a more specific query',
                    type: 'info'
            })
       
        
            }
            else if (data.length === 1) {
                renderDesirableCountry(data);
            }
    else if (data.length === undefined) {
           error({
                delay: 1000,
                text: 'Incorrect name of the counrty. Please check and try again',
                type: 'info'
                });
                            
            }
            else {
               appendCountriesList(data);
            }
}

