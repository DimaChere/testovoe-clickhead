"use client";
import { Product } from "@/lib/types";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function CartProducts() {
    const products = useSelector((state: RootState) => state.cart.products);
    const dispatch = useDispatch();

    let productsMap = new Map<number, number>();
    let productsInfo = new Map<number, Product>();

    for (const product of products) {
        productsMap.set(product.id, (productsMap.get(product.id) || 0) + 1);
    }

    for (const product of products) {
        if (!productsInfo.has(product.id)) {
            productsInfo.set(product.id, product);
        }
    }

    const productsArr = Array.from(productsMap.entries());

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            {productsArr.map(([id, amount]) => {
                const product: Product | undefined = productsInfo.get(id);

                if (!product) {
                    return null;
                }

                return (
                    <div key={id}>
                        <h3>{product?.title}</h3>
                        <p>{amount}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            +
                        </button>
                        <button onClick={() => handleRemoveFromCart(id)}>
                            -
                        </button>
                        <p>{product.price * amount}</p>
                    </div>
                );
            })}
        </div>
    );
}
