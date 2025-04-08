/*ENONCE : 
- Fais du refactoring dans ce projet, surtout dans la partie Javascript qui contient beaucoup de code redondant pour la récupération de la météo associée à chaque ville.

 */

const fetchWeather = async () => {
  const LAT_PARIS = 48.8534;
  const LONG_PARIS = 2.3488;

  let resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT_PARIS}&longitude=${LONG_PARIS}&current=temperature_2m,rain`
  );

  let json = await resp.json();

  console.log(json.current.rain);
  document.getElementById("pluie_paris").innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById("degres_paris").innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";

  const LAT_LYON = 45.75;
  const LONG_LYON = 4.85;

  resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT_LYON}&longitude=${LONG_LYON}&current=temperature_2m,rain`
  );

  json = await resp.json();

  console.log(json.current.rain);
  document.getElementById("pluie_lyon").innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById("degres_lyon").innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";

  const LAT_NANTES = 47.2173;
  const LONG_NANTES = -1.5534;

  resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT_NANTES}&longitude=${LONG_NANTES}&current=temperature_2m,rain`
  );

  json = await resp.json();

  console.log(json.current.rain);
  document.getElementById("pluie_nantes").innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById("degres_nantes").innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";

  const LAT_MARSEILLE = 43.3;
  const LONG_MARSEILLE = 5.4;

  resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT_MARSEILLE}&longitude=${LONG_MARSEILLE}&current=temperature_2m,rain`
  );

  json = await resp.json();

  console.log(json.current.rain);
  document.getElementById("pluie_marseille").innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById("degres_marseille").innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";

  const LAT_LILLE = 50.633333;
  const LONG_LILLE = 3.066667;

  resp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT_LILLE}&longitude=${LONG_LILLE}&current=temperature_2m,rain`
  );

  json = await resp.json();

  console.log(json.current.temperature_2m);
  document.getElementById("pluie_lille").innerHTML =
    "<strong>" + json.current.rain + "</strong>";
  document.getElementById("degres_lille").innerHTML =
    "<strong>" + json.current.temperature_2m + "</strong>";
};

fetchWeather();
