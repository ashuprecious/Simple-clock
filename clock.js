function updateClock()
{
    let currentTime=new Date();
    let currentHour=currentTime.getHours();
    let  currentMinutes=currentTime.getMinutes();
    let currentSeconds=currentTime.getSeconds();

    currentMinutes=(currentMinutes<10?"0":"")+currentMinutes;
    // currentHour=(currentHour<10?"0":"")+currentHour;
    currentHour=(currentHour>12?currentHour-12:currentHour);
    currentHour=(currentHour==0?12:currentHour);
    currentSeconds=(currentSeconds<10?"0":"")+currentSeconds;

    let timeOfDay=(currentHour <12 )?"AM":"PM";
    currentTimeStr=currentHour +":"+ currentMinutes +":"+currentSeconds +" "+timeOfDay;
   document.getElementById('clock').innerHTML= currentTimeStr;
}