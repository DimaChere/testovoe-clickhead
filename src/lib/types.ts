export interface Product {
    id: number;
    title: string;
    price: number;
}

export interface CartState {
    products: Product[];
}

export interface PayMethod {
    name: string;
    methodImg: string;
}

export interface Money {
    coins: number;
}

export interface DonateVariant {
    name: string;
    value: number;
    donateImg: string;
}
