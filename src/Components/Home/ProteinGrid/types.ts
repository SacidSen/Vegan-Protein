export type ProductCategory =
  | "Plant Protein"
  | "Vegan Protein"
  | "Meal Replacement";

export type ProteinProduct = {
  id: number;
  name: string;
  category: ProductCategory;
  flavour: string;
  rating: number;
  reviews: number;
  protein: string;
  servings: number;
  price: number;
  oldPrice?: number;
  badge?: string;
  tone: string;
  available: boolean;
  slug?: string;
  description?: string;
  images?: string[];
};

export type ProteinFilter = "All" | ProductCategory | "On Sale";
