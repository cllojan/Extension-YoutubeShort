if (typeof init == "undefined") {
    const init = function () {
        let isActive = !!document.querySelector("ytd-reel-video-renderer[is-active] #overlay > ytd-reel-player-header-renderer > h2 > yt-formatted-string");
        let video = document.querySelector("#shorts-player > div.html5-video-container > video");
        var temp;
        if (video.dataset.noFullscreen && isActive) {
            let a= document.querySelector("#shorts-player > div.html5-video-container > video")
            let b = document.getElementById("shorts-player");
            let duration = a.duration || b.duration
            a.addEventListener("loadeddata",()=>{
                a.addEventListener("playing",(e)=>{                    
                    let tempDurt = e.target.duration|| duration ;
                    let time = (tempDurt-e.target.currentTime) * 1000;      
                    if(isNaN(time)) return;              
                    if(temp){
                        console.log("Temporizados Anterior",temp)
                        clearTimeout(temp)
                        temp = setTimeout(() => {                    
                            let next = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button")
                            next.click();
                        }, time);
                    }else{
                        temp = setTimeout(() => {                    
                            let next = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button")
                            next.click();
                        }, time);
                    }
                    
                })
            })
            
            a.addEventListener("pause",(e)=>{
                clearTimeout(temp)
            })              
            
            
        }


    }
    init();
}
