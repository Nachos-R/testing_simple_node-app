const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page Not Found!'
                    });
                })
                .end(done);
        });
    });
    
    describe('GET /users', () => {
        it('should return user info from users array', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Yura',
                        age: 22
                    });
                })
                .end(done);
        });
    });  
});