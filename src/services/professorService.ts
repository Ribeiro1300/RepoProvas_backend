import { getRepository } from "typeorm";
import ProfessorBySubject from "../entities/ProfessorBySubject";
import Professor from "../entities/Professor";
import ProfessorError from "../error/professorError";

export async function getProfessors() {
  const allProfessors = await getRepository(Professor).find();
  if (allProfessors.length === 0) {
    throw new ProfessorError("Nenhum professor encontrado!");
  }

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
