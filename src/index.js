import './styles.css';
import '../node_modules/lodash/lodash'
import countriesListTpl from './templates/countries-list.hbs'
import desiranbleCountryTpl from './templates/desirableCountry.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import fetchCountries from './fetchCountries'



const { error } = require('@pnotify/core');
const refs = {
    searchForm: document.querySelector('.js-search-form'), 
    countriesContainer: document.querySelector('.js-countries-container')
}

refs.searchForm.addEventListener('input', _.debounce(fetchCountries,500))
let searchQuery = '';
 


