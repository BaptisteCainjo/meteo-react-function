import { makeAutoObservable } from "mobx";

export default class Weather {
    //WEATHER ASYNC
    _lon;
    _lat;
    _weatherId;
    _main;
    _description;
    _icon;
    _base;
    _temp;
    _feelsLike;
    _tempMin;
    _tempMax;
    _pressure;
    _humidity;
    _visibility;
    _speed;
    _deg;
    _all;
    _dt;
    _type;
    _sysId;
    _country;
    _sunrise;
    _sunset;
    _timezone;
    _id;
    _name;
    _cod;

    //FORECAST ASYNC
    _message
    _cnt
    _hour0_dt
    _hour0_temp
    _hour0_feelsLike
    _hour0_tempMin
    _hour0_tempMax
    _hour0_pressure
    _hour0_seaLevel
    _hour0_grndLevel
    _hour0_humidity
    _hour0_tempKf
    _hour0_id
    _hour0_main
    _hour0_description
    _hour0_icon
    _hour0_clouds
    _hour0_speed
    _hour0_deg
    _hour0_gust
    _hour0_visibility
    _hour0_pop
    _hour0_pod
    _hour0_dtTxt

    _hour1_dt
    _hour1_temp
    _hour1_feelsLike
    _hour1_tempMin
    _hour1_tempMax
    _hour1_pressure
    _hour1_seaLevel
    _hour1_grndLevel
    _hour1_humidity
    _hour1_tempKf
    _hour1_id
    _hour1_main
    _hour1_description
    _hour1_icon
    _hour1_clouds
    _hour1_speed
    _hour1_deg
    _hour1_gust
    _hour1_visibility
    _hour1_pop
    _hour1_pod
    _hour1_dtTxt




    constructor(lon, lat, weatherId, main, description, icon, base, temp, feelsLike, tempMin, tempMax, pressure, humidity, visibility, speed, deg, all, dt, type, sysId, country, sunrise, sunset, timezone, id, name, cod, message, cnt, hour0_dt, hour0_temp, hour0_feelsLike, hour0_tempMin, hour0_tempMax, hour0_pressure, hour0_seaLevel, hour0_grndLevel, hour0_humidity, hour0_tempKf, hour0_id, hour0_main, hour0_description, hour0_icon, hour0_clouds, hour0_speed, hour0_deg, hour0_gust, hour0_visibility, hour0_pop, hour0_pod, hour0_dtTxt, hour1_dt, hour1_temp, hour1_feelsLike, hour1_tempMin, hour1_tempMax, hour1_pressure, hour1_seaLevel, hour1_grndLevel, hour1_humidity, hour1_tempKf, hour1_id, hour1_main, hour1_description, hour1_icon, hour1_clouds, hour1_speed, hour1_deg, hour1_gust, hour1_visibility, hour1_pop, hour1_pod, hour1_dtTxt) {
        //WEATHER ASYNC
        this._lon = lon;
        this._lat = lat;
        this._weatherId = weatherId;
        this._main = main;
        this._description = description;
        this._icon = icon;
        this._base = base;
        this._temp = temp;
        this._feelsLike = feelsLike;
        this._tempMin = tempMin;
        this._tempMax = tempMax;
        this._pressure = pressure;
        this._humidity = humidity;
        this._visibility = visibility;
        this._speed = speed;
        this._deg = deg;
        this._all = all;
        this._dt = dt;
        this._type = type;
        this._sysId = sysId;
        this._country = country;
        this._sunrise = sunrise;
        this._sunset = sunset;
        this._timezone = timezone;
        this._id = id;
        this._name = name;
        this._cod = cod;

        //FORECAST ASYNC
        this._message = message;
        this._cnt = cnt;
        this._hour0_dt = hour0_dt;
        this._hour0_temp = hour0_temp;
        this._hour0_feelsLike = hour0_feelsLike;
        this._hour0_tempMin = hour0_tempMin;
        this._hour0_tempMax = hour0_tempMax;
        this._hour0_pressure = hour0_pressure;
        this._hour0_seaLevel = hour0_seaLevel;
        this._hour0_grndLevel = hour0_grndLevel;
        this._hour0_humidity = hour0_humidity;
        this._hour0_tempKf = hour0_tempKf;
        this._hour0_id = hour0_id;
        this._hour0_main = hour0_main;
        this._hour0_description = hour0_description;
        this._hour0_icon = hour0_icon;
        this._hour0_clouds = hour0_clouds;
        this._hour0_speed = hour0_speed;
        this._hour0_deg = hour0_deg;
        this._hour0_gust = hour0_gust;
        this._hour0_visibility = hour0_visibility;
        this._hour0_pop = hour0_pop;
        this._hour0_pod = hour0_pod;
        this._hour0_dtTxt = hour0_dtTxt;

        this._hour1_dt = hour1_dt;
        this._hour1_temp = hour1_temp;
        this._hour1_feelsLike = hour1_feelsLike;
        this._hour1_tempMin = hour1_tempMin;
        this._hour1_tempMax = hour1_tempMax;
        this._hour1_pressure = hour1_pressure;
        this._hour1_seaLevel = hour1_seaLevel;
        this._hour1_grndLevel = hour1_grndLevel;
        this._hour1_humidity = hour1_humidity;
        this._hour1_tempKf = hour1_tempKf;
        this._hour1_id = hour1_id;
        this._hour1_main = hour1_main;
        this._hour1_description = hour1_description;
        this._hour1_icon = hour1_icon;
        this._hour1_clouds = hour1_clouds;
        this._hour1_speed = hour1_speed;
        this._hour1_deg = hour1_deg;
        this._hour1_gust = hour1_gust;
        this._hour1_visibility = hour1_visibility;
        this._hour1_pop = hour1_pop;
        this._hour1_pod = hour1_pod;
        this._hour1_dtTxt = hour1_dtTxt;

        makeAutoObservable(this);
    }


