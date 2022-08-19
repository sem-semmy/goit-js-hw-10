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
  const searchField = event.target.value.trim()

if( !searchField) {
    cleanPage()
    return;
}  

fetchCountries(searchField)
    .then(countries => {
        if(countries.length > 10) {
          Notify.info(`Too many matches found. Please enter a more specific name.`)  
return;
        }
        if(countries.length > 1 && countries.length <= 10) {
            creationCountriesList(countries);
        }
        // if(countries.length === 1) {
            else {

                creationCountriesDiv(countries);
            }
    })
    .catch (() => Notify.failure(`Oops, there is no country with that name`))


fetchCountries(inputSearch)
.then(countries => {
  clearPage(); //Якщо користувач повністю очищає поле пошуку, то HTTP-запит не виконується, а розмітка списку країн або інформації про країну зникає.
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
// Якщо бекенд повернув від 2-х до 10-и країн, під тестовим полем відображається список знайдених країн. 
// Кожен елемент списку складається з прапора та назви країни.
// Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається розмітка 
// картки з даними про країну: прапор, назва, столиця, населення і мови.
// Тобі потрібні тільки наступні властивості:

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов


function creationCountriesList() {

    const macup
}
function creationCountriesDiv(countries){
    const markup = countries.map(({name,capital,population,flags,languages}) => )
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
