import tabStyles from "./TabList.module.scss";

const horoscopes = [
  {name: 'Aries', id: 0},
  {name: 'Taurus', id: 1},
  {name: 'Gemini', id: 2},
  {name: 'Cancer', id: 3},
  {name: 'Leo', id: 4},
  {name: 'Virgo', id: 5},
  {name: 'Libra', id: 6},
  {name: 'Scorpio', id: 7},
  {name: 'Sagittarius', id: 8},
  {name: 'Capricorn', id: 9},
  {name: 'Aquarius', id: 10},
  {name: 'Pisces', id: 11},
];

function TabList({ isTabShow, activeTab, setActiveTab }) {
  return (
    <ul className={`${tabStyles.tabList} ${isTabShow && tabStyles.show}`}>
      {horoscopes.map(horo => {
        return <li 
          key={horo.id} 
          className={`${tabStyles.tabItem} ${(activeTab === horo.name) && tabStyles.active}`} 
          data-id={horo.id}
          onClick={() => {
            setActiveTab(horo.name);
          }}
        >
          {horo.name}
        </li>
      })}
    </ul>
  );
}

export default TabList;