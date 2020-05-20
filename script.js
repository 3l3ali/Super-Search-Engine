
let actions = {
    'google': 'https://www.google.com/search',
    'duckDuckGo': 'https://duckduckgo.com/',
    'bing': 'https://www.bing.com/search',
    'ask': 'https://www.ask.com/web'
};

window.addEventListener('load', function(){

    let form = document.getElementById('searchForm');

    form.addEventListener('submit', function(){
        let inputChecked = document.querySelector('input[name=engine]:checked');
        let searchEngine = inputChecked.value;
        let actionUrl = actions[searchEngine];
        
        event.target.setAttribute('action', actionUrl);
    });
});