import { getRepository } from "typeorm";
import ExamEntity from "../entities/Exam";
import { ExamByProfessorEntity, ExamBySubjectEntity } from "../entities/ExamFiltered";
import { ExamError, ExistingExamError } from "../error/examError";
import { Exam, ExamResponse } from "../protocols/Exam";

export async function getExams(id: number, subject: string): Promise<ExamResponse[]> {
  let result;
  if (subject === "subject") {
    result = await getRepository(ExamBySubjectEntity).find({ subject_id: id });
  } else {
    result = await getRepository(ExamByProfessorEntity).find({ professor_id: id });
  }
  if (result.length === 0) throw new ExamError("Erro ao buscar a prova!");

  const exams:
    | ExamResponse
    | PromiseLike<ExamResponse>
    | { id: number; name: string; type: string; filter_name: string; link: string }[] = [];

  result.map((info) => {
    exams.push({
      id: info.id,
      name: info.name,
      type: info.type,
      filter_name: info.entity.name,
      link: info.link,
    });
  });

  return exams;
}

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

  if (existingExam.length != 0) throw new ExistingExamError("Prova já existente!");

  const result = await getRepository(ExamEntity).create(exam);
  await getRepository(ExamEntity).save(result);

  if (!result.name) throw new ExamError("Erro ao enviar a prova!");

  return result;
}
