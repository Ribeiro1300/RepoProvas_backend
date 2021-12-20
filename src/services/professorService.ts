import { getRepository } from "typeorm";
import ProfessorBySubject from "../entities/ProfessorBySubject";
import ProfessorEntity from "../entities/Professor";
import { Professor } from "../protocols/Professor";
import ProfessorError from "../error/professorError";
import ExamEntity from "../entities/Exam";
import { Exam } from "../protocols/Exam";

export async function getProfessors() {
  const allProfessors = await getRepository(ProfessorEntity).find();
  if (allProfessors.length === 0) {
    throw new ProfessorError("Nenhum professor encontrado!");
  }

  const exams = await getRepository(ExamEntity).find();
  allProfessors.map((info: Professor) => {
    const examsByProfessor = exams.filter((filter: Exam) => filter.professor_id === info.id);
    info.qt = examsByProfessor.length;
  });

  return allProfessors;
}
export async function getProfessorBySubject(subject_id: number) {
  const professors = await getRepository(ProfessorBySubject).find({ subject_id: subject_id });
  if (professors.length === 0) {
    throw new ProfessorError("Nenhum professor encontrado!");
  }

  const result = professors.map((info) => {
    return info.name;
  });

  return result;
}
