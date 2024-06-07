import { books, categories } from "./books.json";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  categories: number[];
  tags: number[];
}

export const booksMock = books;

export interface Category {
  id: number;
  name: string;
}

export const categoriesMock = categories;
