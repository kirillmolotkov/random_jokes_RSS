const quote = document.querySelector('.quote');
const changeQuoteButton = document.querySelector('.btn');
const imgAuthor = document.querySelector('.img-autour');
const url = 'https://type.fit/api/quotes';
const urlImg = 'https://aws.random.cat/meow';
let langTargetButton = 0;
getQuoteEn ();
async function getQuoteEn () {
    try {
        const res = await fetch(url)
        const data = await res.json()
        randomQuote(data);
    } catch{
        console.log('error');
    }
}

function randomQuote (data){
    let randomNum = Math.floor(Math.random()*data.length)
        quote.textContent = data[randomNum].text;
}

async function getQuoteImg () {
    try {
        const res = await fetch(urlImg);
        const data = await res.json();
        imgAuthor.src = data.file;
    } catch{
        console.log('error');
    }
   
}

async function getQuotesRu () {
    const quotes = 'quoteru.json';
    const res = await fetch(quotes);
    const data = await res.json();
    randomQuote(data);
}

async function getQuotesBy () {
    const quotes = 'quoteby.json';
    const res = await fetch(quotes);
    const data = await res.json();
    randomQuote(data);

}

const filterBlock = document.querySelector('.lang');
const filterBtns = [...document.querySelectorAll('.btn-lng')];
const langButton1 = document.querySelector('.btn-lng1');
const langButton2 = document.querySelector('.btn-lng2');
const langButton3 = document.querySelector('.btn-lng3');

function toggleActiveFilterBtn (event){
    filterBtns.forEach((elem) => {
        elem.classList.remove('active-lang');
    });
    event.target.classList.add('active-lang');
}
filterBlock.addEventListener('click', toggleActiveFilterBtn)



changeQuoteButton.addEventListener('click', ()=>{
    let loader = imgAuthor.complete;
    if(loader){
    getQuoteImg();
    if(langButton1.classList.contains('active-lang')){
        getQuoteEn();
    }else if(langButton2.classList.contains('active-lang')){
        getQuotesRu();
    }else if(langButton3.classList.contains('active-lang')){
        getQuotesBy();
    }
    }
});