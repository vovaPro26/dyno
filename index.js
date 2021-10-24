let pixels = 0
let kaktusElement
let kaktusPixels = 1015
let kaktusInRun
let vovaId
let vovaId2
let jumpInProces  
let dynoElement
let stopDino

const getDynoElement = () => {
    if (!dynoElement) {
        dynoElement = document.getElementById("head");
    }
    
    return dynoElement;
}
const dyno = getDynoElement();


const getKaktusElement = () => {
    if (!kaktusElement) {
        kaktusElement = document.getElementById("kaktus")
        
    }
    
    return kaktusElement;
}
const kaktus = getKaktusElement()

const isCrashed = function() {
    let dynoPlace
    let kaktusPlace
    kaktusPlace = kaktus.getBoundingClientRect()
    dynoPlace = dyno.getBoundingClientRect()
    
    const crashedIsDone = crash(kaktusPlace, dynoPlace);
    console.log(crashedIsDone)
    return crashedIsDone
}

const crash = function(kaktusPlace, dynoPlace) {
    console.log(`Dyno.X: ${dynoPlace.x}`)
    console.log(`Dyno.Y: ${dynoPlace.y}`)
    console.log(`Dyno.Width: ${dynoPlace.width}`)
    console.log(`Dyno.Height: ${dynoPlace.height}`)
    console.log(`Dyno.Top: ${dynoPlace.top}`)
    console.log(`Dyno.Bottom: ${dynoPlace.bottom}`)
    console.log(`Dyno.Left: ${dynoPlace.left}`)
    console.log(`Dyno.Right: ${dynoPlace.right}`)
    
    console.log(`kaktus.X: ${kaktusPlace.x}`)
    console.log(`kaktus.Y: ${kaktusPlace.y}`)
    console.log(`kaktus.Width: ${kaktusPlace.width}`)
    console.log(`kaktus.Height: ${kaktusPlace.height}`)
    console.log(`kaktus.Top: ${kaktusPlace.top}`)
    console.log(`kaktus.Bottom: ${kaktusPlace.bottom}`)
    console.log(`kaktus.Left: ${kaktusPlace.left}`)
    console.log(`kaktus.Right: ${kaktusPlace.right}`)
    if(dynoPlace.x > kaktusPlace.x + kaktusPlace.width){
        console.log(dynoPlace.bottom)
        return false
    }

    if( dynoPlace.y + dynoPlace.height >=  kaktusPlace.y && dynoPlace.x + dynoPlace.width >= kaktusPlace.x ){
        // alert("alksjdfka;dkaf")
        stopDino=1
        return true
    }
    

    return false;

}

const onClickHandler = () => {
    if (stopDino===1) {
        return
    }
    if(jumpInProces === 1) {
        return
    }
    
    jumpInProces=1
    goUp()
    if(kaktusInRun === 1) {
        return
    }
    kaktusInRun=1
    kaktusRun()
}

let goDown = function() {
    if(pixels === 0){
        jumpInProces=0
        return
    }
    
    
    // lol.style.position = "relative";
    dyno.style.bottom = pixels + "px";
    pixels-= 2
    setTimeout(goDown, 10)
}



let goUp = function() {
    if(pixels === 74){
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
    kaktus.style.left = kaktusPixels + "px";
    kaktusPixels-=2
    const crash = isCrashed()

    if(crash){
        jumpInProces = 1
        alert("здох")
        return
    }
    if(kaktusPixels === -15) {
        kaktusPixels = 1015
    }
    setTimeout(kaktusRun, 10)
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

