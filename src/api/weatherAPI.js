import axios from "axios";

const authToken = 'CWB-EBFA67CE-A815-4086-804F-9A83F0AD4FB2';
const baseURL = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${authToken}`

//待串接"局屬氣象站-現在天氣觀測報告"API
export const getCurrentWeather = async () => {
  try {
    const res = await axios.get(`${baseURL}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};



