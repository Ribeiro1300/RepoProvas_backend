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

describe("GET /exams/:filter/:filter_id", () => {
  it("should return all exams withing the filter ans status 200", async () => {
    const exam = await createExam();

    const result = await supertest(app).get(`/exams/subject/` + exam.subject_id);

    expect(result.body).not.toBeUndefined();

    expect(result.status).toBe(200);
  });
});

describe("POST /exams", () => {
  it("should return status 200 for valid params", async () => {
    const body = {
      name: faker.name.findName(),
      type: faker.date.month(),
      subject_id: 1,
      professor_id: 1,
      link: faker.internet.url(),
    };

    const result = await supertest(app).post("/exams").send(body);

    expect(result.status).toEqual(200);
  });
});
