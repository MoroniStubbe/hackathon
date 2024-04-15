// converts a div containing text to a div containing individual spans each containing a single character
function divTextToSpans(divID) {
    const textToSplit = document.getElementById(divID);
    const text = textToSplit.innerText;
    textToSplit.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.id = "span" + i.toString();
        textToSplit.appendChild(span);
    }
}

function applyRandomColor(divID) {
    var span = document.getElementById(divID);
    var colors = ["white", "red", "yellow", "orange", "blue", "green", "purple", "pink", "brown", "gray"];
    // var colors = ["white", "red"];
    var random = Math.floor(Math.random() * colors.length);
    span.style.color = colors[random];
}

function applyRandomFontWeight(divID) {
    var span = document.getElementById(divID);
    var fontWeights = ["normal", "bold"];
    var random = Math.floor(Math.random() * fontWeights.length);
    span.style.fontWeight = fontWeights[random];
}

function applyRandomTextDecoration(divID) {
    var span = document.getElementById(divID);
    // var textDecorations = ["overline", "line-through", "underline", "underline overline"];
    var textDecorations = ["line-through", "underline"];
    var random = Math.floor(Math.random() * textDecorations.length);
    span.style.textDecoration = textDecorations[random];
}

function toggleCapitalization(divID) {
    var span = document.getElementById(divID);
    if (span.innerHTML === span.innerHTML.toLowerCase()) {
        span.innerHTML = span.innerHTML.toUpperCase();
    }
    else {
        span.innerHTML = span.innerHTML.toLowerCase();
    }
}

// applies a random text style
// assumes a list of spans exist with numbered id formatted like: span999
function applyRandomTextStyle(spanIDLimit) {
    var random = Math.floor(Math.random() * spanIDLimit);
    var spanID = "span" + random.toString();
    var styleFunctions = [
        applyRandomColor, 
        applyRandomFontWeight, 
        // applyRandomTextDecoration, 
        // toggleCapitalization
    ];
    random = Math.floor(Math.random() * styleFunctions.length);
    styleFunctions[random](spanID);
}

document.addEventListener("DOMContentLoaded", function (event) {
    divTextToSpans("story");
    function loop() {
        applyRandomTextStyle(document.getElementById("story").children.length);
        setTimeout(loop);
    }
    for (var i = 0; i < 1000; i++) {
        loop();
    }
});