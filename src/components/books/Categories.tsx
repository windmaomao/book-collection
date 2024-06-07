import { useState } from "react";

import {
  Badge,
  Chip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";

import useData from "@/hooks/use-data";

export default function Categories() {
  const { categories, addCategory, removeCategory } = useData();
  const [value, setValue] = useState("");
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const filtered = categories.filter(v =>
    v.name.toLowerCase().startsWith(value.toLowerCase()),
  );

  const onAdd = () => {
    if (value) {
      addCategory(value);
      setValue("");
    }
  };

  const onRemove = (name: string) => () => {
    if (name) {
      removeCategory(name);
    }
  };

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
          <div className="flex flex-col gap-2">
            <div key="add" className="flex justify-between gap-1">
              <Input size="sm" value={value} onChange={onChange} />
              <Button color="primary" size="sm" onClick={onAdd}>
                +
              </Button>
            </div>
            <div>
              {filtered.map(({ id, name }) => (
                <Chip key={id} size="sm">
                  <span>{name}</span>
                  <button onClick={onRemove(name)}>x</button>
                </Chip>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
