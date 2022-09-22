import { DataSource } from "typeorm";
import Skill from "../models/Skill";
import Wilder from "../models/Wilder";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill],
  logging: ["query", "error"],
});

export default dataSource;
