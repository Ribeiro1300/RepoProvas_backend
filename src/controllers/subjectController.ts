import { Response, Request, NextFunction } from "express";
import * as subjectService from "../services/subjectService";

async function getAllSubjects(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await subjectService.getSubjects();

    res.send(result);
  } catch (e) {
    if (e.name === "SubjectError") {
      return res.status(404).send(e.message);
    }
    next(e);
  }
}

export { getAllSubjects };
