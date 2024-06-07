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

import getBooks from "./getBooks";
import { EditIcon, DeleteIcon } from "./icons";
import styles from "./books.module.css";
import Categories from "./Categories";

export default function Books() {
  const { books, catLabels } = getBooks();

  return (
    <div>
      <div className="flex justify-between">
        <Categories />
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit book">
            <span className="text-large cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete book">
            <span className="text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      </div>
      <Table
        aria-label="Example static collection table"
        isStriped
        color="primary"
        selectionMode="single"
      >
        <TableHeader>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>AUTHOR</TableColumn>
          <TableColumn>GENRE</TableColumn>
          <TableColumn>RATING</TableColumn>
          <TableColumn>CATEGORY</TableColumn>
        </TableHeader>
        <TableBody>
          {books.map(
            ({ id, title, author, genre, rating, categories, tags }) => (
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
                        {catLabels[id]}
                      </Chip>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
}
