
const getLatestNews = () =>{
    let url = new URL('https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10');
    let header = new Headers({'x-api-key' : 'bmIy8Z4kdrrGIXjYjjfTCRjDnYdhPkXvHTPcDtO-JCI'})
    let response = fetch(url,{headers:header})
};

getLatestNews();