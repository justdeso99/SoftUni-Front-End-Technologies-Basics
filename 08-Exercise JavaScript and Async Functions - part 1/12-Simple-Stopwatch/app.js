let stopWatchInterval;
let elapsedTime = 0;
let saveTimeInterval;

function startStopwatch(){
    
    console.log("Stopwatch Started");

    stopWatchInterval = setInterval(() => {
        elapsedTime++;
        console.log(`Elapsed time: ${elapsedTime} seconds`)
    }, 1000);

    saveTimeInterval = setInterval(async () => {
        await saveElapsedTime(elapsedTime)
    }, 5000);
}

function stopWatch(){
    clearInterval(stopWatchInterval)
    clearInterval(saveTimeInterval)
    saveTimeInterval = null
    stopWatchInterval = null
    elapsedTime = 0
    console.log("Stopwatch Stopped")
}

function saveElapsedTime(time){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Elapsed time saved: ${time}`)
            resolve();
        }, 500);
    })
}