import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Professor } from "../protocols/Professor";

@Entity("professors")
export default class ProfessorEntity implements Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  qt: number;
}
