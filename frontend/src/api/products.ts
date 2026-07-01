import { apiRequest } from "./client";
import type { Product } from "../types";

export const getProducts = () => apiRequest<Product[]>("/products");
