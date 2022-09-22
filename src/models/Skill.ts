import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
