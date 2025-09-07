import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const PATH = path.resolve(PATH_DB);

export const readContacts = async () => {
  const data = await fs.readFile(PATH, 'utf-8');
  return JSON.parse(data);
};
