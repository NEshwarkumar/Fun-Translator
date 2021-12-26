var btntranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")
var txtoutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/valspeak.json?text="

function getTranslationURL(input) {
    return serverURL + input
}

function errorhandler(error) {
    console.log("error", error);
    alert("Something is wrong , Try again later")
}

function clickHandler() {
    var inputText = txtinput.value
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
                        var translatedText = json.contents.translated;
            txtoutput.innerText = translatedText;
        })
        .catch(errorhandler)
}

btntranslate.addEventListener("click", clickHandler)