let loggedInUser = localStorage.getItem("loggedInUser") ? localStorage.getItem("loggedInUser") : ""
console.log(typeof loggedInUser);

if (loggedInUser === ""){
    alert("U need to Login First")
    window.location.href = "/index.html";
}

function logout() {
    localStorage.removeItem("loggedInUser")
    window.location.href = "/signIn.html";
}
