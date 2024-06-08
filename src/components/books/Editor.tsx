import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";

import { Book } from "@/types/data";

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
  const { id, title, author, genre } = values;
  const onPress = () => {
    close(values);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={() => close(null)}>
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Book</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                label="Title"
                placeholder="Enter book title"
                value={title}
                onValueChange={onValueChange("title")}
              />
              <Input
                type="text"
                label="Author"
                placeholder="Enter book author"
                value={author}
                onValueChange={onValueChange("author")}
              />
              <Input
                type="text"
                label="Author"
                placeholder="Enter book author"
                value={genre}
                onValueChange={onValueChange("genre")}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onPress}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
