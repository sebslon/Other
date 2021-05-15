import { generateHuman, User } from "../05-generateHuman";

describe("generateHuman function", () => {
  let randomUser: User;

  beforeAll(async () => {
    randomUser = await generateHuman();
  });

  it("Should return user object with given properties", async () => {
    const keys = [
      "id",
      "name",
      "surname",
      "age",
      "phoneNumber",
      "email",
      "country",
    ];

    expect(Object.keys(randomUser)).toEqual(keys);
  });

  it("User email should be in format {name}{surname}@gmail.com", () => {
    const emailFormat = `${randomUser.name.toLowerCase()}${randomUser.surname.toLowerCase()}@gmail.com`;
    expect(randomUser.email).toBe(emailFormat);
  });

  it('User age should be in range 18-85', () => {
    expect(randomUser.age).toBeLessThanOrEqual(85);
    expect(randomUser.age).toBeGreaterThanOrEqual(18);
  })
});
