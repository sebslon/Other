export interface RequestResult {
  status: boolean;
  response: unknown;
}

export interface HTTPRequestsWrapper {
  fetchURL(url: string): Promise<RequestResult>
}

export interface DataFromCache {
  cacheExists: boolean;
  data?: DataFromGoogleAPI;
}

export interface DataFromGoogleAPI {
  _id: string;
  selfLink: string;
  description: string;
}