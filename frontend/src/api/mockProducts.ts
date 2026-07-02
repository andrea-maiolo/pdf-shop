import { Product } from "../types";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Ultimate Productivity Planner",
    description: "A complete 12-week PDF planner to organize your goals, daily tasks, and weekly reviews. Printable and fillable.",
    price: 9.99,
    coverImageUrl: "", // filled by Unsplash
    fileUrl: "https://your-storage.com/planner.pdf",
  },
  {
    id: 2,
    title: "Freelancer Contract Bundle",
    description: "3 ready-to-use legal contract templates for freelancers: client agreements, NDA, and project scope. Lawyer-reviewed.",
    price: 19.99,
    coverImageUrl: "",
    fileUrl: "https://your-storage.com/contracts.pdf",
  },
  {
    id: 3,
    title: "Notion Setup Masterclass",
    description: "A step-by-step PDF guide to building your perfect Notion workspace for life and work management.",
    price: 14.99,
    coverImageUrl: "",
    fileUrl: "https://your-storage.com/notion-guide.pdf",
  },
];

// one search term per product, matched by index
export const unsplashQueries = ["productivity planner desk", "freelancer contract business", "notion workspace minimal"];
