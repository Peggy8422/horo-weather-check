import { useState } from "react";
import TabList from "../components/TabList";
import BottomInfo from "../components/BottomInfo";
import boxStyles from "./Box.module.scss";

function Box() {
  const [activeTab, setActiveTab] = useState('Aries');
  const [isTabShow, setIsTabShow] = useState('false');

  return (
    <div className={boxStyles.box}>
      <div className={boxStyles.innerBox}>
        <TabList isTabShow={isTabShow} activeTab={activeTab} setActiveTab={setActiveTab} />
        <label>
          <input className={boxStyles.switch_night} type="checkbox" onChange={(e) => {
            if (e.target.checked) {
              setIsTabShow(true);
            } else {
              setIsTabShow(false);
            }
          }} />
          <div className={boxStyles.inner_box}>
            <div className={boxStyles.top}>
              <div className={boxStyles.horoSvg}>
                {/* 星座svg圖位置 */}
              </div>
              <div className={boxStyles.star}></div>
              <div className={`${boxStyles.star} ${boxStyles.star2}`}></div>
              <div className={`${boxStyles.star} ${boxStyles.star3}`}></div>
              <div className={boxStyles.horoscope}>ARIES</div>
              <div className={boxStyles.text_box}>
                <i className={boxStyles.text_area}>Daily Horoscope & Weather Check</i>
                <h4 className="date"> </h4>
              </div>
            </div>
            <BottomInfo />
          </div>
        </label>
      </div>
    </div>
  );
}

export default Box;