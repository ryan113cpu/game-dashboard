# Game Dashboard

Hey! Welcome to my Game Dashboard project. This is a simple, clean web app where you can keep track of your top 3 favorite games, customize their names whenever you want, and save your favorites. 

I also recently added a custom **Sign-Up and Login system** that works right inside the browser's memory, so your setup is saved whenever you close the page!

## 🚀 Features

* **Custom Login/Signup:** A clean login window that checks against your browser's local memory to let you in.
* **Top 3 Game Editor:** You can change your top 3 games on the fly, and they'll save automatically.
* **Favorites Button:** Click the star button to favorite a game, and it stays favorited even if you refresh.
* **Dark Mode Style:** Designed from scratch with an easy-on-the-eyes dark theme.

## 🛠️ Built With

* **HTML5** (Structure)
* **CSS3** (Grid layouts, clean card shapes, and custom input styling)
* **Vanilla JavaScript** (All the functionality, event listeners, and `localStorage` integration)

## 📁 File Structure

Everything is kept super simple and sits inside one single folder:
* `index.html` — The main layout of the website.
* `style.css` — The colors, fonts, and dark theme looks.
* `script.js` — The logic behind changing games, saving favorites, and checking passwords.

## 💻 How to Run It Locally

1. Download or clone this folder onto your computer.
2. Make sure `index.html`, `style.css`, and `script.js` are all in the exact same directory.
3. Simply double-click the `index.html` file, and it will open right up in your web browser!

## 🔑 Testing the Login

Since I haven't connected this to an external backend database yet, it uses your browser's **Local Storage** to remember you. Here is how to test it:
1. Open the page and head to the **Create Account** box.
2. Type in any email (like your school email or a fake one) and a password, then hit **Sign Up**.
3. Go down to the **Log In** box, type those exact same details, and click **Log In**.
4. The login card will instantly disappear and unlock the dashboard!

---
Feel free to tweak the styles or add more game cards if you're checking out my code!
