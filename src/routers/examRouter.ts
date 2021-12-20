import { Router } from "express";
import * as examController from "../controllers/examController";

const router = Router();

router.get("/exams/:filter/:id", examController.getExams); //req.query
// [
//   {
//     id: number,
//     name: string,
//     type: string,
//     filter_name: string,
//     link: string
//   },
// ];

router.post("/exams", examController.newExam);

export default router;
