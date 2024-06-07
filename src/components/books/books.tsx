import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from "@nextui-org/react";

import { EditIcon, DeleteIcon } from "./icons";
import styles from "./books.module.css";
import Categories from "./Categories";

import useBookStore from "@/hooks/use-data";

export default function Books() {
  const { books, categories, deleteBook } = useBookStore();

  const catName = (id: number): string => {
    const found = categories.find(v => v.id === id);

    return found ? found.name : "";
  };

  const onDelete = (id: number) => () => {
    deleteBook(id);
  };

  return (
    <div>
      <div className="flex justify-between">
        <Categories />
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
        <TableBody>
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
                      color="warning"
                      variant="flat"
                      size="sm"
                      className="mx-1"
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
                      <EditIcon />
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
