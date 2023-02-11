import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import { LocationIcon, RightIcon, LeftIcon, RefreshIcon } from "../assets";
import WeatherIcon from "./WeatherIcon";
import weatherStyles from "./WeatherBox.module.scss";
import { getCurrentWeather, getForecast } from "../api/weatherAPI";
//匯入日出日落資料
import sunriseAndSunsetData from '../sunrise-sunset.json';

const destrictOptions = [
  {value: 'Yilan', name: '宜蘭縣', abv: '宜蘭'},
  {value: 'Hualian', name: '花蓮縣', abv: '花蓮'},
  {value: 'Taitung', name: '臺東市', abv: '臺東'},
  {value: 'Keelung', name: '基隆市', abv: '基隆'},
  {value: 'Taipei', name: '臺北市', abv: '臺北'},
  {value: 'NewTaipei', name: '新北市', abv: '新北'},
  {value: 'Taoyuan', name: '桃園市', abv: '桃園'},
  {value: 'Hsinchu', name: '新竹縣', abv: '新竹'},
  {value: 'Maoli', name: '苗栗縣', abv: '苗栗'},
];

const getMoment = (locationName) => {
  //從日出日落時間中找出符合的地區
  const location = sunriseAndSunsetData.find(
    (data) => data.locationName === locationName
  );

  //找不到的話則回傳 null
  if (!location) return null;

  //取得當前時間
  const now = new Date();

  //將當前時間以 "XXXX-XX-XX" 的時間格式呈現
  const nowDate = Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(now)
    .replace(/\//g, '-');

  //從該地區中找到對應的日期
  const locationDate = location.time && location.time.find((time) => time.dataTime === nowDate);

  //將日出日落以及當前時間轉成時間戳記（TimeStamp）
  const sunriseTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunrise}`
  ).getTime();
  const sunsetTimestamp = new Date(
    `${locationDate.dataTime} ${locationDate.sunset}`
  ).getTime();
  const nowTimeStamp = now.getTime();

  //若當前時間介於日出和日落中間，則表示為白天，否則為晚上
  return sunriseTimestamp <= nowTimeStamp && nowTimeStamp <= sunsetTimestamp
    ? 'day'
    : 'night';
};


//待串接"局屬氣象站-現在天氣觀測報告"API
function WeatherBox() {
  const [showBox, setShowBox] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Taipei');
  const [weatherElement, setWeatherElement] = useState({
    cityName: '臺北市',
    locationName: '臺北',
    description: '多雲時晴',
    weatherCode: 0,
    temperature: 27.5,
  });
  
  // const selectRef = useRef(null);

  //提取所有取的天氣資料會共用的函式用useCallback包起來
  const getAllData = useCallback(() => {
    setWeatherElement((prevData) => ({
      ...prevData, 
      cityName: destrictOptions.find(option => option.value === selectedCity).name,
      locationName: destrictOptions.find(option => option.value === selectedCity).abv
    }));
    console.log(selectedCity);
    getCurrentTemp();
    getWx();
    
  }, [selectedCity]);

  const nowMoment = useMemo(() => getMoment(weatherElement.cityName), [weatherElement.cityName]);

  useEffect(() => {
    getAllData();
    
  }, [getAllData]);

  //取得當前溫度
  const getCurrentTemp = async () => {
    const data = await getCurrentWeather(weatherElement.locationName);
    const locationData = data.records.location[0];
    const temperature = locationData.weatherElement.find(item => item.elementName === 'TEMP').elementValue;

    setWeatherElement((prevData) => ({...prevData, temperature}));

  }
  //取得當前(近12小時)天氣描述
  const getWx = async () => {
    const data = await getForecast(weatherElement.cityName);
    const locationData = data.records.location[0];
    const Wx = locationData.weatherElement.find(item => item.elementName === 'Wx').time[0].parameter || '';

    setWeatherElement((prevData) => ({
      ...prevData, 
      description: Wx.parameterName,
      weatherCode: Wx.parameterValue
    }));
  }

  return (
    <div className={`${weatherStyles.weatherBox} ${showBox && weatherStyles.show}`}>
      <div className={weatherStyles.leftSide}>
        <div className={weatherStyles.location}>
          <div className={weatherStyles.icon}>
            <LocationIcon />
          </div>
          <select value={selectedCity} onChange={(e) => {
            setSelectedCity(e.target.value);
            // setWeatherElement((prevData) => ({
            //   ...prevData, 
            //   cityName: destrictOptions.find(option => option.value === selectedCity).name,
            //   locationName: destrictOptions.find(option => option.value === selectedCity).abv
            // }));
            
          }} >
            {destrictOptions.map(option => {
              return <option key={option.abv} value={option.value}>{option.name}</option>
            })}
          </select>
        </div>
        <div className={weatherStyles.data}>
          <div className={weatherStyles.description}>{weatherElement.description}</div>
          <div className={weatherStyles.temperature}>{Math.round(weatherElement.temperature)}<span>℃</span></div>
        </div>
      </div>
      <div className={weatherStyles.rightSide}>
        <WeatherIcon currentWeatherCode={weatherElement.weatherCode} moment={nowMoment || 'day'} />
        <RefreshIcon className={weatherStyles.refreshIcon} onClick={getAllData} />
      </div>
      <button className={weatherStyles.showBtn}>
        {!showBox && <RightIcon onClick={() => setShowBox(true)} />}
        {showBox && <LeftIcon onClick={() => setShowBox(false)} />}
      </button>
    </div>
  );
}


export default WeatherBox;

