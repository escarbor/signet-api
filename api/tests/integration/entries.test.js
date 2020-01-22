
const knex = require('../../database/testBootstrap');
const request = require("supertest");
const app = require("../../app");


describe("GET /entries", () => {
  
  beforeEach(() => {
    return knex.testSetup();
  });
  
  afterAll(() => {
    return knex.testCleanUp();
  });

  it("should return an array of Entries and a 200 status", () => {
    return request(app).get("/entries")
    .then((response) => {
        expect(response.body).toHaveLength(3);
        expect(response.body[0]).toHaveProperty("description");
        expect(response.body[0]).toHaveProperty("entry_id");
        expect(response.statusCode).toBe(200);
    });
  });
});

