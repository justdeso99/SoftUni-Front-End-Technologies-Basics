function toggle() {
    let button = document.getElementsByClassName("button")[0]


    let hiddenText = document.getElementById("extra");

    if (button.textContent === "More")
    {
        hiddenText.style.display = 'block';
        button.textContent = "Less";
    }
    else if (button.textContent === "Less"){
        hiddenText.style.display = 'none';
        button.textContent = "More";
    }
    
}