    //WHEATHER ASYNC
    get lon() {
        return this._lon;
    }
    get lat() {
        return this._lat;
    }
    get weatherId() {
        return this._weatherId;
    }
    get main() {
        return this._main;
    }
    get description() {
        return this._description;
    }
    get icon() {
        return this._icon;
    }
    get base() {
        return this._base;
    }
    get temp() {
        return this._temp;
    }
    get feelsLike() {
        return this._feelsLike;
    }
    get tempMin() {
        return this._tempMin;
    }
    get tempMax() {
        return this._tempMax;
    }
    get pressure() {
        return this._pressure;
    }
    get humidity() {
        return this._humidity;
    }
    get visibility() {
        return this._visibility;
    }
    get speed() {
        return this._speed;
    }
    get deg() {
        return this._deg;
    }
    get all() {
        return this._all;
    }
    get dt() {
        return this._dt;
    }
    get type() {
        return this._type;
    }
    get sysId() {
        return this._sysId;
    }
    get country() {
        return this._country;
    }
    get sunrise() {
        return this._sunrise;
    }
    get sunset() {
        return this._sunset;
    }
    get timezone() {
        return this._timezone;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get cod() {
        return this._cod;
    }
    //FORECAST ASYNC

    get message() {
        return this._message;
    }
    get cnt() {
        return this._cnt;
    }
    get hour0_dt() {
        return this._hour0_dt;
    }
    get hour0_temp() {
        return this._hour0_temp;
    }
    get hour0_feelsLike() {
        return this._hour0_feelsLike;
    }
    get hour0_tempMin() {
        return this._hour0_tempMin;
    }
    get hour0_tempMax() {
        return this._hour0_tempMax;
    }
    get hour0_pressure() {
        return this._hour0_pressure;
    }
    get hour0_seaLevel() {
        return this._hour0_seaLevel;
    }
    get hour0_grndLevel() {
        return this._hour0_grndLevel;
    }
    get hour0_humidity() {
        return this._hour0_humidity;
    }
    get hour0_tempKf() {
        return this._hour0_tempKf;
    }
    get hour0_id() {
        return this._hour0_id;
    }
    get hour0_main() {
        return this._hour0_main;
    }
    get hour0_description() {
        return this._hour0_description;
    }
    get hour0_icon() {
        return this._hour0_icon;
    }
    get hour0_clouds() {
        return this._hour0_clouds;
    }
    get hour0_speed() {
        return this._hour0_speed;
    }
    get hour0_deg() {
        return this._hour0_deg;
    }
    get hour0_gust() {
        return this._hour0_gust;
    }
    get hour0_visibility() {
        return this._hour0_visibility;
    }
    get hour0_pop() {
        return this._hour0_pop;
    }
    get hour0_pod() {
        return this._hour0_pod;
    }
    get hour0_dtTxt() {
        return this._hour0_dtTxt;
    }

    get hour1_dt() {
        return this._hour1_dt;
    }
    get hour1_temp() {
        return this._hour1_temp;
    }
    get hour1_feelsLike() {
        return this._hour1_feelsLike;
    }
    get hour1_tempMin() {
        return this._hour1_tempMin;
    }
    get hour1_tempMax() {
        return this._hour1_tempMax;
    }
    get hour1_pressure() {
        return this._hour1_pressure;
    }
    get hour1_seaLevel() {
        return this._hour1_seaLevel;
    }
    get hour1_grndLevel() {
        return this._hour1_grndLevel;
    }
    get hour1_humidity() {
        return this._hour1_humidity;
    }
    get hour1_tempKf() {
        return this._hour1_tempKf;
    }
    get hour1_id() {
        return this._hour1_id;
    }
    get hour1_main() {
        return this._hour1_main;
    }
    get hour1_description() {
        return this._hour1_description;
    }
    get hour1_icon() {
        return this._hour1_icon;
    }
    get hour1_clouds() {
        return this._hour1_clouds;
    }
    get hour1_speed() {
        return this._hour1_speed;
    }
    get hour1_deg() {
        return this._hour1_deg;
    }
    get hour1_gust() {
        return this._hour1_gust;
    }
    get hour1_visibility() {
        return this._hour1_visibility;
    }
    get hour1_pop() {
        return this._hour1_pop;
    }
    get hour1_pod() {
        return this._hour1_pod;
    }
    get hour1_dtTxt() {
        return this._hour1_dtTxt;
    }


}