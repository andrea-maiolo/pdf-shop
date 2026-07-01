import { apiRequest } from "./client";
import type { AuthResponse } from "../types";

export const login = (email: string, password: string) =>
  apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });

export const register = (name: string, email: string, password: string) =>
  apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: { name, email, password },
  });
