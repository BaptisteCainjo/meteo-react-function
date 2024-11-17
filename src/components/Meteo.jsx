import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../App';
import { observer } from 'mobx-react';
//
import location from '../assets/images/location.svg';
//
import dateIcon from '../assets/images/date.svg';
import sunsetIcon from '../assets/images/sunset.svg';
import sunriseIcon from '../assets/images/sunrise.svg';
import sunIcon from '../assets/images/sun_white.svg';
import rainIcon from "../assets/images/rain_white.svg";
import cloudIcon from '../assets/images/cloud_white.svg';
import snowIcon from '../assets/images/snow_white.svg';
import mistIcon from '../assets/images/snow_white.svg';
//
// import clearWeather from '../assets/images/clear_weather.png';
// import cloudWeather from '../assets/images/cloud_weather.png';
// import rainWeather from '../assets/images/rain_weather.png';
// import snowWeather from '../assets/images/snow_weather.png';

function Meteo() {
    const { weatherStore } = useContext(GlobalContext);
    const weather = weatherStore.weather;

    const [currentHours, setCurrentHours] = useState('');
    const [currentMinutes, setCurrentMinutes] = useState('');
    const [formattedDay, setFormattedDayName] = useState('');
    
    const dateSunset = new Date(weather.sunset * 1000);
    const heureSunset = dateSunset.getHours();
    const minutesSunset = dateSunset.getMinutes();

    const dateSunrise = new Date(weather.sunrise * 1000);
    const heureSunrise = dateSunrise.getHours();

    const minutesSunrise = dateSunset.getMinutes();
    const [temp, settemp] = useState(0);

    //on peut pas faire un seul UE en regroupant tout ?
    useEffect(() => {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const day = currentDate.toLocaleString('en-EN', { weekday: 'long' });
        const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
        setCurrentHours(hours);
        setCurrentMinutes(minutes);
        setFormattedDayName(formattedDay);

        if (weather.length !== 0) {
            settemp(weather.temp);
        }
    }, [weather]);


    const iconTemp = weather.main === "Clear" ? sunIcon : weather.main === "Clouds" ? cloudIcon : weather.main === "Rain" ? rainIcon : weather.main === "Snow" ? snowIcon : weather.main === "Mist" ? mistIcon : "";
    // const imgTemp = weather.main === "Clear" ? clearWeather : weather.main === "Clouds" ? cloudWeather : weather.main === "Rain" ? rainWeather : weather.main === "Snow" ? snowWeather : "";

    if (weather.length === 0) {
        return (<p>Loading...</p>)
    }

    return (
        <>
            <div className='infos-left'>
                <div>
                    <img src={location} alt="icon of place" />
                    <p className="city">{weather.name}, {weather.country}</p>
                </div>
                <div>
                    <img src={sunriseIcon} alt="" />
                    <p>{`${heureSunrise <= 9 ? `0${heureSunrise}` : heureSunrise}:${minutesSunrise}`}</p>
                </div>
                <div>
                    <img src={dateIcon} alt="" />
                    <p>{formattedDay}, {currentHours <= 9 ? `0${currentHours}` : currentHours}:{currentMinutes <= 9 ? `0${currentMinutes}` : currentMinutes}</p>
                </div>
                <div>
                    <img src={sunsetIcon} alt="" />
                    <p>{`${heureSunset <= 9 ? `0${heureSunset}` : heureSunset}:${minutesSunset}`}</p>
                </div>
            </div>
            <div className='temperature'>
                <p className='number'>{temp.toFixed(1)}°C</p>
                <div>
                    <img src={iconTemp} alt="" />
                    <p>{weather.main}</p>
                </div>

            </div>
            {/* <img className='img-temp' src={imgTemp} alt="" /> */}
        </>
    )
}

export default observer(Meteo);