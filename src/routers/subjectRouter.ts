import { Router } from "express";
import * as subjectController from "../controllers/subjectController";

const router = Router();

router.get("/subjects", subjectController.getAllSubjects);
// [
//   {
//     id: number,
//     subject: string,
//     semester: string,
//     qt:number
//   },
// ];

export default router;
