export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,population,flags,languages,capital`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error fetching data');
  });
}
