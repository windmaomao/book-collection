import { create } from "zustand";

import { Book, booksMock, Category, categoriesMock } from "@/types/data";

let counter = 100;

interface BookState {
  books: Book[];
  editBook: (book: Book) => void;
  deleteBook: (id: number) => void;
  categories: Category[];
  addCategory: (name: string) => void;
  removeCategory: (name: string) => void;
}

const useBookStore = create<BookState>()(set => ({
  books: booksMock,
  editBook: book =>
    set(state => {
      const found = state.books.find(v => v.id === book.id);

      if (found) {
        Object.assign(found, book);
      }

      return { books: [...state.books] };
    }),
  deleteBook: id =>
    set(state => ({
      books: state.books.filter(v => v.id != id),
    })),
  categories: categoriesMock,
  addCategory: name =>
    set(state => ({
      categories: [...state.categories, { id: counter++, name }],
    })),
  removeCategory: name =>
    set(state => ({
      categories: state.categories.filter(v => v.name != name),
    })),
}));

export default useBookStore;
