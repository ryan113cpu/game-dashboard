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
let favoriteButtons = document.querySelectorAll(".favorite");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

favoriteButtons.forEach((button, index) => {
    if (favorites.includes(index)) {
        button.textContent = "★ Favorited";
    }

    button.addEventListener("click", () => {
        if (favorites.includes(index)) {
            favorites = favorites.filter((item) => item !== index);
            button.textContent = "☆ Favorite";
        } else {
            favorites.push(index);
            button.textContent = "★ Favorited";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    });
});
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const messageBox = document.getElementById('message-box');
  if (localStorage.getItem(email)) {
    messageBox.textContent = "❌ An account with this email already exists.";
    messageBox.style.color = "red";
    return;
  }

  localStorage.setItem(email, password);
  messageBox.textContent = "🎉 Account created! Now try logging in below.";
  messageBox.style.color = "green";
  document.getElementById('signup-form').reset();
});
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const messageBox = document.getElementById('message-box');
  const savedPassword = localStorage.getItem(email);

  if (savedPassword && savedPassword === password) {
    messageBox.textContent = "🎉 Welcome back! You are logged in.";
    messageBox.style.color = "green";
    document.getElementById('auth-screen').style.display = 'none';

  } else {
    messageBox.textContent = "❌ Invalid email or password.";
    messageBox.style.color = "red";
  }
});
