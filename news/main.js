let news = []
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) => menu.addEventListener("click", (event)=> getNewsByTopic(event)))
const getLatestNews = async() =>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`);
    let header = new Headers({'x-api-key' : 'bmIy8Z4kdrrGIXjYjjfTCRjDnYdhPkXvHTPcDtO-JCI'});

    let response = await fetch(url,{headers:header}); // 대표적으로 ajax, http, fetch가 있음
    let data = await response.json();
    news = data.articles;
    console.log(news);

    render()
};

const getNewsByTopic = async (event) =>{
    let topic = event.target.textContent.toLowerCase();
    let url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
    );
    let header = new Headers({
        'x-api-key' : 'bmIy8Z4kdrrGIXjYjjfTCRjDnYdhPkXvHTPcDtO-JCI'
    });
    let response = await fetch(url,{headers:header});
    let data = await response.json();
    news = data.articles
    render();
};

const render = () => {
    let newsHTML = ''
    newsHTML = news.map((item) => {
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}"/>
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>
                ${item.summary}
            </p>
            <div>
                ${item.rights} * ${item.published_date}
            </div>
        </div>
    </div>`;
    }).join('');


    document.getElementById("news-board").innerHTML = newsHTML

}

getLatestNews()