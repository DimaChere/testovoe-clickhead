"use client";
import { Product } from "@/lib/types";
import { addToCart } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";
import Button from "../button";

export default function ProductBlock({ product }: { product: Product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div
            key={product.id}
            className="flex flex-col gap-2 p-6 pt-4 pb-3 bg-slate-500 rounded-xl text-white text-wrap"
        >
            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <Button
                additionalStyles=""
                onClick={() => handleAddToCart(product)}
            >
                Add to cart
            </Button>
        </div>
    );
}
