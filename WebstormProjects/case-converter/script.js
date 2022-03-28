let textArea = document.querySelector("textarea");

function uppercaseTokenFirstLetter(string, isSentence) {
    let separator

    if (isSentence) {
        separator = ". "
    } else {
        separator = " "
    }

    let tokens = string.toLowerCase().split(separator);
    for (let c = 0; c < tokens.length; c++) {
        tokens[c] = tokens[c][0].toUpperCase() + tokens[c].slice(1)
    }
    return tokens.join(separator)
}

function saveTextFile(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function makeUpperCase() {
    textArea.value = textArea.value.toUpperCase()
}

function makeLowerCase() {
    textArea.value = textArea.value.toLowerCase();
}

function makeProperCase() {
    textArea.value = uppercaseTokenFirstLetter(textArea.value, false);
}

function makeSentenceCase() {
    textArea.value = uppercaseTokenFirstLetter(textArea.value, true);
}


let upperCaseButton = document.getElementById("upper-case");
upperCaseButton.addEventListener("click", makeUpperCase);

let lowerCaseButton = document.getElementById("lower-case");
lowerCaseButton.addEventListener("click", makeLowerCase);

let properCaseButton = document.getElementById("proper-case");
properCaseButton.addEventListener("click", makeProperCase);

let sentenceCaseButton = document.getElementById("sentence-case");
sentenceCaseButton.addEventListener("click", makeSentenceCase);

let saveTextFileButton = document.getElementById("save-text-file");
saveTextFileButton.addEventListener("click", function () { saveTextFile("text.txt", textArea.value) });
