import reqest from 'supertest';
import { app } from '../src/server';

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await reqest(app).get('/');
        expect(response.status).toBe(200);
    });
});

describe('Test the /api/v1/post path', () => {

    test('It should response the POST method', async () => {
        const response = await reqest(app).post('/api/v1/post/create').send({
            title: 'Test Post',
            content: 'This is a test post',
        });
        expect(response.status).toBe(200);
    });

    test('It should response the GET method for GetAllData', async () => {
        const response = await reqest(app).get('/api/v1/post/getall');
        expect(response.status).toBe(200);
    });

    test('It should response the GET method with a single post', async () => {
        const response = await reqest(app).get('/api/v1/post/get/1');
        expect(response.status).toBe(200);
    });

    test('It should response the PUT method', async () => {
        const getAllResponse = await reqest(app).get('/api/v1/post/getall');
        const response = await reqest(app).put('/api/v1/post/update/1').send({
            "id": 3,
            "title": "Test Post Updated",
            "content": "This is a test post updated"
        });
        expect(response.status).toBe(200);
    });
});