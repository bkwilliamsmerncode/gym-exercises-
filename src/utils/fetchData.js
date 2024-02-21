export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: {limit: '1400'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      export const youtubeOptions = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
       
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com' ,
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY
        }
      }


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}