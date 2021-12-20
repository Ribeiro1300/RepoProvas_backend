import supertest from "supertest";
import { getConnection } from "typeorm";
import faker from "faker";
import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /professors", () => {
  it("should return all professors on the database and status 200", async () => {
    const result = await supertest(app).get("/professors");
    expect(result.status).toEqual(200);
    expect(result.body).not.toBeUndefined();
  });
});

describe("GET /professors/:subject_id", () => {
  it("should return professor by the subject and status 200", async () => {
    const result = await supertest(app).get("/professors/1");
    expect(result.status).toEqual(200);
  });
});
