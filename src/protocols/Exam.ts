export interface Exam {
  name: string;
  type: string;
  subject_id: number;
  professor_id: number;
  link: string;
}

export interface ExamResponse {
  id: number;
  name: string;
  type: string;
  filter_name: string;
  link: string;
}
