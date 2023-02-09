import { useState } from "react";
import { LocationIcon, RightIcon, LeftIcon, RefreshIcon, SunIcon } from "../assets";
import weatherStyles from "./WeatherBox.module.scss";


//待串接"局屬氣象站-現在天氣觀測報告"API
function WeatherBox() {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className={`${weatherStyles.weatherBox} ${showBox && weatherStyles.show}`}>
      <div className={weatherStyles.leftSide}>
        <div className={weatherStyles.location}>
          <div className={weatherStyles.icon}>
            <LocationIcon />
          </div>
          <select>
            <option value="Taipei">台北市</option>
            <option value="Keelung">基隆市 </option>
            <option value="Yilan">宜蘭市</option>
            <option value="Taoyuan">桃園市</option>
            <option value="Hsinchu">新竹市</option>
          </select>
        </div>
        <div className={weatherStyles.data}>
          <div className={weatherStyles.description}>多雲時晴</div>
          <div className={weatherStyles.temperature}>23<span>℃</span></div>
        </div>
      </div>
      <div className={weatherStyles.rightSide}>
        <div className="weather_svg">
          {/* 排版暫時用 */}
          <SunIcon />
        </div>
        <RefreshIcon className={weatherStyles.refreshIcon} />
      </div>
      <button className={weatherStyles.showBtn}>
        {!showBox && <RightIcon onClick={() => setShowBox(true)} />}
        {showBox && <LeftIcon onClick={() => setShowBox(false)} />}
      </button>
    </div>
  );
}


export default WeatherBox;

