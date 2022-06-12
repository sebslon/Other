import axios from "axios";

import { AppError } from "../helpers/error";

import { IAxiosWrapper } from "../types";

export class AxiosWrapper implements IAxiosWrapper {
  async post<T, U>(url: string, payload: T): Promise<U> {
    const result = await axios.post(url, payload).catch((err) => {
      throw new AppError(err.response.status, err.response.data.message);
    });

    return result.data;
  }

  async put<T, U>(url: string, payload: T): Promise<U> {
    const result = await axios.put(url, payload).catch((err) => {
      throw new AppError(err.response.status, err.response.data.error);
    });

    return result.data;
  }
}
