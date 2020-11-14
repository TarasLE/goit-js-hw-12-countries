// import './styles.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js'
import '../node_modules/lodash/lodash'
import countriesListTpl from './templates/countries-list.hbs'
import desiranbleCountryTpl from './templates/desirableCountry.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const { error } = require('@pnotify/core');
const refs = {
    searchForm: document.querySelector('.js-search-form'), 
    countriesContainer: document.querySelector('.js-countries-container')
}
// var debounce = require('lodash.debounce');
refs.searchForm.addEventListener('input', _.debounce(onSearch,500))
// console.log(refs.searchForm);

let searchQuery = '';
function onSearch(event) {
    event.preventDefault();
    clearCountriesList()

    searchQuery = event.target.value
    console.log(searchQuery);

    const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    // fetch(url, option).then(response => response.json()).then(console.log)
    return fetch(url, option).then(response => response.json()).
        then(data => {
            console.log(data.length);
            if (data.length > 10) {
                return error({
                    text: 'Too many matches found. Please try a more specific query',
                    type: 'info'
                })
            }
            else if (data.length === 1) { renderDesirableCountry(data); }
            else {
                appendCountriesList(data);
                // error = null;
            }
        }).
        then(appendCountriesList)
    // debounce(500)
}

function appendCountriesList(countries) {
    refs.countriesContainer.insertAdjacentHTML("beforeend",countriesListTpl(countries))
}

function renderDesirableCountry(country) {
    refs.countriesContainer.insertAdjacentHTML("beforeend",desiranbleCountryTpl(country))
}

function clearCountriesList() {
    refs.countriesContainer.innerHTML = ''
}


// console.log('test1');

// const url = 'https://restcountries.eu/rest/v2/name/Colombia'
// const option = {
//         headers: {}
//     }
// fetch(url, option).then(response => response.json()).then(console.log)
console.log(searchQuery);