export default function fetchCountries(searchQuery) {
const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
    return fetch(url, option)
}