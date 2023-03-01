import type { Models } from "appwrite";

export interface Student extends Models.Document {
  name: string;
  description: string;
  short_description: string;
}
