const github = new Github;
const ui = new UI;

const searchUser = document.getElementById("searchUser");
const profile = document.getElementById("profile");
const footer = document.getElementById("footer");

searchUser.addEventListener("keyup", function (e){
    
    const userText = e.target.value;

    if (userText == "") {
        profile.style.boxShadow = "none";
        footer.style.marginTop = "0px";
    }  

    if(userText != ""){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found") {
                ui.showAlert("User not found", "alert");
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                footer.style.marginTop = "20px";
            }
        });
    } else {
        ui.clearProfile();
    }
});