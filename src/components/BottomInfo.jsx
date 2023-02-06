import bottomStyles from "./BottomInfo.module.scss";
// import boxStyles from "../container/Box.module.scss";

function BottomInfo({ description, compatibility, mood, color, luckyNum, luckyTime}) {
  return (
    <div className="">
      <h5 className={bottomStyles.suggestTitle}>Your Daily Suggest...</h5>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tincidunt nulla. Ut velit libero, tincidunt at lectus non, pellentesque porta erat. {description}</p>
      <hr/>
      <p className="compatibility">Compatibility:<span>{compatibility}</span></p>
      <p className="mood">Mood:<span>{mood}</span></p>
      <p className="color">Color:<span>{color}</span></p>
      <p className="lucky_number">Lucky Number: <span>{luckyNum}</span></p>
      <p className="lucky_time">Lucky Time: <span>{luckyTime}</span></p>
    </div>
  );
}

export default BottomInfo;