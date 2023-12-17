import { observer } from "mobx-react";
import { GlobalContext } from '../App';
import { useContext, useEffect, useState } from "react";

import sunIconBlack from '../assets/images/sun_black.svg';
import rainIconBlack from "../assets/images/rain_black.svg";
import cloudIconBlack from '../assets/images/cloud_black.svg';
import snowIconBlack from '../assets/images/snow_black.svg';
import mistIconBlack from '../assets/images/mist_black.svg';

function DayWeather() {
    const { weatherStore } = useContext(GlobalContext);
    const forecast = weatherStore.forecast.hourlyData;


    if (!forecast) {
        return (<p>Loading...</p>);
    }

    // On calcule la valeur maximale de la propriété "rain" dans le tableau "forecast".
    // La fonction map() est utilisée pour transformer chaque élément "data" du tableau "forecast"
    // en une valeur numérique représentant la propriété "rain" de chaque élément.
    // La flèche (=>) est une fonction fléchée (arrow function) qui spécifie comment transformer chaque élément "data" en une valeur numérique.
    // Dans ce cas, on extrait la propriété "rain" de chaque élément "data".
    // La spread operator (...) permet de déstructurer le résultat du map() en une liste d'arguments.
    // Ainsi, Math.max() peut recevoir une liste d'arguments numériques plutôt qu'un tableau.
    const maxRain = Math.max(...forecast.slice(0, 8).map((data) => data.rain));
    const maxHumididy = Math.max(...forecast.slice(0, 8).map((data) => data.humidity));
    
    const weatherIcons = {
        'Clouds': cloudIconBlack,
        'Clear': sunIconBlack,
        'Rain': rainIconBlack,
        'Snow': snowIconBlack,
        'Mist': mistIconBlack,
      };

    return (
        <div className="day-weather">
            <div>
                {forecast.slice(0, 8).map((data, i) => (
                    <p key={i}>{data.dtTxt.substring(11, 16)}</p>
                ))}
            </div>
            <div>
                {forecast.slice(0, 8).map((data, i) => (
                    <img key={i} src={weatherIcons[data.main]} alt="Weather" />
                ))}
            </div>
            <div>
                {forecast.slice(0, 8).map((data, i) => (
                    <p key={i}>{data.temp.toFixed(1)}°C</p>
                ))}
            </div>
            <div className="traits">
                {maxRain !== 0 ? (
                    forecast.slice(0, 8).map((data, i) => (
                        <div key={i} style={{ height: `${(data.rain / maxRain) * 100}%` }}></div>
                    ))
                ) : (
                    forecast.slice(0, 8).map((data, i) => (
                        <div key={i} style={{ height: `${(data.humidity / maxHumididy) * 100}%` }}></div>
                    ))
                )}
            </div>
            <div className="humidity">
                {maxRain !== 0 ? (
                    forecast.slice(0, 8).map((data, i) => (
                        <p key={i}>{data.rain} mm</p>
                    ))
                ) : (
                    forecast.slice(0, 8).map((data, i) => (
                        <p key={i}>{data.humidity} %</p>
                    ))
                )}
            </div>
        </div>
    );
}
export default observer(DayWeather);

