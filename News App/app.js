// for small screen navigation bar
const togglebutton = document.getElementsByClassName('toggle-btn')[0];
const navlinks = document.getElementsByClassName('list')[0];
togglebutton.addEventListener('click',()=>{
            navlinks.classList.toggle('active');
    })



// API usage
const api_key = "84e197f0c69d4b3b8344cfb4629ff4c4";
const url ="https://newsapi.org/v2/everything?q=";

window.addEventListener('load',() => fetchnews("India"));

async function fetchnews(query){
    const res = await fetch(`${url}${query}&from=2023-05-30&to=2023-04-30&language=en&sortBy=publishedAt&apiKey=${api_key}`);
    const data = await res.json();
    console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardsContainer = document.getElementById('card-container');
    const template_news_card = document.getElementById('template_news');

    cardsContainer.innerHTML=''; //cleaning the innercontent

    articles.forEach(article => {
        // if(!article.urlToImage) return ;

        //creating clone of the pre-existing template
        const clonecard = template_news_card.content.cloneNode(true);

        //adding data in cards
        filldata(clonecard,article) ;
        //adding template to the main
        cardsContainer.appendChild(clonecard);

    });

}

function filldata(clonecard,article){
    const news_img =  clonecard.querySelector('#news-img');
    const headline = clonecard.querySelector('#headline');
    const news_by = clonecard.querySelector('#news-by');
    const news_des = clonecard.querySelector('#news-des');

    if(article.urlToImage!=null) 
    news_img.src = article.urlToImage;
    // else news_img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfG-WvgvtvvPi3e1i_8p37oBR5Ey8nVdclnA&usqp=CAU";

    const date = new Date(article.publishedAt).toLocaleString("en-US",{timeZone: "Asia/Jakarta"});
    news_by.innerHTML =  `${article.source.name} | ${date}` ;

    headline.innerHTML = article.title ;

    news_des.innerHTML = article.description ;

    clonecard.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
    })

}


let curactiveelem = null;
function itemclicked(id){
    fetchnews(id);
    const nav_item = document.getElementById(id);
    curactiveelem?.classList.remove("active");
    curactiveelem = nav_item ;
    curactiveelem.classList.add("active");
}

const searchvalue = document.getElementById("input-box");
const search_btn = document.getElementById("search");

search_btn.addEventListener('click',() => {
    if(!searchvalue.value) return ;
    fetchnews(searchvalue.value) ;
    curactiveelem?.classList.remove("active");
    curactiveelem = null;
});

//searching with enter key.
searchvalue.addEventListener('keydown',function(e){
    if(e.code=="Enter"){
        if(!searchvalue.value) return ;
        fetchnews(searchvalue.value) ;
        curactiveelem?.classList.remove("active");
        curactiveelem = null; 
    }
})

//relaoding window 
function reload(){
    window.location.reload()
}
