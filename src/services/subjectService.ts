import { getRepository } from "typeorm";

import Subject from "../entities/Subject";
import SubjectError from "../error/subjectError";

export async function getSubjects() {
  const subjects = await getRepository(Subject).find();
  if (subjects.length === 0) {
    throw new SubjectError("Nenhuma disciplina encontrada!");
  }
  return subjects;
}
