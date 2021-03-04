let signInButton = document.querySelector('#signup-login-button');
const find = str => document.querySelector(str);
let loginDivContainer = find('#login-div-container');
let loginForm = find('.login-form');
let body = document.querySelector('body');



// document.body.insertBefore(p, document.body.firstChild);

// let containerTweetbox = find('.container-tweetbox');
// let tweetContainerSub = find('.tweet-container-sub');
// let tweetSenderImageDiv = find('.tweet-sender-image-div');
// let tweetContainerSubRight = find('.tweet-container-sub-right');
// let tweetContainerSubRightHeader = find('.tweet-container-sub-right-header');
// let tweeterName = find('#tweeter-name');
// let biPatchCheckFill = find('.bi-patch-check-fill');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');
// let containerTweetbox = find('.container-tweetbox');


// let jack = 'jaburata';


// let tweetHTML = '<div class="container-tweetbox mb-3"><div class = "row tweet-container-sub mb-2" ><div class = "col-2 tweet-sender-image-div d-flex justify-content-center align-items-start" ><img class = "img-fluid rounded-circle tweet-sender-image" src = "images/photo_ABANOBI.png" alt = "image of the tweet sender" ></div><div class = "col-10 tweet-container-sub-right" ><div class = "row tweet-container-sub-right-header" ><span class = ""id = "tweeter-name" > < b > Your Name < /b> <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class = "bi bi-patch-check-fill" viewBox = "0 0 16 16" > <path d = "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" / ></svg> </span> <span class = "d.flex justify-content-start"id = "tweeter-username" >@loremipsum < span ><span class = "col-1"id = "head-dot text-center" > . < /span> <span class = "col-1"id = "hours-ago" > < /span> <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class = " col-2 bi bi-three-dots" viewBox = "0 0 16 16" ><path d = "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" / ></svg> </div><div class = "tweet-container-sub-right-body" ><div class = "actual-tweet" >' + jack + '< /div> </div><div class = "container" ><div class = "row tweet-container-sub-right-footer mt-3 justify-content-between" ><svg xmlns = "http://www.w3.org/2000/svg"width = "16" height = "16" fill = "currentColor" class = "col-3 bi bi-chat-right" viewBox = "0 0 16 16" ><path d = "M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" / ></svg> <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class = "col-3 bi bi-arrow-counterclockwise"viewBox = "0 0 16 16" ><path fill - rule = "evenodd" d = "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" / > <path d = "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" / ></svg> <svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" fill = "currentColor" class = "col-3 bi bi-heart" viewBox = "0 0 16 16" ><path d = "M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" / ></svg> <svg xmlns = "http://www.w3.org/2000/svg" width = "16"height = "16" fill = "currentColor" class = "col-3 bi bi-share" viewBox = "0 0 16 16" >< path d = "M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" / > </svg> </div > </div> < /div > </div></div>';


let containerTweetbox = find('.container-tweetbox');
let tweetContainerSub = find('.tweet-container-sub');
let tweetSenderImageDiv = find('.tweet-sender-image-div');
let tweetSenderImage = find('.tweet-sender-image');
let tweetContainerSubRight = find('.tweet-container-sub-right');
let tweetContainerSubRightHeader = find('.tweet-container-sub-right-header');
let tweeterName = find('#tweeter-name');
let tweetSvg = find('.tweetsvg');
let verified = find('.verified');
let tweeterUsername = find('#tweeter-username');
let headDot = find('#head-dot');
let hoursAgo = find('#hours-ago');
let tweet3Dots = find('tweet3dots');
let tweetContainerSubRightBody = find('.tweet-container-sub-right-body');
let actualTweet = find('.actual-tweet');
let tweetLastContainer = find('.tweet-last-container');
let tweetContainerSubRightFooter = find('.tweet-container-sub-right-footer');
let tweetFooterSvg1 = find('.tweet-footer-svg1');
let tweetFooterSvg2 = find('.tweet-footer-svg2');
let tweetFooterSvg3 = find('.tweet-footer-svg3');
let tweetFooterSvg4 = find('.tweet-footer-svg4');
let tweetFooterPath1 = find('.tweet-footer-path1');
let tweetFooterPath2 = find('.tweet-footer-path2');
let tweetFooterPath3 = find('.tweet-footer-path3');
let tweetFooterPath4 = find('.tweet-footer-path4');


