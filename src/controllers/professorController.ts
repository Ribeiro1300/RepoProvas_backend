import { Response, Request, NextFunction } from "express";
import * as professorService from "../services/professorService";

async function getAllProfessors(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await professorService.getProfessors();
    res.send(result);
  } catch (e) {
    if (e.name === "ProfessorError") {
      return res.status(404).send(e.message);
    }
    next(e);
  }
}

async function getProfessorsBySubject(req: Request, res: Response, next: NextFunction) {
  try {
    const subject_id = Number(req.params.subject_id);
    const result = await professorService.getProfessorBySubject(subject_id);
    res.send(result);
  } catch (e) {
    if (e.name === "ProfessorError") {
      return res.status(404).send(e.message);
    }
    next(e);
  }
}

export { getAllProfessors, getProfessorsBySubject };
