let games = JSON.parse(localStorage.getItem("games")) || ["Roblox", "Minecraft", "Hollow Knight"];

const gameSetup = document.getElementById("gameSetup");
const editGames = document.getElementById("editGames");
const saveGames = document.getElementById("saveGames");

document.getElementById("game1").textContent = games[0];
document.getElementById("game2").textContent = games[1];
document.getElementById("game3").textContent = games[2];

gameSetup.style.display = "none";

editGames.addEventListener("click", () => {
    gameSetup.style.display = "block";

    document.getElementById("gameInput1").value = games[0];
    document.getElementById("gameInput2").value = games[1];
    document.getElementById("gameInput3").value = games[2];
});

saveGames.addEventListener("click", () => {
    games[0] = document.getElementById("gameInput1").value;
    games[1] = document.getElementById("gameInput2").value;
    games[2] = document.getElementById("gameInput3").value;

    localStorage.setItem("games", JSON.stringify(games));

    document.getElementById("game1").textContent = games[0];
    document.getElementById("game2").textContent = games[1];
    document.getElementById("game3").textContent = games[2];

    gameSetup.style.display = "none";
});