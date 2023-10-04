/*
        if (!video.dataset.eventsSet) {
            video.dataset.eventsSet = true;
            let currentTime = 0;
            let duration = video.duration;
            console.log(duration);
            let playTemp = null;
            let time = duration * 1000;
            let temp = null;
            if (!isNaN(duration)) {

                console.log("loaded:", time);
                temp = setTimeout(() => {
                    console.log({currentTime,duration,time})
                    let next = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button")
                    next.click();
                }, time);      
                video.addEventListener('play', () => {
                   
                    console.log({play:"play",currentTime,duration,time})
                    playTemp = setTimeout(() => {
                        let next = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button")
                        next.click();
                    }, time);                    
                })
                video.addEventListener('pause', () => {  
                    clearTimeout(temp);
                    currentTime = video.currentTime;                    
                });                              
            } else {
                console.log("Es NaN");                               
            }           
        } else {
            console.log("Ya se ejecuto")
        }
*/
