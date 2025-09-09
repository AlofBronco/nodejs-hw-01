import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
  return data;
};
