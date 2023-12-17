import { observer } from "mobx-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../App";

function InfoCard({ title, icon, number, addClass }) {
  const { weatherStore } = useContext(GlobalContext);
  const weather = weatherStore.weather;

  const [loadingText, setLoadingText] = useState("Loading...");

  const adjustedNumber =
    title === "Wind speed" || title === "Feel like" ? parseFloat(number) * 2 :
    title === "Atmospheric pressure" ? parseFloat(number) / 20 :
    title === "Wind direction" ? parseFloat(number) / 3.6 :
    parseFloat(number);

  return (
    <div className='infos'>
      <div className="header">
        <p>{title}</p>
        {title === 'Wind direction' ? (
          <div className={`dir ${addClass}`}>
            <img src={icon} alt={`icon of the ${title} card`} />
          </div>
        ) : (
          <img src={icon} alt={`icon of the ${title} card`} />
        )}
      </div>
      <p className="number"><strong>{weather.length !== 0 ? number : loadingText}</strong></p>
      <div className="graphic">
        <div style={{ width: `${adjustedNumber}%` }}></div>
      </div>
    </div>
  );
}

export default observer(InfoCard)