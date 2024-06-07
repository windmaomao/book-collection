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
import getBooks from "./getBooks";
import styles from "./books.module.css";

export default function Books() {
  const { books, catLabels, tagLabels } = getBooks();

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>AUTHOR</TableColumn>
        <TableColumn>GENRE</TableColumn>
        <TableColumn>RATING</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>TAG</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {books.map(({ id, title, author, genre, rating, categories, tags }) => (
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
                    color="danger"
                    variant="flat"
                    size="sm"
                    className="mx-1"
                  >
                    {catLabels[id]}
                  </Chip>
                ))}
              </div>
            </TableCell>
            <TableCell className={styles.tags}>
              {tags.map(id => (
                <Chip key={id} color="warning" variant="flat" size="sm">
                  {tagLabels[id]}
                </Chip>
              ))}
            </TableCell>
            <TableCell>
              <div className="relative flex items-center gap-2">
                <Tooltip content="Edit book">
                  <span className="cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete book">
                  <span className="text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
