import {
  Badge,
  Listbox,
  ListboxItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import getBooks from "./getBooks";

export default function Categories() {
  const { categories } = getBooks();

  return (
    <div>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <Button color="secondary" variant="light">
            <Badge color="danger" content={categories.length}>
              Categories &nbsp;&nbsp;
            </Badge>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Listbox
            aria-label="Single selection example"
            variant="flat"
            selectionMode="single"
          >
            {categories.map(({ id, name }) => (
              <ListboxItem key={id}>{name}</ListboxItem>
            ))}
          </Listbox>
        </PopoverContent>
      </Popover>
    </div>
  );
}
