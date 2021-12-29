/// <reference types="react-scripts" />

type CartItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
  includedInSum: boolean;
};

type Product = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

type ProductList = {
  products: Product[];
};
type Category = {
  name: string;
};
type CategoryList = {
  category: Category[];
};
