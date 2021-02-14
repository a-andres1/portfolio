$( document ).ready(function() {
    console.log( "document loaded" );
    console.log(projectArray[0].title);
});



// function to call functions on clicks
$(".pbtn").click(function () {
    console.log($(this).text())
    var proj = $(this).text()
    displayCard();
    writeCard(proj);
    console.log(typeof proj)
});

$(".pbtn").mouseover(function () {
    var proj = $(this).text()
    displayCard();
    writeCard(proj);
});

// hides card once you leave projects. I want to make this less dramatic, but I want the card to go away more. 
// projects.onmouseleave = function () {
//     console.log("yes")
//     pcard.style.display = "none";
// };

function writeCard(proj) {
if (proj === projectArray[0].title){
    $("#pjpic").attr({src: projectArray[0].pics, alt: projectArray[0].alt});
    $("#ctitle").text(projectArray[0].title);
    $("#ex").text(projectArray[0].explanation);
    $("#deployed").attr("href", projectArray[0].deploy);
    $("#repo").attr("href",projectArray[0].repo);
    $("#tyler").text("Tyler Gilbert").attr("href", "https://github.com/Tylergilbert913")
    $("#deepali").text("Deepali Garg").attr("href", "https://github.com/Deepali-Gtech")

}
else if (proj === projectArray[1].title){
    $("#pjpic").attr({src: projectArray[1].pics, alt: projectArray[1].alt}); 
    $("#ctitle").text(projectArray[1].title);
    $("#ex").text(projectArray[1].explanation);
    $("#deployed").attr("href", projectArray[1].deploy);
    $("#repo").attr("href",projectArray[1].repo);
    $("#tyler").text("");
    $("#deepali").text("");

}
else if (proj === projectArray[2].title){
    $("#pjpic").attr({src: projectArray[2].pics, alt: projectArray[2].alt}); 
    $("#ctitle").text(projectArray[2].title);
    $("#ex").text(projectArray[2].explanation);
    $("#deployed").attr("href", projectArray[2].deploy);
    $("#repo").attr("href",projectArray[2].repo);
    $("#tyler").text("");
    $("#deepali").text("");
}


}


// array for populating cards
const projectArray = [
    {
        title: "Feed Me™",
        pics: "./Assets/feed-me.png",
        alt: "screenshot of my project",
        explanation: "For this project I worked with two other group members. With our app, we tried to help people complete the arduous task of picking a restaurant for dinner. Start by picking your cuisine, enter your address, enter your friends address, and Feed Me will find a restaurant for you.",
        repo: "https://github.com/a-andres1/feed-me-tm",
        deploy: "https://a-andres1.github.io/feed-me-tm/",

    },

    {
        title: "Daily Planner",
        pics: "./Assets/CalendarApp.png",
        alt: "screenshot of my project",
        explanation: "For this project I set myself the task of generating everything through jQuery. I knew that everything in this project could be completed using jQuery, it would just take a little more thinking. I'm proud of completing this with minimal HTML.",
        repo: "https://github.com/a-andres1/fun-time-calendar-app",
        deploy: "https://a-andres1.github.io/fun-time-calendar-app/",

    },

    {
        title: "Weather Dashboard",
        pics: "./Assets/weatherchecker.png",
        alt: "screenshot of my project",
        explanation: "For this project I worked with the OpenWeather API to create a dashboard to check the weather in any given city.",
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

