import { ILogData } from "../types";

import { AxiosWrapper } from "./axios-wrapper";

class Webhook {
  private axiosWrapper = new AxiosWrapper();
  private apiURL = "http://localhost:3031/api";

  private addUserURL = this.apiURL + "/users/add";
  private loginURL = this.apiURL + "/users/logged-in";
  private logoutURL = this.apiURL + "/users/logged-out";
  private boughtProductURL = this.apiURL + "/users/bought-product";

  log(logData: ILogData<string>) {
    this.validateLog(logData);

    const { action, data } = logData;

    switch (action) {
      case "addUser":
        return this.addUser(data);
      case "userLoggedIn":
        return this.userLoggedIn(data);
      case "userLoggedOut":
        return this.userLoggedOut(data);
      case "userBoughtProduct":
        return this.userBoughtProduct(data);
    }
  }

  addUser(data: string) {
    return this.axiosWrapper.post(this.addUserURL + "/" + data, {});
  }
  userLoggedIn(data: string) {
    return this.axiosWrapper.post(this.loginURL + "/" + data, {});
  }
  userLoggedOut(data: string) {
    return this.axiosWrapper.post(this.logoutURL + "/" + data, {});
  }
  userBoughtProduct(data: string) {
    return this.axiosWrapper.post(this.boughtProductURL + "/" + data, {});
  }

  validateLog(logData: ILogData<string>) {
    if (!logData) throw new Error("Missing log data.");

    const { action, data } = logData;

    if (!action) throw new Error("Invalid action.");
    if (!data) throw new Error("Missing data.");
  }
}

export const webhook = new Webhook();
