// Check if the alert has been shown before

if (!localStorage.getItem('alertShown')) {
    alert("Quick check!!")
let QC = prompt("Are you a human??")
console.log(QC)
if (QC=="yes") {
    alert("Okey.. then you are good to go")
} else if (QC=="no") {
    alert("Then what are you 🤨??")
} else if (QC=="I am a robot") { 
    alert("Then I suppose you have no mind...  Soo why are you here??")
} else {
    alert("...")
}
// Set a flag in localStorage to indicate that the alert has been shown

    localStorage.setItem('alertShown', 'true');
}