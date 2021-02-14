$( document ).ready(function() {
    console.log( "document loaded" );
});



// function to call functions on clicks
$(".pbtn").click(function () {
    console.log($(this).text())
    displayCard();
});

$(".pbtn").mouseover(function () {
    displayCard();
});

// hides card once you leave projects. I want to make this less dramatic, but I want the card to go away more. 
projects.onmouseleave = function () {
    console.log("yes")
    pcard.style.display = "none";
};


// array for populating cards
const projectArray = [
    {
        title: "Feed Me™",
        pics: "./Assets/feed-me.png",
        explanation: "Words",
        repo: "https://github.com/a-andres1/feed-me-tm",
        deploy: "https://a-andres1.github.io/feed-me-tm/",

    },

    {
        title: "Daily Planner",
        pics: "./Assets/CalendarApp.png",
        explanation: "words",
        repo: "https://github.com/a-andres1/fun-time-calendar-app",
        deploy: "https://a-andres1.github.io/fun-time-calendar-app/",

    },

    {
        title: "Weather Dashboard",
        pics: "./Assets/weatherchecker.png",
        explanation: "Words",
        repo: "https://github.com/a-andres1/weather-checker",
        deploy: "https://a-andres1.github.io/weather-checker/",

    },

]
// borrowed from previous project
//  initially hides card
pcard.style.display = "none";

// fuction to display the Quiz card on click
function displayCard() {
  console.log("Displaycard function ran");
  // once the start button is clicked, sets the card to its initial state
  if (pcard.style.display === "none") {
    pcard.style.display = "initial";
  }
//   // if start button is clicked again, will rehide the card
//   else {
//     pcard.style.display = "none";
//   }
}

