function emailCopyToClipboard(){const emailCopyToClipboard=document.getElementById("emailCopyToClipboard");navigator.clipboard.writeText("meownstermatt@gmail.com"),emailCopyToClipboard.classList.add("text-green-500"),emailCopyToClipboard.classList.remove("text-yellow-500"),setTimeout((()=>{emailCopyToClipboard.classList.remove("text-green-500"),emailCopyToClipboard.classList.add("text-yellow-500")}),1e3)}const cmdLinks=document.getElementById("cmdLinks"),cmdGames=document.getElementById("cmdGames"),cmdAbout=document.getElementById("cmdAbout"),cmdNotFound=document.getElementById("cmdNotFound"),input=document.getElementById("cmdText");input.addEventListener("keypress",(function(event){if("Enter"===event.key){event.preventDefault();var inputProcessed=document.getElementById("cmdText").value.replace(/\s/g,"").toLowerCase();switch(input.value="",inputProcessed){case"meow-l":case"meow--links":case"sudomeow-l":case"sudomeow--links":cmdLinks.classList.remove("hidden"),cmdGames.classList.add("hidden"),cmdAbout.classList.add("hidden"),cmdNotFound.classList.add("hidden");break;case"meow-g":case"meow--games":case"sudomeow-g":case"sudomeow--games":cmdLinks.classList.add("hidden"),cmdGames.classList.remove("hidden"),cmdAbout.classList.add("hidden"),cmdNotFound.classList.add("hidden");break;case"meow-a":case"meow--about":case"sudomeow-a":case"sudomeow--about":cmdLinks.classList.add("hidden"),cmdGames.classList.add("hidden"),cmdAbout.classList.remove("hidden"),cmdNotFound.classList.add("hidden");break;case"clear":case"sudoclear":cmdLinks.classList.add("hidden"),cmdGames.classList.add("hidden"),cmdAbout.classList.add("hidden"),cmdNotFound.classList.add("hidden");break;default:cmdLinks.classList.add("hidden"),cmdGames.classList.add("hidden"),cmdAbout.classList.add("hidden"),cmdNotFound.classList.remove("hidden")}}}));