export class User {
    login: String;
    url: String;
    name: String;
    followers: number;

    constructor(login: String, url: String, name: String, followers: number) {
        this.login = login;
        this.url = url;
        this.name = name;
        this.followers = followers;
    }
}