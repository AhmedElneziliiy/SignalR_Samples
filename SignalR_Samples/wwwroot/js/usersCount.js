//create connection

var connectionUserCount = new signalR.HubConnectionBuilder()
    //.configurationLogging(signalR.LogLevel.Information)
    .withUrl("/hubs/userCount", signalR.HttpTransportType.WebSockets).build();

// connect to method that hub invokes recieve notification from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerText = value.toString();
});

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
});


//invoke hub methods
function newWindowLoadedOnClient() {
    connectionUserCount.invoke("NewWindowLoaded").then((value) => console.log(value));
}


//start connection

function fullfilled() {
    console.log("Connection to user Hub successfully");
    newWindowLoadedOnClient();
}

function rejected() {

}

connectionUserCount.start().then(fullfilled, rejected);