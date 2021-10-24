export interface RequestResult {
  status: boolean;
  response: unknown;
}

export interface HTTPRequestsWrapper {
  fetchURL(url: string): Promise<RequestResult>
}