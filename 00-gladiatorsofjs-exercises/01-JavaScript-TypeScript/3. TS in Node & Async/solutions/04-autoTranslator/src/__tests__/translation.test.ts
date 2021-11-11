import request from "supertest";

import { server } from "../../index";

describe("Translation Controller", () => {
  afterAll(async () => {
    server.close();
  });

  describe("POST api/translate", () => {
    it("Should translate object with given language", async () => {
      const expectedResult = {
        attention: {
          title: "Good that you are here, check this assignment",
          subtitle:
            "It will help you figure out how to switch languages in React apps",
          ctaButton: "Find out more",
        },
        newsletter: {
          title: "Stay updated",
          ctaButton: "Go to repo:",
          action: "/new-subscriber?lang=pl",
        },
      };
      const response = await request(server)
        .post("/api/translate")
        .send({ lang: "en" });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expectedResult);
    });

    it("Should send error message if given language is not supported", async () => {
      const response = await request(server)
        .post("/api/translate")
        .send({ lang: "test" });
      const errorMessage = "Given language is not supported.";

      expect(response.status).toBe(400);
      expect(response.body).toEqual(errorMessage);
    });
  });
});
