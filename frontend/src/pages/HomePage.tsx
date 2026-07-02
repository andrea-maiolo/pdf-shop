// import { mockProducts } from "../api/mockProducts";
// import ProductCard from "../components/ProductCard";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string;
console.log(ACCESS_KEY);
export default function HomePage() {
  // Change this variable mapping depending on your bundler (Vite, Next, etc.)

  async function searchUnsplashPhotos(query: string) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12`;

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
      return data.results; // This is an array of photo objects
    } catch (error) {
      console.error("Failed to fetch from Unsplash:", error);
      return [];
    }
  }

  // searchUnsplashPhotos("cyberpunk");

  // Example usage:
  // searchUnsplashPhotos('cyberpunk').then(photos => console.log(photos));

  return (
    <div>
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Digital guides, ready to download</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Buy once, get the PDF delivered straight to your inbox. No subscriptions, no fluff.</p>
      </div>

      <input name="searchbox" type="text" className="border-4 border-blue-400" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">search</button>
      {/* Product grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div> */}
    </div>
  );
}