let wholeMainContainer = find('.whole-main-container');
let submitTweetButton = find('.submit-tweet-button');
let recentTweet = wholeMainContainer.innerHTML;
let tweeText = find('#tweet-text')
let textToAdd = '';


submitTweetButton.addEventListener('click', (event) => {
    // console.log('textbox clicked');
    event.preventDefault();

    textToAdd = tweeText.value;
    let xcontainerTweetbox = document.createElement('div');
    xcontainerTweetbox.classList.add(...containerTweetbox.classList);
    wholeMainContainer.insertBefore(xcontainerTweetbox, wholeMainContainer.firstChild);

    let xtweetContainerSub = document.createElement('div');
    xtweetContainerSub.classList.add(...tweetContainerSub.classList);
    xcontainerTweetbox.insertBefore(xtweetContainerSub, xcontainerTweetbox.firstChild);

    let xtweetSenderImageDiv = document.createElement('div');
    xtweetSenderImageDiv.classList.add(...tweetSenderImageDiv.classList);
    xtweetContainerSub.insertBefore(xtweetSenderImageDiv, xtweetContainerSub.firstChild);

    let xtweetSenderImage = document.createElement('div');
    xtweetSenderImage.classList.add(...tweetSenderImage.classList);
    xtweetSenderImageDiv.insertBefore(xtweetSenderImage, xtweetSenderImageDiv.firstChild);

    let xtweetContainer = document.createElement('div');
    xtweetContainer.classList.add(...tweetContainer.classList);
    xtweetSenderImage.insertBefore(xtweetContainer, xtweetSenderImage.firstChild);

    let xtweetContainerSubRightHeader = document.createElement('div');
    xtweetContainerSubRightHeader.classList.add(...tweetContainerSubRightHeader.classList);
    xtweetContainer.insertBefore(xtweetContainerSubRightHeader, xtweetContainer.firstChild);

    let xtweeterName = document.createElement('div');
    xtweeterName.classList.add(...tweeterName.classList);
    xtweetContainerSubRightHeader.insertBefore(xtweeterName, xtweetContainerSubRightHeader.firstChild);

    let xtweetSvg = document.createElement('div');
    xtweetSvg.classList.add(...tweetSvg.classList);
    xtweeterName.insertBefore(xtweetSvg, xtweeterName.firstChild);

    let xverified = document.createElement('div');
    xverified.classList.add(...verified.classList);
    xtweetSvg.insertBefore(xverified, xtweetSvg.firstChild);

    let xtweeterUsername = document.createElement('div');
    xtweeterUsername.classList.add(...tweeterUsername.classList);
    xverified.insertBefore(xtweeterUsername, xverified.firstChild);

    let xheadDot = document.createElement('div');
    xheadDot.classList.add(...headDot.classList);
    xverified.insertBefore(xheadDot, xverified.firstChild);


    let xhoursAgo = document.createElement('div');
    xhoursAgo.classList.add(...hoursAgo.classList);
    xheadDot.insertBefore(xheadDot, xverified.firstChild);

    let xtweet3Dots = document.createElement('div');
    xtweet3Dots.classList.add(...tweet3Dots.classList);
    xhoursAgo.insertBefore(xtweet3Dots, xhoursAgo.firstChild);


    let xtweetContainerSubRightBody = document.createElement('div');
    xtweetContainerSubRightBody.classList.add(...tweetContainerSubRightBody.classList);
    tweetContainerSubRight.insertBefore(tweetContainerSubRightBody, tweetContainerSubRightBody.firstChild);












    xcontainerTweetbox.innerText = textToAdd;

    // document.body.insertBefore(p, document.body.firstChild);








    // console.log('I have been clicked !')
    tweeText.value = '';

});