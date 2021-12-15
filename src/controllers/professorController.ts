import { Response, Request } from "express";

async function getAllProfessors(req: Request, res: Response) {
  try {
    res.send("Olá");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { getAllProfessors };
