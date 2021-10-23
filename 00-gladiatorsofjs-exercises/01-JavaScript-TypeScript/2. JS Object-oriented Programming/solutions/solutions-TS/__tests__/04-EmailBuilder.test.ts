import { EmailBuilder } from "../04-EmailBuilder/EmailBuilder";

describe("Email Builder", () => {
  it("Should build an email", () => {
    const email = new EmailBuilder("sender@gmail.com", "receiver@gmail.com")
      .setTitle("title")
      .setHTML("<div></div>")
      .addCC(["mail1@gmail.com"])
      .addBCC(["mail2@gmail.com"])
      .build();

    expect(email).toHaveProperty("title", "title");
    expect(email).toHaveProperty("html", "<div></div>");
    expect(email).toHaveProperty("cc", ["mail1@gmail.com"]);
    expect(email).toHaveProperty("bcc", ["mail2@gmail.com"]);
  });

  it("Should throw error if sender or receiver is not valid email", () => {
    expect(() => new EmailBuilder("sender", "receiver@gmail.com").build()).toThrowError();
    expect(() => new EmailBuilder("sender@gmail.com", "receiver").build()).toThrowError();
  });
});
