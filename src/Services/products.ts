import fallbackProducts from "../assets/protein-products.json";
import type { ProteinProduct } from "../Components/Home/ProteinGrid/types";

const products = fallbackProducts as ProteinProduct[];

// Keep the shop self-contained until a reachable product API is configured.
export async function getProducts(): Promise<ProteinProduct[]> {
  return products;
}

export async function getProduct(productId: string): Promise<ProteinProduct | undefined> {
  return products.find((product) => product.slug === productId || String(product.id) === productId);
}
