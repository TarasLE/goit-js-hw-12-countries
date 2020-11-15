import './css/styles.css';
import 'lodash'
import countriesListTpl from './templates/countries-list.hbs'
import desiranbleCountryTpl from './templates/desirableCountry.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import fetchCountries from './js/fetchCountries'
import { refs } from './js/refs'
import { error } from './js/variables'

refs.searchForm.addEventListener('input', _.debounce(onSearch,500))

let searchQuery = '';

function onSearch(event) {
    event.preventDefault();
    clearCountriesList()

    searchQuery = event.target.value.trim()

    if (searchQuery.length === 0) {
        return
    }else{

    return fetchCountries(searchQuery).then(findDesirableCountry).catch(error => {
             console.log('Error fetching data');
    })
        }
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


