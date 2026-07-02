import { mockProducts } from "../api/mockProducts";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Digital guides, ready to download</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Buy once, get the PDF delivered straight to your inbox. No subscriptions, no fluff.</p>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
