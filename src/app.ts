import "./setup";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import professorRouter from "./routers/professorRouter";
import subjectRouter from "./routers/subjectRouter";
import examRouter from "./routers/examRouter";
import serverMiddlewareErro from "./middleware/serverMiddlewareErro";
import connectDatabase from "./database/database";

import * as userController from "./controllers/userConroller";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users?:filter", userController.getUsers);

app.use(examRouter);
app.use(subjectRouter);
app.use(professorRouter);

app.use(serverMiddlewareErro);

export async function init() {
  await connectDatabase();
}

export default app;
