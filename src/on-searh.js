export default function onSearch(event) {
    event.preventDefault();

    const searchQuery = event.target.value
    console.log(searchQuery);

    const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    fetch(url, option).then(response => response.json()).then(console.log)
 
}