import { useNavigate } from "react-router-dom";
import { Product } from "../types";
import { useUnsplashImage } from "../hooks/useUnsplashImage";
import { unsplashQueries } from "../api/mockProducts";

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const navigate = useNavigate();
  const { imageUrl, loading } = useUnsplashImage(unsplashQueries[index]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md duration-200">
      {/* Cover image */}
      <div className="h-48 bg-gray-100 overflow-hidden">
        {loading ? (
          <div className="h-full w-full animate-pulse bg-gray-200" />
        ) : imageUrl ? (
          <img src={imageUrl} alt={product.title} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">No image</div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h2 className="text-base font-semibold text-gray-800 leading-snug">{product.title}</h2>
          <span className="text-indigo-600 font-bold text-sm whitespace-nowrap">€{product.price.toFixed(2)}</span>
        </div>

        <p className="text-sm text-gray-500 flex-1 leading-relaxed">{product.description}</p>

        <button
          onClick={() => navigate(`/checkout/${product.id}`)}
          className="mt-5 w-full bg-indigo-600 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all duration-150"
        >
          Buy for €{product.price.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
