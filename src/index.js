import './style.css';
import './meyerReset.css';

const WEATHER_API_KEY = 'e050bc8b5b284f7ebda233344241501';
// attempt 1 fetching using .then
/*
fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=wellington`.toLowerCase(), { mode: 'cors' })
.then((response) => response.json()).then((response) => console.log(response));
*/
// attempt 2 fetching using await
/*
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=wellington`.toLowerCase(), { mode: 'cors' });
const responseObject = (await response.json());
console.log(responseObject);
*/
// ^^Leaving these above for examples of each kind.
// Now make them as a function

const getData = async (cityName) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}`
      .toLowerCase(),
    { mode: 'cors' },
  );
  const rawData = await response.json();
  return rawData;
};

console.log(await getData('wellington'));