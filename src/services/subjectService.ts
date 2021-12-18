import { getRepository } from "typeorm";
import Exams from "../entities/Exam";
import { Exam } from "../protocols/Exam";
import SubjectEntity from "../entities/Subject";
import { Subject } from "../protocols/Subject";
import SubjectError from "../error/subjectError";

export async function getSubjects() {
  const subjects = await getRepository(SubjectEntity).find();

  if (subjects.length === 0) {
    throw new SubjectError("Nenhuma disciplina encontrada!");
  }

  const exams = await getRepository(Exams).find();
  subjects.map((info: Subject) => {
    const examsBySubject = exams.filter((filter: Exam) => filter.subject_id === info.id);
    info.qt = examsBySubject.length;
  });

  return subjects;
}
