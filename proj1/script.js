var counter = document.querySelector(".counter");

var followers = document.querySelector(".followers");

let visitCount = 1;

setInterval( () => {
    if(visitCount < 1000)
    {
        visitCount++;
        counter.innerText = visitCount;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers on Facebook !";
}, 5000);