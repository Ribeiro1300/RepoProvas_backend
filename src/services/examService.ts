import { getRepository } from "typeorm";
import ExamEntity from "../entities/Exam";
import { ExamError, ExistingExamError } from "../error/examError";
import { Exam } from "../protocols/Exam";

export async function newExam(exam: Exam) {
  const existingExam = await getRepository(ExamEntity).find({
    select: ["name", "type", "subject_id", "professor_id"],
    where: {
      name: exam.name,
      type: exam.type,
      subject_id: exam.subject_id,
      professor_id: exam.professor_id,
    },
  });

  if (existingExam.length != 0) {
    throw new ExistingExamError("Prova já existente!");
  }

  const result = await getRepository(ExamEntity).create(exam);
  await getRepository(ExamEntity).save(result);

  if (!result.name) {
    throw new ExamError("Erro ao enviar a prova!");
  }
  return result;
}
