import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';
// import card from './parsal/cantri-card.hbs';
// import list from './parsal/list-cantri.hbs';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

input.addEventListener('input', debounce(search, DEBOUNCE_DELAY));

function search(input) {
  input.preventDefault();

  const inputSearch = input.target.value.trim();

  if (!inputSearch) {
    clearPage(); 
    return;
  }

  fetchCountries(inputSearch)
    .then(countries => {
      clearPage(); 
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return; //?
      }
      if (countries.length > 1 && countries.length <= 10) {
        renderContryList(countries);
      } else {
        renderContryCard(countries);
      }
    })
    .catch(() => Notify.failure('Oops, there is no country with that name'));
}

function clearPage() {
  list.innerHTML = '';
  div.innerHTML = '';
}

function renderContryList(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `<li class="country-list__item">
            <img
                class="country-list__flag"
                src="${flags.svg}"
                alt="Flag for ${name.official}"
            />
            <h2 class="country-list__name">${name.official}</h2>
        </li>`;
    })
    .join('');
  return list.insertAdjacentHTML('afterbegin', markup);
}

function renderContryCard(countries) {
  const markup = countries
    .map(({ name, capital, population, flags, languages }) => {
      return `
            <h2 class="country-card__name">${name.official}</h2>
            <ul class="country-card__item">
            <li><img
                class="country-card__flag"
                src="${flags.svg}"
                alt="Flag for ${name.official}"
            />
            </li>
            <li class="country-card__detailes"><b>Capital: </b>${capital}</li>
            <li class="country-card__detailes"><b>Population: </b>${population}</li>
            <li class="country-card__detailes"><b>Languages: </b>${Object.values(
              languages
            )}</li>
        </ul>`;
    })
    .join('');
  return div.insertAdjacentHTML('afterbegin', markup);
}




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
