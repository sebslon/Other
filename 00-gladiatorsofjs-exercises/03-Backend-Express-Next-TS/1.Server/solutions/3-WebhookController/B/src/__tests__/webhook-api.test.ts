import request from "supertest";
import { server } from "../..";
import { ILogData } from "../types";

describe("Webhook endpoint", () => {
  const username = "test";

  describe("Add user action", () => {
    afterAll(() => {
      server.appForTest.close();
    });

    it("Responses with status 200 if user doesn't exist", async () => {
      const data = {
        action: "addUser",
        data: Math.random().toString(),
      };

      const response = await request(server.appForTest)
        .post("/api/webhook/send-data")
        .send(data);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ success: true });
    });

    it("Responses with status 400 if user already exists", async () => {
      const data = {
        action: "addUser",
        data: "same-user",
      };

      await request(server.appForTest)
        .post("/api/webhook/send-data")
        .send(data);

      const response = await request(server.appForTest)
        .post("/api/webhook/send-data")
        .send(data);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ message: "User already exists." });
    });
  });
});
