export const API_URL = 'http://localhost:3010/api';

export class http {
  static async get<T>(url: string): Promise<T> {
    const response = await fetch(`${API_URL}${url}`);

    return response.json();
  }

  static async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    return response.json();
  }
}
