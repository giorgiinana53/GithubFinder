class Github {
    constructor() {
        this.client_id = "cd0f0bab883b3d1c882d";
        this.client_secret = "4784508bf07576496b08842e4f1b45d63f219647";
        this.repos_count = 5;
        this.repos_sort = "created: asc"; 
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}