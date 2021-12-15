import { Router } from "express";
import * as examController from "../controllers/examController";

const router = Router();

router.get("/exams/:professor/:subject?:filter", examController.getExams); //req.query
// [
//   {
//     id: number,
//     name: string,
//     type: string,
//     professor: string,
//     subject: string,
//     sumester: string,
//   },
// ];

router.post("/exams");

export default router;
