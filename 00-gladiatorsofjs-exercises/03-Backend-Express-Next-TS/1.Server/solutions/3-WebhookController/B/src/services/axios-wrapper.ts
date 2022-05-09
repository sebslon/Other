import axios, { AxiosInstance } from "axios";

import { IAxiosWrapper } from "../types";

export class AxiosWrapper implements IAxiosWrapper {
  async post<T, U>(url: string, payload: T): Promise<U> {
    const result = await axios.post(url, payload);

    return result.data;
  }

  async put<T, U>(url: string, payload: T): Promise<U> {
    const result = await axios.put(url, payload);

    return result.data;
  }
}
