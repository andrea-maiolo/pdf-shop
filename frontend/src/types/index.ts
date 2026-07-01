export interface Product {
  id: number;
  title: string;
  description: string;
  //   price: number;
  coverImageUrl: string; // from Unsplash
  fileUrl: string; // the PDF link sent by email
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Order {
  id: number;
  productId: number;
  userId: number;
  status: "PENDING" | "COMPLETED";
  createdAt: string;
}

export interface ApiError {
  message: string;
  status: number;
}
