class User {
    constructor(login, password, age) {
        this.login = login;
        this.password = password;
        this.age = age;
    }
}

let user1 = new User('Peter', '1234', 42);
let user2 = new User('Nancy', 'qwer', 20);
console.log(user1);
console.log(user2);