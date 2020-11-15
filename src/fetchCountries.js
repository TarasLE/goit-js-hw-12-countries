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