import { ReactNode, createContext, useMemo } from "react";

import products from "../products.json";

interface Coffee {
  id: number;
  name: string;
  description: string;
  tags: string[];
  price: number;
  quantity: number;
  image: string;
}

interface ShopContextData {
  coffees: Coffee[];
}

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext({} as ShopContextData);

export function ShopProvider({ children }: ShopProviderProps) {
  const coffees: Coffee[] = products.coffees;

  const providerData = useMemo(() => ({ coffees }), [coffees]);

  return <ShopContext.Provider value={providerData}>{children}</ShopContext.Provider>;
}
