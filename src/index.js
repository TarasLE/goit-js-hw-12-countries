// import './styles.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js'
import '../node_modules/lodash/lodash'

const refs = {
    searchForm: document.querySelector('.js-search-form'), 
    countriesContainer: document.querySelector('.js-countries-container')
}
// var debounce = require('lodash.debounce');
refs.searchForm.addEventListener('input', _.debounce(onSearch,500))
// console.log(refs.searchForm);


function onSearch(event) {
    event.preventDefault();

    const searchQuery = event.target.value
    console.log(searchQuery);

    const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    fetch(url, option).then(response => response.json()).then(console.log)
    // debounce(500)
}

// console.log('test1');

// const url = 'https://restcountries.eu/rest/v2/name/Colombia'
// const option = {
//         headers: {}
//     }
// fetch(url, option).then(response => response.json()).then(console.log)