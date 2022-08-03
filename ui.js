class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="container__card">
            <div class="container__card__row">
                    <div class="container__card__row__inf">
                        <img src="${user.avatar_url}">
                        <br>
                        <a href="${user.html_url}" target="_blank" class="container__card__row__inf__btn">View Profile</a>
                    </div>
                    <div class="container__card__row__inf2">
                        <div>
                            <span class="container__card__row__inf2__badge">Public Repos: ${user.public_repos}</span>
                            <span class="container__card__row__inf2__badge">Public gists: ${user.public_gists}</span>
                            <span class="container__card__row__inf2__badge">Followers: ${user.followers}</span>
                            <span class="container__card__row__inf2__badge">Following: ${user.following}</span>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <td>Company: ${user.company}</td>
                                </tr>
                                <tr>
                                    <td>Website/Blog: ${user.blog}</td>
                                </tr>
                                <tr>
                                    <td>Location: ${user.location}</td>
                                </tr>
                                <tr>
                                    <td>Member Since: ${user.created_at}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
            </div>
        </div>
        <br>
        <h3 class="container__card__page--heading">Latest Repos</h3>

        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = "";

        repos.forEach(function (repo) {
            output += `
                <div class="card card-body">
                    <div class="card-body__row">
                        <div class="card-body__row__1">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="card-body__row__2">
                            <span class="card-body__row__2__badge badge" target="_blank">Stars: ${repo.stargazers_count}</span>
                            <span class="card-body__row__2__badge badge" target="_blank">Watchers: ${repo.watchers_count}</span>
                            <span class="card-body__row__2__badge badge" target="_blank">Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `
        });

        // Output repos
        document.getElementById("repos").innerHTML = output;

    }

    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement("div");

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".search");

        const search = document.querySelector(".search__card");

        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
}