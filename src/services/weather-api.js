export function getCurWeather() {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=45.073825&lon=-123.260858&units=imperial&appid=d3945aa316355ce92bb8cc10bf63e3da`;
    return fetch(endpoint, {mode: 'cors'}).then(res => res.json());
  }