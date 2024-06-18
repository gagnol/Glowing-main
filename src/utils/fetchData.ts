export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'ba31d65890msh898c24a9f9d30d0p17d607jsn12ec3f34fbfd',
    'x-rapidapi-host': 'youtube-v2.p.rapidapi.com' },
};

export const fetchData = async (url:any, options:any) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
