import { useState, useEffect } from "react";

import { Book } from "@/types/data";

const TOTAL = 100;
const rand = (v: number) => Math.floor(Math.random() * v);

export default function useData() {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      let res = await fetch(
        "https://fakerapi.it/api/v1/books?_quantity=" + TOTAL,
      );
      let json = await res.json();
      const data = json.data.map((v: any) => ({
        ...v,
        rating: rand(5) + 1,
        categories: new Array(rand(2) + 1).fill(0).map((_, i) => i + 1),
        tags: [],
      }));

      setData(data);
      setLoading(false);
    }

    load();
  }, []);

  return {
    data,
    loading,
  };
}
