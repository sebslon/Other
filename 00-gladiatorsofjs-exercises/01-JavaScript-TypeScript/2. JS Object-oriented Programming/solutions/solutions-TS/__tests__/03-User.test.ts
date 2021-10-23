import { App } from "../03-User/App";

describe("User", () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it("App can create user and admin", () => {
    const user = app.createUser("name", "surname", "email@email.com", "Password1@", "man");
    const admin = app.createAdmin("name2", "surname2", "email@email.com", "Password1@", "man");

    expect(app.listOfUsers.length).toBe(2)
  });

  it("Admin can change other user password, email and access", () => {
    const user = app.createUser("name", "surname", "email@email.com", "Password1@", "man");
    const admin = app.createAdmin("name2", "surname2", "email@email.com", "Password1@", "man");

    admin.changeOtherUserPassword(user, "New-password1");
    admin.changeOtherUserEmail(user, "new-email@gmail.com");
    admin.setAccess(user, "admin");

    const access = user.getAccess();

    expect(user.password).toBe("New-password1");
    expect(user.email).toBe("new-email@gmail.com");
    expect(access).toBe("admin");
  })

  it("User can't change other users access", () => {
    const user = app.createUser("name", "surname", "email@email.com", "Password1@", "man");
    const user2 = app.createAdmin("name2", "surname2", "email@email.com", "Password1@", "man");

    expect(() => user.setAccess(user2, "admin")).toThrowError();
    expect(() => user.setAccess(user2, "admin")).toThrowError();
  })
});
