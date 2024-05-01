// Email Copy
function emailCopyToClipboard() {
    const emailCopyToClipboard = document.getElementById("emailCopyToClipboard")
    const copyText = "meownstermatt@gmail.com";
    navigator.clipboard.writeText(copyText);
    emailCopyToClipboard.classList.add("text-green-500")
    emailCopyToClipboard.classList.remove("text-yellow-500")
    setTimeout(() => {
        emailCopyToClipboard.classList.remove("text-green-500")
        emailCopyToClipboard.classList.add("text-yellow-500")
    }, 1000);
}

function showLinks() {
    cmdLinks.classList.remove("hidden")
    cmdGames.classList.add("hidden")
    cmdAbout.classList.add("hidden")
    cmdNotFound.classList.add("hidden")
}

function showGames() {
    cmdLinks.classList.add("hidden")
    cmdGames.classList.remove("hidden")
    cmdAbout.classList.add("hidden")
    cmdNotFound.classList.add("hidden")
}

function showAbout() {
    cmdLinks.classList.add("hidden")
    cmdGames.classList.add("hidden")
    cmdAbout.classList.remove("hidden")
    cmdNotFound.classList.add("hidden")
}

function clearScreen() {
    cmdLinks.classList.add("hidden")
    cmdGames.classList.add("hidden")
    cmdAbout.classList.add("hidden")
    cmdNotFound.classList.add("hidden")
}

function commandNotFound() {
    cmdLinks.classList.add("hidden")
    cmdGames.classList.add("hidden")
    cmdAbout.classList.add("hidden")
    cmdNotFound.classList.remove("hidden")
}

// CLI Js
const cmdLinks = document.getElementById("cmdLinks")
const cmdGames = document.getElementById("cmdGames")
const cmdAbout = document.getElementById("cmdAbout")
const cmdNotFound = document.getElementById("cmdNotFound")
const input = document.getElementById("cmdText")
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var inputProcessed = document.getElementById("cmdText").value.replace(/\s/g, "").toLowerCase()
        input.value = ""

        switch (inputProcessed) {
            case "meow-l":
            case "meow--links":
            case "sudomeow-l":
            case "sudomeow--links":
                showLinks()
                break;

            case "meow-g":
            case "meow--games":
            case "sudomeow-g":
            case "sudomeow--games":
                showGames()
                break;

            case "meow-a":
            case "meow--about":
            case "sudomeow-a":                                
            case "sudomeow--about":
                showAbout()
                break;
        
            case "clear":
            case "sudoclear":
                clearScreen()
                break;

            default:
                commandNotFound()
                break;
        }
    }
});