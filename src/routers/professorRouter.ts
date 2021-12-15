import { Router } from "express";
import * as professorController from "../controllers/professorController";

const router = Router();

router.get("/professors", professorController.getAllProfessors);
// [
//   {
//     id: number,
//     professor: string,
//     qt: number,
//   },
// ];

router.get("/professors/:subject");
// [
//   {
//     id: number,
//     professor: string,
//   },
// ];

export default router;
