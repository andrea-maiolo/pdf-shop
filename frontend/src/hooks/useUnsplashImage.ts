import { useState, useEffect } from "react";

const ACCESS_KEY = import.meta.env.local.VITE_UNSPLASH_ACCESS_KEY;

export function useUnsplashImage(query: string) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    fetch(`https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data?.urls?.regular ?? "");
      })
      .catch(() => setImageUrl(""))
      .finally(() => setLoading(false));
  }, [query]);

  return { imageUrl, loading };
}
