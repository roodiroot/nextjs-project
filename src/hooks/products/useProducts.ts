import { fetchProducts } from "@/lib/api/products";
import { useEffect, useState } from "react";

export function useProducts(params: string) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    async function load() {
      setLoading(true);
      const data = await fetchProducts(params);
      if (!cancel && data) setProducts(data.data);
      setLoading(false);
    }

    load();

    return () => {
      cancel = true;
    };
  }, [params]);

  return { products, loading };
}
