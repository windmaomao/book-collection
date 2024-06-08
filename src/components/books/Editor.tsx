import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";

import { Book } from "@/types/data";
import useBookStore from "@/hooks/use-bookstore";

interface EditorProps {
  isOpen: boolean;
  book: Book;
  close: (book: Book | null) => void;
}

export default function Editor({ isOpen, book, close }: EditorProps) {
  const [values, setValues] = useState<Book>(book);
  const onValueChange = (name: string) => (value: any) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onValuesChange = (vs: Selection) => {
    const cats = Array.from(vs)
      .map(v => parseInt(v as string))
      .sort();

    setValues({
      ...values,
      categories: cats,
    });
  };
  const { title, author, genre, categories } = values;
  const onPress = () => {
    close(values);
  };

  const { categories: categoryList } = useBookStore();

  return (
    <Modal isOpen={isOpen} onOpenChange={() => close(null)}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Book</ModalHeader>
            <ModalBody>
              <Input
                label="Title"
                placeholder="Enter book title"
                type="text"
                value={title}
                onValueChange={onValueChange("title")}
              />
              <Input
                label="Author"
                placeholder="Enter book author"
                type="text"
                value={author}
                onValueChange={onValueChange("author")}
              />
              <Input
                label="Author"
                placeholder="Enter book author"
                type="text"
                value={genre}
                onValueChange={onValueChange("genre")}
              />
              <Select
                label="Categories"
                placeholder="Select a category"
                selectedKeys={categories.map(v => `${v}`)}
                selectionMode="multiple"
                onSelectionChange={onValuesChange}
              >
                {categoryList.map(({ id, name }) => (
                  <SelectItem key={id}>{name}</SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onPress}>
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
