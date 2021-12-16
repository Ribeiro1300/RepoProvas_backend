import { Response, Request, NextFunction } from "express";
import * as examService from "../services/examService";

async function getExams(req: Request, res: Response, next: NextFunction) {
  try {
    res.send("Olá");
  } catch (e) {
    if (e.name === "ExamError") {
      return res.status(404).send(e.message);
    }
    next(e);
  }
}
async function newExam(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, type, subject_id, professor_id, link } = req.body;

    const result = await examService.newExam({
      name: name,
      type: type,
      subject_id: Number(subject_id),
      professor_id: Number(professor_id),
      link: link,
    });
    res.send(result);
  } catch (e) {
    if (e.name === "ExistingExamError") res.status(403).send(e.message);
    if (e.name === "ExamError") res.status(404).send(e.message);

    next(e);
  }
}

export { getExams, newExam };
