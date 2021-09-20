const User = require("./users");

test("Can create a username", () => {
    let username1 = new User("JohnDoe");
});

test("author respects username argument", () => {
    let username1 = new User("JohnDoe");
    expect(username1.username).toBe("JohnDoe");
});

test("author respects username argument", () => {
    let username1 = new User("");
    expect(username1.username).toBe("null");
});