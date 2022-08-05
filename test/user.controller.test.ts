import request from 'supertest'
import app from '../src'

//Very Simple Test
describe('POST User', () => {

  it('should create new user', async () => {
    const data = {
      "name": "Selesta_!",
      "username": "Kss-!",
      "email": "val@mail.com",
      "phone": "11122331",
      "website": "aala.com"
    };
    const res = await request(app)
      .post('127.0.0.1:8022/api/v1/user/')
      .send(data)
      .expect(500);
        
    expect(res.ok).toBeTruthy();
  });
});