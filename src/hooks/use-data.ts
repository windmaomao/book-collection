import { create } from "zustand";

import { categoriesMock } from "@/types/data";

let counter = 100;

interface Category {
  id: string;
  name: string;
}

interface BookState {
  categories: Category[];
  addCategory: (name: string) => void;
  removeCategory: (name: string) => void;
}

const useBookStore = create<BookState>()(set => ({
  categories: categoriesMock,
  addCategory: name =>
    set(state => ({
      categories: [...state.categories, { id: `${counter++}`, name }],
    })),
  removeCategory: name =>
    set(state => ({
      categories: state.categories.filter(v => v.name != name),
    })),
}));

export default useBookStore;
