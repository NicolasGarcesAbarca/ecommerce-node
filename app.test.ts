import { app } from "./app";
import request from "supertest";

// test get 
describe('test api', function () {
  test('pong', async function () {
    const response = await request(app).get('/api').send();
    expect(response.statusCode).toBe(200);
  })
});