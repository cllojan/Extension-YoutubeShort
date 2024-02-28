
if (typeof init == "undefined") {

    var temp;
    let path = window.location.pathname;
    
    const init = function () {
        let isactive = document.querySelector("ytd-reel-video-renderer[is-active]");
        let video = document.querySelector("#shorts-player > div.html5-video-container > video");
      
        var a = document.querySelector("#shorts-player > div.html5-video-container > video")
        var b = document.getElementById("shorts-player");            
        var duration = a.duration || b.getDuration()
        a.addEventListener("loadeddata", () => {
            
            a.addEventListener("playing", (e) => {
                let tempDurt = e.target.duration || duration;
                let time = (tempDurt - e.target.currentTime) * 1000;
                if (isNaN(time)) return;
                if (temp) {
                    clearTimeout(temp)
                    temp = setTimeout(() => {
                        let next = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button")
                        next.click();
                    }, time);
                } else {
                    temp = setTimeout(() => {
                        let next = document.querySelector("#navigation-button-down > ytd-button-renderer > yt-button-shape > button")
                        next.click();
                    }, time);
                    console.log("nose")
                }

            })
        })

        a.addEventListener("pause", (e) => {
            clearTimeout(temp)
        })



    }
    
    let reg = /shorts/gi;
    if (reg.test(path)) {
        window.onload = init()        
    } else {
        clearTimeout(temp);
    }


}
