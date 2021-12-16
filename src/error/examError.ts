export class ExamError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ExamError";
  }
}
export class ExistingExamError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ExistingExamError";
  }
}
