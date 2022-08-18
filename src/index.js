import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';
// import card from './parsal/cantri-card.hbs';
// import list from './parsal/list-cantri.hbs';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInto = document.querySelector('.country-info');

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

const DEBOUNCE_DELAY = 300;

function cleanPage() {
  countryList.innerHTML = '';
  countryInto.innerHTML = '';
}

function onInput(event) {
  event.preventDefault();
}
//
//
///
//
//
//
//
///
//
// function onInput(event) {
//   if (!event.target.value.trim()) {
//     clin();
//     return;
//   }
//   if (event.value === 0) {
//     Notify.failure('not found', { timeout: 400 });
//   }

//   fetchCountries(event.target.value.trim())
//     .then(countries => {
//       clin();
//       if (countries.length > 10) {
//         Notify.info(
//           'Too many matches found. Please enter a more specific name.',
//           { timeout: 400 }
//         );
//         return;
//       }
//       if (countries.length <= 10 && countries.length >= 2) {
//         countryList.innerHTML = countries.map(list).join('');
//         return;
//       }
//       countryInto.innerHTML = card(countries[0]);
//       return;
//     })
//     .catch(error => {
//       clin();
//       Notify.failure(error, {
//         timeout: 400,
//       });
//     });
// }

// function clin() {
//   countryList.innerHTML = '';
//   countryInto.innerHTML = '';
// }
