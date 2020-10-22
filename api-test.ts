/*
TEST 2
Add unit tests for a class implementation & it's consumers `ApiService`, `getUsers` and `createUser` which interact with a dummy API to create & list users.
You need to make sure -
1. There's at least 1 fail and success test for each API (get, post) call.
2. The data and the API calls are mocked.

You're free to be creative & use any library needed. Please document all scenarios necessary and add useful comments.
*/

import axios from 'axios';

type KeyValue = {
  [key: string]: any;
}

interface ApiServiceInterface {
  /**
   * Signature of a generic post call
   */
  post: (data: KeyValue, headers: KeyValue) => any;
  /**
   * Signature of a generic get call
   */
  get: (qs: string) => any;
}

interface User {
  id: number,
  name: string;
}

/**
 * The Api Service to interact with a dummy API
 */
class ApiService implements ApiServiceInterface {
  private readonly url = 'https://example.com/users';

  /**
   * Implementation of POST request to create a user
   * @param data
   * @param headers
   * @returns Promise<{
   *   "id": 1,
   *   "name": "Anon"
   * }>
   */
  public async post(data: KeyValue, headers: KeyValue): Promise<User>  {
    return (await axios({
      method: 'POST',
      url: this.url,
      responseType: 'json',
      data,
      headers
    })).data;
  }

  /**
   * Implementation of a GET request to get a list of users
   * @param qs
   * @returns Promise<[{
   *   "id": 1,
   *   "name": "Anon Name"
   * }]>
   */
  public async get(qs: string): Promise<User[]> {
    return (await axios({
      method: 'GET',
      url: `${this.url}?${qs}`,
      responseType: 'json',
    })).data;
  }
}

/**
 * Method to fetch users
 */
async function getUsers() {
  const apiService = new ApiService();
  return await apiService.get('_t=123');
}

/**
 * Method to create a new user
 * @param name
 */
async function createUser(name) {
  const apiService = new ApiService();
  return await apiService.post({
    name
  }, {
    'Authorization': 123
  });
}
