export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: {limit: '1300'},
        headers: {
          'X-RapidAPI-Key': '830a535306mshb17da78c42d5e7dp18245ajsnc5de813368e8',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      export const youtubeOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
            'X-RapidAPI-Key': '830a535306mshb17da78c42d5e7dp18245ajsnc5de813368e8'
        }
      }


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
}