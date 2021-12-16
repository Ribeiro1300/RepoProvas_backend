/* eslint-disable @typescript-eslint/no-unused-vars */
import { Response, Request, NextFunction, Errback } from "express";

export default async function (err: Errback, req: Request, res: Response, next: NextFunction) {
  console.log("Middleware de erro: ", err);
  return res.sendStatus(500);
}
