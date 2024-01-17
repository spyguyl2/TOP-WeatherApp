import './style.css';
import './meyerReset.css';

const key = 'e050bc8b5b284f7ebda233344241501';
/* attempt 1 fetching using .then
fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=wellington`.toLowerCase(), { mode: 'cors' })
  .then((response) => response.json()).then((response) => console.log(response));
   */
/*
async function cleanWeatherData(data) {
  const uncleanedObject = await JSON.parse(data);
  return uncleanedObject;
}
 */

/* attempt 2 fetching using await
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=wellington`.toLowerCase(), { mode: 'cors' });
console.log(await response.json());
*/

// ^^Leaving these above for examples of each kind.
// Now make them as a function
