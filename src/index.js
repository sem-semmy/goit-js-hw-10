import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInto = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;
