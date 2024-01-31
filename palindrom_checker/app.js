let msg = document.getElementById("msg");
let result = document.getElementById("result");

reverseString = (text) => {
    let split = text.split("");
    let reverse = split.reverse();
    let join = reverse.join("");  
    console.log(join);  
    return join;
}


const palindromCheck = () => {
    console.log(msg.value.toLowerCase());
    text = msg.value.toLowerCase();

    if (text == reverseString(text)) {
        result.innerText = "is is palindrome";
    } else {
        result.innerText = "it is not Palindrom";
    }
}
