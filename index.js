let pixels = 0
let kaktusPixels = 0
let vovaId
let conteinerWidth
let vovaId2
let jumpInProces 

let dynoElement

const getDynoElement = () => {
    if (!dynoElement) {
        dynoElement = document.getElementById("head");
    }

    return dynoElement;
}

const onClickHandler = () => {
    if(jumpInProces === 1) {
        return
    }
    jumpInProces=1
    goUp()
}

let goDown = function() {
    if(pixels === 0){
        jumpInProces=0
        return
    }
    
    const dyno = getDynoElement();
    
    // lol.style.position = "relative";
    dyno.style.bottom = pixels + "px";
    pixels-= 2
    setTimeout(goDown, 10)
}

const kaktusPlace = () => {
    
}

let goUp = function() {
    if(pixels === 50){
        goDown() 
        return
    }
    const dyno = getDynoElement();
    // lol.style.position = "relative";
    
    dyno.style.bottom = pixels + "px";
    pixels+=2
    
    conteinerWidth = dyno.parentElement.getBoundingClientRect()
    setTimeout(goUp, 10)
    
}

let kaktusRun = function() {
    let kaktus = document.getElementById("kaktus")
    kaktus.style.right = kaktusPixels + "px";
    pixels+=2
}


    // if(vova === conteinerWidth.height) {
        //     vova = -50
    // }
    
    
let mouseDownHendler = function() {
    set()
}



let lolclear = function() {
    clearInterval(vovaId)
}

