function attachEventsListeners() {
    let daysInput = document.getElementById("days");
    let hoursInput = document.getElementById("hours");
    let minutesInput = document.getElementById("minutes");
    let secondsInput = document.getElementById("seconds");

    document.querySelector('main').addEventListener("click", onCovert);

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function onCovert(event){
        if(event.target.type == 'button')
        {
            let input = event.target.parentElement.querySelector("input[type = 'text']");

            let inputInDays = Number(input.value) / ratios[input.id];
            let hoursToDisplay = inputInDays*ratios.hours;
            let minutesToDisplay = inputInDays*ratios.minutes;
            let secondsToDispaly = inputInDays*ratios.seconds;

            daysInput.value = inputInDays;
            hoursInput.value = hoursToDisplay;
            minutesInput.value = minutesToDisplay;
            secondsInput.value = secondsToDispaly;
        }
    }
}