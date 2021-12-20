import supertest from "supertest";
import { getConnection } from "typeorm";
import faker from "faker";
import app, { init } from "../../src/app";
import { createExam } from "../factories/examFactory";
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

describe("GET /subjects", () => {
  it("Should return all subjects on the database", async () => {
    const result = await supertest(app).get("/subjects");
    expect(result.status).toEqual(200);
    expect(result.body).not.toBeUndefined();
  });
});
