export type TestResponse = [string];

class Api {
  constructor(readonly basePath: string = "/api") {}

  getTest = async () => {
    const url = this.getUrl("");

    const response = await fetch(url);
    const result: TestResponse = await response.json();

    return result;
  };

  getUrl = (endpoint: string) => {
    return `${this.basePath}/${endpoint}`;
  };
}

export const api = new Api();
