import axios, { AxiosError, AxiosResponse } from 'axios';

const defaultEndpoints = [
  'http://backend-defender:3031/api/images/first',
  'http://backend-defender:3031/api/images/second',
];

export class AttackingService {
  async attack(endpoints: string[] = defaultEndpoints, requestsAmount: number) {
    let attacks: Promise<unknown>[] = [];

    endpoints.forEach((endpoint: string) => {
      for (let i = 0; i < requestsAmount; i++) {
        attacks.push(this.requestUrl(endpoint));
      }
    });

    const attackResults = await Promise.allSettled(attacks);

    const successfulRequests = attackResults.filter(
      ({ status }) => status === 'fulfilled'
    ).length;

    const failedRequests = attackResults.length - successfulRequests;

    return {
      successfulRequests: successfulRequests,
      failedRequests: failedRequests,
    };
  }

  requestUrl(url: string) {
    return axios.get(url).then((res: AxiosResponse<any>) => res);
  }
}

export const attackingService = new AttackingService();
