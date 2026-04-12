import { Product } from "../data/products";

export type RootStackParamList = {
    Home: undefined;
    ProductList: undefined;
    ProductDetail: { product: Product };
};
