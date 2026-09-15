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
    let game1 = document.getElementById("gameInput1").value.trim();
    let game2 = document.getElementById("gameInput2").value.trim();
    let game3 = document.getElementById("gameInput3").value.trim();

    if (!game1 || !game2 || !game3) {
        return;
    }

    games = [game1, game2, game3];

    localStorage.setItem("games", JSON.stringify(games));

    document.getElementById("game1").textContent = games[0];
    document.getElementById("game2").textContent = games[1];
    document.getElementById("game3").textContent = games[2];

    gameSetup.style.display = "none";
});