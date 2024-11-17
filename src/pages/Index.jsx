import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../App';
import { observer } from 'mobx-react';
import InfosCard from '../components/InfosCard';
import profilePicture from "../assets/images/profile_picture.jpg";
import Meteo from '../components/Meteo';
// import rainIcon from "../assets/images/rain_white.svg";
import humidityIcon from "../assets/images/humidity.svg";
import pressureIcon from "../assets/images/pressure.svg";
import windIcon from "../assets/images/wind_white.svg";
import rainIcon from "../assets/images/rain_white.svg";
import LocationWindIcon from "../assets/images/location_wind.svg";
import cloudsIcon from "../assets/images/cloud_white.svg";
import feelsLikeIcon from "../assets/images/feels_like.svg";
import arrowIcon from "../assets/images/arrow.svg";

import DayWeather from '../components/DayWeather';

function Index() {
    const { weatherStore } = useContext(GlobalContext);
    const weather = weatherStore.weather;
    const forecast = weatherStore.forecast.hourlyData;


    const [dirDeg, setDirDeg] = useState("");
    const [temp, setTemp] = useState("");
    const [cityInput, setCityInput] = useState('');


    useEffect(() => {
        if (!temp) {
            handleClick('°C');
        }
    }, [temp])

    //OPTTI
    useEffect(() => {
        if (weather.deg > 330 || (weather.deg >= 0 && weather.deg <= 30)) {
            setDirDeg('n');
        } else if (weather.deg > 30 && weather.deg <= 90) {
            setDirDeg('nw');
        } else if (weather.deg > 90 && weather.deg <= 150) {
            setDirDeg('sw');
        } else if (weather.deg > 150 && weather.deg <= 210) {
            setDirDeg('s');
        } else if (weather.deg > 210 && weather.deg <= 270) {
            setDirDeg('so');
        } else if (weather.deg > 270 && weather.deg <= 330) {
            setDirDeg('no');
        }
    })

    const handleClick = (txt) => {
        setTemp(txt);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        weatherStore.loadWeather(cityInput);
        weatherStore.loadForecast(cityInput);
    };

    const maxRain = forecast && forecast.length !== 0 ? Math.max(...forecast.slice(0, 8).map((data) => data.rain)) : 0;


    return (
        <div className='container'>
            <section className='left'>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={cityInput} onChange={(e) => setCityInput(e.target.value)} placeholder="Search for places..." className="select-cities" />
                </form>
                <Meteo/>
            </section>
            <section className='right'>
                <div className='personal-infos'>
                    <div className='text'>
                        <p><strong>Welcome back User1 !</strong></p>
                        <p>Check out today's weather information</p>
                    </div>
                    <div className='more'>
                        <p onClick={() => handleClick('°C')} className={temp === '°C' ? 'active' : ''}>°C</p>
                        {/* <p onClick={() => handleClick('°F')} className={temp === '°F' ? 'active' : ''}>°F</p> */}
                        <img src={`${profilePicture}`} alt="Profil picture" />
                    </div>
                </div>
                <div className='upcoming'>
                    <div className='header'>
                        <p>Upcoming hours</p>
                        <div className='button'>
                            <a href="#" className='disabled'>{maxRain !== 0 ? 'Rain precipitation' : 'Humidity'}<img src={arrowIcon} alt="arrow right" /></a>
                            <a href="#" className='disabled'>Next days <img src={arrowIcon} alt="arrow right" /></a>
                        </div>
                    </div>
                    <DayWeather></DayWeather>
                </div>
                <div>
                    <p className='highlights'><strong>Today's Highlights</strong></p>
                    <div className='infos-cards'>
                        <InfosCard title="Humidity" icon={humidityIcon} number={`${weather.humidity}%`} />
                        <InfosCard title="Wind speed" icon={windIcon} number={`${weather.speed} km/h`} />
                        <InfosCard title="Wind direction" icon={LocationWindIcon} number={`${weather.deg}°`} addClass={dirDeg} />
                        <InfosCard title="Clouds" icon={cloudsIcon} number={`${weather.all}%`} />
                        <InfosCard title="Feel like" icon={feelsLikeIcon} number={`${weather.feelsLike}°C`} />
                        {weather.rain !== 0 ? <InfosCard title="Precipitation" icon={rainIcon} number={`${weather.rain} mm`} /> : <InfosCard title="Atmospheric pressure" icon={pressureIcon} number={`${weather.pressure} hPa`} /> }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default observer(Index);