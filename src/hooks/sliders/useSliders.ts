import { getHeroScreens } from "@/lib/api/sliders";
import { useEffect, useState } from "react";

export function useSliders(params: string) {
  const [sliders, setSliders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;

    async function load() {
      setLoading(true);
      const data = await getHeroScreens(params);
      if (!cancel && data) setSliders(data);
      setLoading(false);
    }

    load();

    return () => {
      cancel = true;
    };
  }, [params]);

  return { sliders, loading };
}
