# [Game](https://christianalamassi.github.io/Game/)

"Game" includes two easy games to play, user-friendly games for anyone who is looking for a nice pastime without having to concentrate too much, for example when using public transportation or taking a break. The user gets to play against the computer. The games are('tic tac toe') and ('throw the dice'), and the result shows both the player's as well as the computer's. When the game is over, it allows the user to play again which is provided also with the click of one button. The games are programmed with JavaScript and the website is designed with HTML/CSS.

<img src="/assets/images/recc.png">

## Features
On the first page of the program is the navigation site and then to the game page. In the following sectors, I will go into details for each site individually.

### Homepage
This section provides an navigation buttons to the games or contact the programmer.

<img src="/assets/images/indexhompa.png">

### Game Tic tac toe
- The section will allow the user to play X against the computer O.
- At the top of the page, the user can read the title of the game.
- To win the game, you need to set your "X" in a specific pattern which can be in a row, column, or curve.
- At the bottom, the user gets the option to click on the "Restart" button or the "Home" button, both of which can be easily identified by the added icons.
- At the end of the game, either the computer or the user wins, it will display the result of the game to tell them that the game is over and whether they have won or lost, then they can choose whether to play again or go back to the home page.

<img src="/assets/images/game1.png">

### Game Dice
- This section will allow the user to play the "Dice Game".
- On the top of the page the user can read the title of the game.
- Underneath are two pictures, each show two dice. Each picture shows the score of each dice throw, the left one shows the computer's score, the one on the right the user's score (which is zero for both at the start of the game, since none of the players has thrown the dice yet.).
- In between the pictures it shows the score that adds up the score of each round (as in dice throw) for both players. The user will see how many points they got as well as how many points the computer got. Below that there is the "Throw - Dice" button, easily to find for the user.
- In the bottom the user gets the options of clicking the "Restart" button or the "Home" button, both easily to identify with added symbols.
- At the end of the game, meaning either the computer or the user reached 15 points altogether, the user is shown an alert telling them that the game ist over and if they won or lost. The user has to click the "Okay" button on the alert. The screen than shows the result of the game again and the user then gets to choose whether to play again or go back to the homepage.

<img src="/assets/images/game2.png">

### info
It includes two descriptions for each game it describes how to play and win.
<img src="/assets/images/info.png">

### contact
- It has three inputs, name, email, and request, all of them are required to be filled. 
- It has two buttons, one to submit the request and the other to return to the home page.

<img src="/assets/images/contact.png">

## Technologies Used

### Languages
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) was used to add the style and layout of the site.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) was used for interaction

### Frameworks
- [Bootstrap](https://getbootstrap.com/) framwork for styling

### Others
- [Gitpod](https://www.gitpod.io/) was used for the version control of the website.
- [Font-Awesome](https://fontawesome.com/) For creating attractive UX with icons responsiveness.
- [Google-Fonts](https://fonts.google.com/) for typography
- [GitHub](https://github.com/) was used to host the code of the website.
- [gmail](https://mail.google.com/) to submit the request to email.
- [Favicon](https://www.favicon.cc/) Used for generating the website favicon.
- [amiresponsive](https://ui.dev/amiresponsive) Used to check responsive screen.
- [JsHint](https://jshint.com/) used for validating the javascript code.
- [Jigsaw](https://jigsaw.w3.org/css-validator/) CSS Validator Used for validating the CSS.
- [W3C](https://validator.w3.org/#validate_by_input) HTML Validator Used for validating the HTML.
- [Chrome-Del-Tools](https://developer.chrome.com/docs/devtools/) For debugging the project.
- [emojipedia](https://emojipedia.org/large-red-square) for emojis.

## Design
The colors 🟦,🟩, and ⬛ was used in the background because it is very comfortable for the eyes. Other colors were used as well as🟧,⬜,and🟥

## Accessability
I confirmed that the colors and fonts are clear for the users, by running it through the lighthouse in divtools.



## Testing

### Manually testing

- I tested my project in three different browsers (Chrome, Edge and Firefox) and the results were satisfying.
Chrome

- The game was tested on different screen sizes (laptop screens, desktop screens, tablet screens and phone screens) and I was content with the results here as well.


- The game is easy to use and play, the header and "About the game" are easy to understand for the user, even the game itself is very simple to understand.

### Lighthouse
<img src="/assets/images/ligh4.png">
<img src="/assets/images/light1.png">
<img src="/assets/images/light2.png">
<img src="/assets/images/light3.png">
<img src="/assets/images/light5.png">

## Validator Testing

### HTML
No errors were returned when passing through the official W3C validator.
<img src="/assets/images/gameone.png">
I kept the warning for UX reasons.
<img src="/assets/images/gametwo.png">
<img src="/assets/images/index.png">
The warning was kept because I couldn't delete the type so that the js would continue sending to the email correctly.
<img src="/assets/images/htmlcontact.png">
<img src="/assets/images/infohtml.png">

### CSS
No errors were found when passing through the official (Jigsaw) validator
<img src="/assets/images/indexcss.png">
<img src="/assets/images/onecss.png">
<img src="/assets/images/twocss.png">

### JavaScript
<img src="/assets/images/twojs.png">
<img src="/assets/images/onejs.png">


## Unfixed Bugs
- At the end of the tic tac game, the scoring area will show you the result before the last X or O is added to the panel.

- In the end of the dice game, the scoring area will show you the result after 14 points, instead of 15 points.

## Deployment
The site was deployed to GitHub pages through the following steps:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the main
Once the main has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link is here [Game](https://christianalamassi.github.io/Game/).

## Credits

### Content
Websits were used in coding the game
- To test HTML code [HTML-validator](https://validator.w3.org/#validate_by_input)
- To test CSS code [css-validator](https://jigsaw.w3.org/css-validator/)
- To test JavaScript [Jshint validator](https://jshint.com/)
- To check the program on different screen devices [amiresponsive](https://ui.dev/amiresponsive)
To get icons for buttons [fontawesome](https://fontawesome.com/)
- For the icon of the website [ficon](https://www.favicon.cc/)
- For font set [googlefont](https://fonts.google.com/)
- Learning from [W3school](https://www.w3schools.com/js/default.asp)
- Inspiration from [Love Maths](https://learn.codeinstitute.net/login?next=/courses/course-v1%3ACodeInstitute%2BLM101%2B2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/%3Fchild%3Dfirst)

### Media
- The images were taken from [pngimg](https://pngimg.com/)
- The click sound was taken from [pixabay](https://pixabay.com/sound-effects/search/button-click/)
- The click sound was taken from[vecteezy](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fx&psig=AOvVaw3_1pC_L3juuNsjV4oSJeuR&ust=1722437862622000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCOCw55uDz4cDFQAAAAAdAAAAABAJ)
