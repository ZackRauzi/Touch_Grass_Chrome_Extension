// let timer = chrome.storage.local.get('timerAmount');
let timer = 3000;

function startTimer(){

    const message = `You've been reading too much MDN! \n Take break or keep going?`;

    const timesUp = window.confirm(message);

    if (timesUp) {
        //load youtube video
        window.open("https://www.youtube.com/results?search_query=stretches+for+programmers");
    } else {
        setTimeout(startTimer, timer);
    }
}

setTimeout(startTimer, timer);