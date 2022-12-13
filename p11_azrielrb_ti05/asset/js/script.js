// jika hasil draw
ocument.querySelector("#option a").foraech((a) => {
    a.addeventlistener("click", (Element) => {
        computerchoice(element);
    })
})
function computercoice(element) {
    let pilihanuser = element.target.innertext;
    let pilihancomputer = document.querySelector("#result");
    let choices = ["Rock", "Paper", "Scissors"];
    pilihancomputer.innerHTML = choices[Math.round(math.random() * choices.lenght)]
    pilihancomputer = pilihancomputer.innerHTML ;
    if (pilihanuser == pilihancomputer) {
        alert("DRAW");
    }
}

// Jika pilihan user yang menang
if (pilihanuser == "Rock" && pilihancomputer == "Scissors") {
    alert("YOU WIN");
}else if(pilihanuser == "Paper" & pilihancomputer == "Rock") {
    alert("YOU WIN");
}else if(pilihanuser == "Scissors" & pilihancomputer == "Paper") {
    alert("YOU WIN");
}else{
    alert("Tidak Ada Pilihan");
}

// Jika Pilihan Komputer Menang
if (pilihanuser == "Scissors" && pilihancomputer == "Rock") {
    alert("LOSERS");
}else if(pilihanuser == "Paper" & pilihancomputer == "Rock") {
    alert("LOSERS");
}else if(pilihanuser == "Scissors" & pilihancomputer == "Paper") {
    alert("LOSERS");
}else{
    alert("Tidak Ada Pilihan");
}