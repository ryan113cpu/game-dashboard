Frontend game dashboard application. The application allows a user to manage their top 3 video games such as saving their favorite and tracking the time they play each. There is also a custom login and signup page which prevents the user from accessing the main page before filling in their details. The dashboard stores the information of the game cards and the hours played by the user in the browser's local storage hence ensuring easy accessibility even after closing and reopening the application.
Features
Auto-session timer: By clicking the start button, the card begins to track the time the game is in use by recording the exact time the 'start playing' button is clicked. Once the player clicks stop playing, the application stops the timer and stores the hours played in decimals while considering the miliseconds.
Login and Signup: On the dashboard page, the application's contents are hidden immediately on opening. The user is required to signup and log in with valid email and password created to access the application's main features. The local storage saves the created email and password on the user's device hence restricting direct access to the dashboard by modifying the URL.
Top 3 games customizer: On clicking the edit button on any of the game cards, a prompt appears allowing the user to rename the selected card. The name changes are immediately reflected on the dashboard.
Favorites toggle: The user can click on the star icon to mark any of the game cards as a favorite. This option is available even on reopening the application due to the local storage's ability to save array data types.
Files and How to use
The files are contained within a single folder with the following assets:
index.html: This file contains the application's web interface. It contains the necessary structures for the signup and login forms, game cards, and the settings container.
style.css: It contains the application's styling including dark mode, color variables, and the grid structure utilized.
script.js: This file contains the application's scripts and functionality. It handles the timer, log in procedures, and storage of the game cards and hours played in local storage.
How to test the application
Ensure that the three files mentioned above are contained within the same folder on a user's device.
Double-click the index.html file to visualize the application on a web browser such as Google Chrome.
On the dashboard page, the application's body is hidden. The user can then navigate to the 'create account' tab and set up an email and password to log in.
The user can then try the session timer by clicking the 'start playing' option on any of the game cards. However, ensure that the time played reaches up to 0.01 hours due to the script's ability to store data in decimals. As a result, waiting 0.01 hours (approximately 40 seconds) before clicking the stop button will display the visual changes on the game card.
