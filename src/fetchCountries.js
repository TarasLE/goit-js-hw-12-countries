export default function fetchCountries(searchQuery) {
const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
    return fetch(url, option).then(response => response.json()).
        then(data => data).then(findDesirableCountry).catch(error => {
             console.log('Error fetching data');
        })
}