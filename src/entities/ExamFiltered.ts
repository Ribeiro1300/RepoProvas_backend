import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import ProfessorEntity from "./Professor";
import SubjectEntity from "./Subject";
@Entity("exams")
export class ExamBySubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  subject_id: number;

  @Column()
  professor_id: number;

  @OneToOne(() => ProfessorEntity, { eager: true })
  @JoinColumn({ name: "professor_id" })
  entity: ProfessorEntity;

  filter_name: string;

  @Column()
  link: string;
}

@Entity("exams")
export class ExamByProfessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  subject_id: number;

  @Column()
  professor_id: number;

  @OneToOne(() => SubjectEntity, { eager: true })
  @JoinColumn({ name: "subject_id" })
  entity: SubjectEntity;

  filter_name: string;

  @Column()
  link: string;
}
