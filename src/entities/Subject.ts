import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Subject } from "../protocols/Subject";

@Entity("subjects")
export default class SubjectEntity implements Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  semester: string;

  qt: number;
}
