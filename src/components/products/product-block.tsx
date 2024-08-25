"use client";
import { Product } from "@/lib/types";
import { addToCart } from "@/redux/features/cartSlice";
import { useDispatch } from "react-redux";

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
            <button
                className="btn btn-neutral border-none bg-purple-400 hover:bg-purple-500 text-white"
                onClick={() => handleAddToCart(product)}
            >
                Add to cart
            </button>
        </div>
    );
}
