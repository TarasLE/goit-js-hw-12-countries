import './styles.css';
import '../node_modules/lodash/lodash'
import countriesListTpl from './templates/countries-list.hbs'
import desiranbleCountryTpl from './templates/desirableCountry.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
// import { clearImmediate } from 'core-js';
import  '@pnotify/core/dist/PNotify'


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

    searchQuery = event.target.value.trim()
    console.log(searchQuery);

    const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
// if (searchQuery !=null) {
    return fetch(url, option).then(response => response.json()).
        then(data => {
            console.log(data.length);
            if (data.length > 10) {
               console.log(data);
                error({
                   delay: 800,
                    text: 'Too many matches found. Please try a more specific query',
                    type: 'info'
                })
                 clearCountriesList()
            }
            else if (data.length === 1) {
                renderDesirableCountry(data);
            }
            else if (data.length === 0 && searchQuery != null) {
                clearCountriesList()
                 error.remove();
                return
            }
            else {
                // error.notice.close(immediate)
                // error.close(immediate);
                appendCountriesList(data);
                // error = null;
            }
        }).catch(error =>{console.log('input error');})}
      
// }

function appendCountriesList(countries) {
    refs.countriesContainer.insertAdjacentHTML("beforeend",countriesListTpl(countries))
}

function renderDesirableCountry(country) {
    refs.countriesContainer.insertAdjacentHTML("beforeend",desiranbleCountryTpl(country))
}

function clearCountriesList() {
    refs.countriesContainer.innerHTML = '';
}


