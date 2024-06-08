import { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";

import { EditIcon, DeleteIcon } from "./icons";
import styles from "./books.module.css";
import Categories from "./Categories";
import Editor from "./Editor";

import useBookStore from "@/hooks/use-data";
import { Book } from "@/types/data";

export default function Books() {
  const { books, categories, deleteBook, editBook } = useBookStore();

  const catName = (id: number): string => {
    const found = categories.find(v => v.id === id);

    return found ? found.name : "";
  };

  const onDelete = (id: number) => () => {
    deleteBook(id);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [bookEdit, setBookEdit] = useState<Book>();
  const onEditStart = (id: number) => () => {
    const found = books.find(v => v.id === id);

    if (!found) return;
    setBookEdit(found);
    onOpen();
  };
  const onEditEnd = (book: Book | null) => {
    if (book) {
      editBook(book);
    }
    onOpenChange();
  };

  return (
    <div>
      <div className="flex justify-end">
        <Categories />
        {bookEdit && (
          <Editor
            key={bookEdit.id}
            book={bookEdit}
            close={onEditEnd}
            isOpen={isOpen}
          />
        )}
      </div>
      <Table aria-label="Example static collection table" color="primary">
        <TableHeader>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>AUTHOR</TableColumn>
          <TableColumn>GENRE</TableColumn>
          <TableColumn>RATING</TableColumn>
          <TableColumn>CATEGORY</TableColumn>
          <TableColumn>&nbsp;</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>
          {books.map(({ id, title, author, genre, rating, categories }) => (
            <TableRow key={id}>
              <TableCell>{title}</TableCell>
              <TableCell>{author}</TableCell>
              <TableCell>{genre}</TableCell>
              <TableCell className={styles.star}>
                {new Array(rating).fill("★").join("")}
              </TableCell>
              <TableCell>
                <div className={styles.tags}>
                  {categories.map(id => (
                    <Chip
                      key={id}
                      className="mx-1"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      {catName(id)}
                    </Chip>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Edit book">
                    <span className="text-large cursor-pointer active:opacity-50">
                      <EditIcon onClick={onEditStart(id)} />
                    </span>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete book">
                    <span className="text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon onClick={onDelete(id)} />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
