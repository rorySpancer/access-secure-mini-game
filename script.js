function check() {
    const resultElement = document.getElementById("resultElement");
    const rightPassword = "HUESOS";
    const inputPassword = document.querySelector("input").value;

    if (inputPassword === rightPassword) {
        resultElement.innerText = "ACCESS OPENED";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "TRY AGAIN";
        resultElement.style.color = "brown";
    }
}