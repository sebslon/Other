import request from "supertest";
import { server } from "../..";
import { ILogData } from "../types";

describe("Webhook endpoint", () => {
  const username = "test";

  describe("Add user action", () => {
    const data: ILogData<string> = {
      action: "addUser",
      data: username,
    };

    afterAll(() => {
      server.appForTest.close();
    });

    it("Responses with status 201 if user doesn't exist", async () => {
      const response = await request(server.appForTest)
        .post("/api/webhook/send-data")
        .send(data);
      expect(response.status).toBe(200);
    });
  });
});
