let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) => menu.addEventListener("click", (event) => getNewsByTopic(event)))

let searchButton = document.getElementById("search-button");
let url;

// 각 함수에서 필요한 url을 만든다
// api호출 함수를 부른다

const getNews = async() => {
    try{
        let header = new Headers({
            'x-api-key' : 'bmIy8Z4kdrrGIXjYjjfTCRjDnYdhPkXvHTPcDtO-JCI',
        });
        
        let response = await fetch(url,{headers:header});
        let data = await response.json();
        if(response.status == 200){
            news = data.articles;
            console.log(news);
            render();
        }else{
            throw new Error(data.message)
        }

    }catch(error){
        console.log("잡힌 에러는", error.message)
        errorRender(error.message)
    }
    
}

const getLatestNews = async() =>{
    url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`
        );
        getNews();
};

const getNewsByTopic = async (event) =>{
    let topic = event.target.textContent.toLowerCase();
    url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
    );
    getNews()
};

const getNewsByKeyword = async () => {
    // 1. 검색 키워드 읽어오기
    // 2. url에 검색 키워드 부치기
    // 3. 헤더 준비
    // 4. url 부르기
    // 5. 데이터 가져오기
    // 6. 데이터 보여주기

    let keyword = document.getElementById("search-input").value;
    url = new URL(
        `https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`
        );
    getNews()
};

const render = () => {
    let newsHTML = '';
    newsHTML = news
      .map((item) => {
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


    document.getElementById("news-board").innerHTML = newsHTML;
};

const errorRender = (message) => {
    let errorHTML = `<div class="alert alert-danger text-center" role="alert">
    ${message}
  </div>`
    document.getElementById("news-board").innerHTML = errorHTML;
}

searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews()