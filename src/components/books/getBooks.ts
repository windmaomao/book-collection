import { books, categories, tags } from './books.json';

export default function getBooks() {
  const catLabels = categories.reduce((acc: any, c: any) => {
    acc[c.id] = c.name;

    return acc;
  }, {});

  const tagLabels = tags.reduce((acc: any, c: any) => {
    acc[c.id] = c.name;

    return acc;
  }, {});

  return {
    books,
    categories,
    catLabels,
    tags,
    tagLabels,
  };
}
