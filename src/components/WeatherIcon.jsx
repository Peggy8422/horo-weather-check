import { useEffect, useMemo, useState } from "react";
import {
  DayClear,
  DayCloudy,
  DayCloudyFog,
  DayFog,
  DayPartiallyClearWithRain,
  DaySnowing,
  DayThunderstorm,
  NightClear,
  NightCloudy,
  NightCloudyFog,
  NightFog,
  NightPartiallyClearWithRain,
  NightSnowing,
  NightThunderstorm
} from "../assets";
import weatherStyles from "./WeatherBox.module.scss";

//轉換天氣描述代碼為圖示
const weatherCode2Type = (weatherCode) => {
  const [weatherType] =
    Object.entries(weatherTypes).find(([_, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
    ) || [];

  return weatherType;
};

//整理天氣描述型態對應的天氣描述代碼
const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12,
    13, 14, 19, 20, 29, 30,
    31, 32, 38, 39,
  ],
  isSnowing: [23, 37, 42],
};

//定義日夜時間對應的天氣圖示
const weatherIcons = {
  day: {
    isThunderstorm: <DayThunderstorm />,
    isClear: <DayClear />,
    isCloudyFog: <DayCloudyFog />,
    isCloudy: <DayCloudy />,
    isFog: <DayFog />,
    isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
    isSnowing: <DaySnowing />,
  },
  night: {
    isThunderstorm: <NightThunderstorm />,
    isClear: <NightClear />,
    isCloudyFog: <NightCloudyFog />,
    isCloudy: <NightCloudy />,
    isFog: <NightFog />,
    isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
    isSnowing: <NightSnowing />,
  },
};



function WeatherIcon({ currentWeatherCode, moment }) {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isClear');

  //用useMemo保存複雜計算的值
  const theWeatherIcon = useMemo(() => weatherCode2Type(currentWeatherCode), [currentWeatherCode]);

  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon]);

  return (
    <div className={weatherStyles.weatherIcon}>
      {weatherIcons[moment][currentWeatherIcon]}
    </div>
  );
}

export default WeatherIcon;