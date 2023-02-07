import boxStyles from "../container/Box.module.scss";
import { 
  AriesIcon,
  TaurusIcon,
  GeminiIcon,
  CancerIcon,
  LeoIcon,
  VirgoIcon,
  LibraIcon,
  ScorpioIcon,
  SagittariusIcon,
  CapricornIcon,
  AquariusIcon,
  PiscesIcon 
} from "../assets";

function HoroSvg({ activeTab }) {
  return (
    <div className={boxStyles.horoSvg}>
      {/* 星座svg圖位置 */}
      {activeTab === 'Aries' && <AriesIcon />}
      {activeTab === 'Taurus' && <TaurusIcon />}
      {activeTab === 'Gemini' && <GeminiIcon />}
      {activeTab === 'Cancer' && <CancerIcon />}
      {activeTab === 'Leo' && <LeoIcon />}
      {activeTab === 'Virgo' && <VirgoIcon />}
      {activeTab === 'Libra' && <LibraIcon />}
      {activeTab === 'Scorpio' && <ScorpioIcon />}
      {activeTab === 'Sagittarius' && <SagittariusIcon />}
      {activeTab === 'Capricorn' && <CapricornIcon />}
      {activeTab === 'Aquarius' && <AquariusIcon />}
      {activeTab === 'Pisces' && <PiscesIcon />}
    </div>
  );
}

export default HoroSvg;