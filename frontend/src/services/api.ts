export type TestResponse = [string];

const get = (url: string) => fetch(url);

const post = <T>(url: string, data: T) =>
  fetch(url, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

class Api {
  constructor(readonly basePath: string = "/api") {}

  getTest = async () => {
    const url = this.getUrl("");

    const response = await get(url);
    const result: TestResponse = await response.json();

    return result;
  };

  getFakeMetric = async () => {
    const url = this.getUrl("test/");

    const data = {  metric_name: "dupsko" };

    const response = await post(url, data);
    const result: any = await response.json();

    return result;
  };

  getUrl = (endpoint: string) => {
    return `${this.basePath}/${endpoint}`;
  };
}

export const api = new Api();
