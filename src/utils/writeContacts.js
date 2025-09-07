import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const PATH = path.resolve(PATH_DB);

export const writeContacts = async (updatedContacts) => {
  const data = await fs.writeFile(PATH, JSON.stringify(updatedContacts));
  return data;
};
