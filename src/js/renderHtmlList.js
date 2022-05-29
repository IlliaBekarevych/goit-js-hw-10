export const renderLiEl = ({ flags, name }) => {
  return `<li class = "country-list-item">
    <img src = "${flags.svg}" alt = "${name.official}" width = 50/>
    <h1 class = "country-list-title">${name.official}</h1></li>`;
};

export const renderDivEl = ({ name, flags, capital, population, languages }) => {
  return `<div class = "country-info-wrap">
    <img src = "${flags.svg}" alt = "${name.official}" width = 50/>
    <h1 class = "country-info-title">${name.official}</h1></div>
    <p><span class = "country-info-text">Capital: </span>${capital}</p>
    <p><span class = "country-info-text">Population: </span>${population}</p>
    <p><span class = "country-info-text">Languages: </span>${Object.values(languages)}</p>`;
};
