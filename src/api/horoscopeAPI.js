import axios from "axios";

export const getHoroscopeInfo = async ({ sign }) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: {sign, day: 'today'},
      headers: {
        'X-RapidAPI-Key': 'ed3e7429c4mshe6b415ebd0b1249p15d6fajsna5ed7ca7e9a8',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
      }
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};