const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const themeToggle = document.querySelector('.theme-toggle');
const formatToggle=document.querySelector('.format-toggle');
let timeFormat = 12; 
function updateTime(){
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (timeFormat === 12){
        hours = hours % 12;
        if( hours === 0){
            hours = 12;
        }
    }
    const timeString = `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}`;

    timeElement.textContent = timeString;

    const dateString = time.toLocaleDateString();
    dateElement.textContent=dateString;
}

function padZero(value) {
    return (value < 10 ? '0' : '') + value;
}

setInterval(updateTime, 1000);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

if(formatToggle) {
    formatToggle.addEventListener('click', () => {
        timeFormat = (timeFormat === 12) ? 24 : 12;
        updateTime();
    });
}