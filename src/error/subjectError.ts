export default class SubjectError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SubjectError";
  }
}
