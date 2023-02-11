import axios from "axios";

const authToken = 'CWB-EBFA67CE-A815-4086-804F-9A83F0AD4FB2';
const currentWeatherURL = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${authToken}&locationName=`
const forecastURL = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${authToken}&locationName=`

//待串接"局屬氣象站-現在天氣觀測報告"API
export const getCurrentWeather = async (locationName) => {
  try {
    const res = await axios.get(`${currentWeatherURL}${locationName}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getForecast = async (cityName) => {
  try {
    const res = await axios.get(`${forecastURL}${cityName}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


