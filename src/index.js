import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { renderLiEl, renderDivEl } from './js/renderHtmlList';
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(renderList, DEBOUNCE_DELAY));

function renderList(e) {
  const userReqest = e.target.value.trim();
  if (userReqest === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }
  fetchCountries(userReqest)
    .then(countries => {
      if (countries.length > 10) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return Notify.info('Too many matches found. Please enter a more specific name.');
      }

      if (countries.length >= 2 && countries.length <= 10) {
        const list = countries.map(country => renderLiEl(country));
        countryList.innerHTML = list.join(' ');
        return (countryInfo.innerHTML = '');
      }

      if (countries.length === 1) {
        const info = countries.map(country => renderDivEl(country));
        countryInfo.innerHTML = info.join(' ');
        countryList.innerHTML = '';
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
    });
}
