import { Repository } from "typeorm";
import Skill from "../models/Skill";
import dataSource from "../tools/utils";

const repository: Repository<Skill> = dataSource.getRepository(Skill);

/**
 * Retrieve all skills from db.
 * @returns skills array
 */
const getAll = async (): Promise<Skill[]> => {
  return await repository.find();
};

/**
 * Retrieve a skill by name.
 * @param name skill name
 * @returns the skill if exists null otherwise
 */
const getByName = async (name: string): Promise<Skill | null> => {
  return await repository.findOneBy({
    name,
  });
};

/**
 * Create a new skill
 * @param name skill name
 * @returns the created skill
 */
const create = async (name: string): Promise<Skill> => {
  const skill: Skill | null = await getByName(name);
  if (skill !== null) {
    return skill;
  }
  return await repository.save({ name });
};

/**
 * Update an existing skill.
 * @param name new skill name
 * @param skillId existing skill id
 * @returns updated skill
 */
const update = async (name: string, skillId: number): Promise<Skill | null> => {
  const skill: Skill | null = await getByName(name);
  if (skill !== null) {
    throw new Error("Skill already exists");
  }
  await repository.update(skillId, { name });
  return await repository.findOneBy({ id: skillId });
};

export default {
  getAll,
  create,
  update,
};
