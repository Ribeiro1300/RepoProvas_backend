import { getRepository } from "typeorm";
import faker from "faker";
import Exam from "../../src/entities/Exam";

export async function createExam() {
  const exam = await getRepository(Exam).create({
    name: faker.name.findName(),
    type: faker.date.month(),
    subject_id: 1,
    professor_id: 1,
    link: faker.internet.url(),
  });

  await getRepository(Exam).save(exam);

  return { exam, subject_id: exam.subject_id };
}
