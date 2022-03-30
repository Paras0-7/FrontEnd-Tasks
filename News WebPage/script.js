const api ='312617c3f2d640b7822778e25358eda7';
const newsSection = document.querySelector('.news');
const newsCategory = document.querySelector('.category');
const type = document.querySelector('.type');
const heading = document.querySelector('.heading')
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const menuIcon= document.querySelector('.mobile-nav-icon[name="menu-outline"]');
const closeIcon = document.querySelector('.mobile-nav-icon[name="close-outline"]');
const secondNewsCategory = document.querySelectorAll('.nav-items-2 li');
// const getNews = async function(category){
// fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${api}`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data.articles)
//     news=data.articles;
// })
// };


const getNews = async function(category){
    try{
        const response =  await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=${api}`);
        const data = await response.json();
        return data.articles;
    }
    catch(err){
        alert("Sorry! Not able to load the news. Try refreshing the page")
    }


}


newsCategory.addEventListener('change',async function(){


    const category = newsCategory.value;
    type.textContent=category;
    if(category==='all'){
        category='world';
    }
    const news = await getNews(category);
    // console.log(news[0]);
    renderNews(news.slice(0,3));

    
    
})


secondNewsCategory.forEach(async function(category){
    category.addEventListener('click',async function(){


        
        type.textContent=category.textContent;
        const search = category.textContent;
        if(search==='all'){
            search='world';
        }
        const news = await getNews(search);
    
        renderNews(news.slice(0,3));
    
        header.classList.remove('nav-open');
    nav.classList.remove('nav-open');
        
    })

})
const renderNews = function(newsArray){
    newsSection.innerHTML="";
    newsArray.forEach(function(news){
        const html = `
    <article>
                <img class="article_img" src="${news.urlToImage}">
                <div class="news_details">
                    <h2>${news.title}</h2>
                    <p class="date">Posted on <span>${getDate(new Date(news.publishedAt))}</span></p>
                    <p class="description">
                    ${news.description}
                    </p>
                    <a class="news_url" href="${news.url}" target="_blank">Continue Reading</a>
                </div>
    </article>


    `;

   
    newsSection.insertAdjacentHTML('beforeend',html);
    });
    
};
const getDate = function(date){

    const months=['January','Feburary','March','April','May','June','July','August','Septmeber','October','November','December']
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} `;

}


const news = await getNews('world');
    // console.log(news[0]);
renderNews(news.slice(0,3));




menuIcon.addEventListener('click',function(){
    
    header.classList.add('nav-open');
    nav.classList.add('nav-open');
})

closeIcon.addEventListener('click',function(){
    header.classList.remove('nav-open');
    nav.classList.remove('nav-open');
})
// const renderNews = async function(x){
//     const news= await getNews('business');
//     const html = `
//     <article>
//                 <img class="article_img" src="${news[x].urlToImage}">
//                 <div class="news_details">
//                     <h2>${news[x].title}</h2>
//                     <p>Posted on<span>${new Date(news[x].publishedAt)}</span></p>
//                     <p>
//                     ${news.description}
//                     </p>
//                     <a href="${news[x].url}">Continue Reading</a>
//                 </div>
//     </article>


//     `
//     newsSection.insertAdjacentHTML('beforeend',html)
// }



// const author =news[0].author;
//     const title =news[0].title;
//     const date=new Date(news[0].publishedAt);
//     const description =news[0].description;
//     const imgUrl=news[0].urlToImage;
    // const newsUrl = news[0].url;







    // "https://gizmodo.com/all-the-latest-news-from-disney-universal-and-other-t-1848626128"
    // "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/08896d2bb1f9913ef4f8f3d99c327a7b.jpg"