const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode);

    document.getElementById('color-box').style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

//Event Call
document.getElementById('btn').addEventListener(
    'click',
    getColor
)

//Initital Call
getColor();