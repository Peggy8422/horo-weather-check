import { useState, useEffect } from "react";
import TabList from "../components/TabList";
import HoroSvg from "../components/HoroSvg";
import BottomInfo from "../components/BottomInfo";
import boxStyles from "./Box.module.scss";
import { getHoroscopeInfo } from "../api/horoscopeAPI";


const initialInfo = {
  description: '',
  compatibility: '',
  mood: '',
  color: '',
  lucky_number: '',
  lucky_time: '',
  isLoading: true,
};

function Box() {
  const [activeTab, setActiveTab] = useState('Aries');
  const [isTabShow, setIsTabShow] = useState(false);
  const [horoscopeInfo, setHoroscopeInfo] = useState(initialInfo);

  useEffect(() => {
    const getData = async () => {
      const data = await getHoroscopeInfo({ sign: activeTab.toLowerCase() });
      setHoroscopeInfo({...data, isLoading: false});
    };
    getData();
    return () => {
      setHoroscopeInfo(initialInfo);
    };
  }, [activeTab]);

  return (
    <div className={boxStyles.box}>
      <div className={boxStyles.innerBox}>
        <TabList isTabShow={isTabShow} activeTab={activeTab} setActiveTab={setActiveTab} />
        <label htmlFor="switch">
          <input id="switch" className={boxStyles.switch_night} type="checkbox" checked={isTabShow} onChange={() => {
            setIsTabShow(!isTabShow);
          }} />
          <div className={boxStyles.inner_box}>
            <div className={boxStyles.top}>
              {/* 星座svg圖位置 */}
              <HoroSvg activeTab={activeTab}/>
              <div className={boxStyles.star}></div>
              <div className={`${boxStyles.star} ${boxStyles.star2}`}></div>
              <div className={`${boxStyles.star} ${boxStyles.star3}`}></div>
              <div className={boxStyles.horoscope}>{activeTab.toUpperCase()}</div>
              <div className={boxStyles.text_box}>
                <i className={boxStyles.text_area}>Daily Horoscope & Weather Check</i>
                <h4 className="date"> </h4>
              </div>
            </div>
            <BottomInfo 
              description={horoscopeInfo.description}
              compatibility={horoscopeInfo.compatibility}
              mood={horoscopeInfo.mood}
              color={horoscopeInfo.color}
              luckyNum={horoscopeInfo.lucky_number}
              luckyTime={horoscopeInfo.lucky_time}
              isLoading={horoscopeInfo.isLoading}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Box;