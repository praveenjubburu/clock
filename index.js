const hoursEl=document.querySelector(".hours");
const minutesEl=document.querySelector(".minutes");
const secondsEl=document.querySelector(".seconds");

function updateclock(){
    const time=new Date();
    setTimeout(updateclock,100);
    const hour=time.getHours();
    const minute=time.getMinutes();
    const second=time.getSeconds();
    console.log(hour,minute,second);
    const hours=(hour/12)*360;
    const minutes=(minute/60)*360;
    const seconds=(second/60)*360;

    hoursEl.style.transform=`rotate(${hours}deg)`;
    minutesEl.style.transform=`rotate(${minutes}deg)`;
    secondsEl.style.transform=`rotate(${seconds}deg)`;
   
}
updateclock();