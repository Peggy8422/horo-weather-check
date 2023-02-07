import bottomStyles from "./BottomInfo.module.scss";
// import boxStyles from "../container/Box.module.scss";

function BottomInfo({ description, compatibility, mood, color, luckyNum, luckyTime, isLoading}) {
  return (
    <div className="bottom">
      <h5 className={bottomStyles.suggestTitle}>Your Daily Suggest...</h5>
      <p className={bottomStyles.description}>{isLoading ? '...' : description}</p>
      <hr/>
      <p className="compatibility">Compatibility:<span>{isLoading ? '...' : compatibility}</span></p>
      <p className="mood">Mood:<span>{isLoading ? '...' : mood}</span></p>
      <p className="color">Color:<span>{isLoading ? '...' : color}</span></p>
      <p className="lucky_number">Lucky Number: <span>{isLoading ? '...' : luckyNum}</span></p>
      <p className="lucky_time">Lucky Time: <span>{isLoading ? '...' : luckyTime}</span></p>
    </div>
  );
}

export default BottomInfo;