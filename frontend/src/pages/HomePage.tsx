import { ChangeEvent, useState } from "react";
import ProductCard from "../components/ProductCard";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;

const HomePage = function () {
  // Change this variable mapping depending on your bundler (Vite, Next, etc.)
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: SubmitEvent) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    searchUnsplashPhotos(searchQuery);
  };

  const [searchResult, setSearchResult] = useState<T[]>([]);

  async function searchUnsplashPhotos(query: string) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          // Unsplash expects the key in this exact format:
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.results);
      setSearchResult(data.results);
      console.log(searchResult);
    } catch (error) {
      console.error("Failed to fetch from Unsplash:", error);
      return [];
    }
  }

  // searchUnsplashPhotos("cyberpunk");

  return (
    <div>
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Digital guides, ready to download</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Buy once, get the PDF delivered straight to your inbox. No subscriptions, no fluff.</p>
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <input placeholder="search" name="searchbox" type="text" value={searchQuery} onChange={handleInputChange} className="border-4 border-blue-400" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            search
          </button>
        </form>
      </div>
      <div className="flex justify-evenly">
        {searchResult.map((photo) => (
          <ProductCard prod={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
