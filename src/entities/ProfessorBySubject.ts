import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import ProfessorEntity from "./Professor";

@Entity("professor_subject")
export default class ProfessorBySubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject_id: number;

  @Column()
  professor_id: number;

  @OneToOne(() => ProfessorEntity, { eager: true })
  @JoinColumn({ name: "professor_id" })
  name: ProfessorEntity;
}
