const projectList = document.getElementById('plist');

// function to call functions on clicks
projectList.onclick = function () {
    console.log("yes")
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