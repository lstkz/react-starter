import superagent from 'superagent';
import superagentPromise from 'superagent-promise';
import config from '../config';

const {API_URL} = config;

const request = superagentPromise(superagent, Promise);

export default class APIService {

  static login({email, password}) {
    return request
      .post(`${API_URL}/login`)
      .send({
        email,
        password,
      })
      .end()
      .then((res) => res.body);
  }

  static getMe() {
    return request
      .get(`${API_URL}/me`)
      .set('Authorization', `Bearer ${localStorage.token}`)
      .end()
      .then((res) => res.body);
  }
}
