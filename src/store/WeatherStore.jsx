import { makeAutoObservable } from "mobx";

const API_KEY = process.env.REACT_APP_API_KEY;
const UNITS = 'metric';

export default class WeatherStore {
  _weather = [];
  _forecast = [];

  constructor() {
    makeAutoObservable(this);
    this.loadWeather("Paris");
    this.loadForecast("Paris");
  }

  loadWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${UNITS}&appid=${API_KEY}`);
      const { coord, weather, main, base, visibility, wind, clouds, rain, dt, sys, timezone, id, name, cod } = await response.json();
      this.weather = {
        lon: coord.lon,
        lat: coord.lat,
        weatherId: weather[0].id,
        main: weather[0].main,
        description: weather[0].description,
        icon: weather[0].icon,
        base,
        temp: main.temp,
        feelsLike: main.feels_like,
        tempMin: main.temp_min,
        tempMax: main.temp_max,
        pressure: main.pressure,
        humidity: main.humidity,
        seaLevel: main.sea_level,
        grndKevel: main.grnd_level,
        visibility: visibility,
        speed: wind.speed,
        deg: wind.deg,
        gust: wind.gust,
        all: clouds.all,
        rain: rain?.["1h"] ?? 0,
        dt,
        type: sys.type,
        sysId: sys.id,
        country: sys.country,
        sunrise: sys.sunrise,
        sunset: sys.sunset,
        timezone,
        id,
        name,
        cod,
      }; 
    } catch (error) {
      console.error('Error loading weather:', error);
    }
  };

  loadForecast = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${UNITS}&appid=${API_KEY}`);
      const { cod, message, cnt, list} = await response.json();
      this.forecast = {
        cod,
        message,
        cnt,
        hourlyData: list.map(item => ({
          dt: item.dt,
          temp: item.main.temp,
          feelsLike: item.main.feels_like,
          tempMin: item.main.temp_min,
          tempMax: item.main.temp_max,
          pressure: item.main.pressure,
          seaLevel: item.main.sea_level,
          grndLevel: item.main.grnd_level,
          humidity: item.main.humidity,
          tempKf: item.main.temp_kf,
          id: item.weather[0].id,
          main: item.weather[0].main,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
          clouds: item.clouds.all,
          speed: item.wind.speed,
          deg: item.wind.deg,
          gust: item.wind.gust,
          visibility: item.visibility,
          pop: item.pop,
          pod: item.sys.pod,
          dtTxt: item.dt_txt,
          rain: item.rain?.["3h"] ?? 0,
        })),
      }
    } catch (error) {
      console.error('Error loading forecast:', error);
    }
  };


  get weather() {
    return this._weather;
  }

  set weather(value) {
    this._weather = value;
  }

  get forecast() {
    return this._forecast;
  }

  set forecast(value) {
    this._forecast = value;
  }
}
