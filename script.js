let games = JSON.parse(localStorage.getItem("games")) || ["Roblox", "Minecraft", "Hollow Knight"];
let playtimes = JSON.parse(localStorage.getItem("playtimes")) || [0, 0, 0];
let activeTimers = [null, null, null];

const gameSetup = document.getElementById("gameSetup");
const editGames = document.getElementById("editGames");
const saveGames = document.getElementById("saveGames");

document.getElementById("game1").textContent = games[0];
document.getElementById("game2").textContent = games[1];
document.getElementById("game3").textContent = games[2];

document.getElementById("hours1").textContent = playtimes[0].toFixed(2);
document.getElementById("hours2").textContent = playtimes[1].toFixed(2);
document.getElementById("hours3").textContent = playtimes[2].toFixed(2);

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

function toggleTimer(index) {
    let btn = document.getElementById("timerBtn" + (index + 1));
    let display = document.getElementById("hours" + (index + 1));
    
    if (activeTimers[index] === null) {
        activeTimers[index] = Date.now();
        btn.textContent = "⏹ Stop Playing";
        btn.style.backgroundColor = "#ef4444";
        btn.style.color = "white";
    } else {
        let startTime = activeTimers[index];
        let endTime = Date.now();
        let msElapsed = endTime - startTime;
        
        let hoursElapsed = msElapsed / (1000 * 60 * 60);
        
        playtimes[index] += hoursElapsed;
        localStorage.setItem("playtimes", JSON.stringify(playtimes));
        
        display.textContent = playtimes[index].toFixed(2);
        
        activeTimers[index] = null;
        btn.textContent = "▶ Start Playing";
        btn.style.backgroundColor = "";
        btn.style.color = "";
    }
}

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
    document.getElementById('dashboard-content').style.display = 'block';
  } else {
    messageBox.textContent = "❌ Invalid email or password.";
    messageBox.style.color = "red";
  }
});

document.getElementById('logoutButton').addEventListener('click', () => {
    document.getElementById('dashboard-content').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'block';
    document.getElementById('login-form').reset();
    document.getElementById('message-box').textContent = "";
});
