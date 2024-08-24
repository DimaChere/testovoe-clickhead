export interface Product {
    id: number;
    title: string;
    price: number;
}

export interface CartState {
    products: Product[];
}
