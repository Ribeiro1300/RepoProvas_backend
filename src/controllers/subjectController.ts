import { Response, Request, NextFunction } from "express";
import SubjectError from "../error/subjectError";
import * as subjectService from "../services/subjectService";

async function getAllSubjects(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await subjectService.getSubjects();

    res.send(result);
  } catch (e) {
    if (e instanceof SubjectError) {
      return res.status(404).send(e.message);
    }
    next(e);
  }
}

export { getAllSubjects };