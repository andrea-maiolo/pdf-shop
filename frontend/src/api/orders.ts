import { apiRequest } from "./client";
import { Order } from "../types";

export const createOrder = (productId: number) =>
  apiRequest<Order>("/orders", {
    method: "POST",
    body: { productId },
    auth: true,
  });
