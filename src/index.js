import './styles.css';

const refs = {
    searchForm: document.querySelector('js-search-form'),
    countriesContainer: document.querySelector('js-countries-container')
}

refs.searchForm.addEventListener('change', onSearch)


function onSearch(event) {
    event.preventDefault();

    const searchQuery = event.currentTarget.element.query.value

    const option = {
        headers: {}
    }

    const url = 'https://restcountries.eu/rest/v2/name'

    fetch(url, option).then(response => response.json()).then(console.log)
    
}