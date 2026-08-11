
// repeat some code while some condition is True

// let username = "";

// while(username===""){
//     username = window.prompt("Enter your username: ");

// }

// console.log(username);


loggedIn = false
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter Username: ");
    password = window.prompt("Enter password: ");

    if(username === "admin" && password==="1234"){
        loggedIn = true;
        console.log("You are logged in")
    }
}


