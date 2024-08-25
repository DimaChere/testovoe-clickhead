"use client";
import { Product } from "@/lib/types";
import { addToCart, removeFromCart } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import { Add, Remove } from "@mui/icons-material";
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

    const productsArr = Array.from(productsMap.entries()).sort();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="grid grid-cols-1 gap-5">
            {productsArr.map(([id, amount]) => {
                const product: Product | undefined = productsInfo.get(id);

                if (!product) {
                    return null;
                }

                return (
                    <div
                        key={id}
                        className="flex flex-col gap-3 min-w-[320px] px-9 py-4 rounded-3xl bg-slate-500 text-white"
                    >
                        <h3 className="text-xl">{product?.title}</h3>
                        <div className="flex justify-center">
                            <div className="flex items-center justify-center rounded-full overflow-hidden h-10 bg-purple-300">
                                <button
                                    className="px-2 h-full hover:bg-purple-400 border-r border-white"
                                    onClick={() => handleRemoveFromCart(id)}
                                >
                                    <Remove />
                                </button>
                                <span className="w-9 text-center">
                                    {amount}
                                </span>
                                <button
                                    className="px-2 h-full hover:bg-purple-400 border-l border-white"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <Add />
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end items-end text-sm">
                            <span>
                                {product.price} * {amount}
                            </span>
                            <span className="text-2xl">|</span>
                            <span className="text-2xl">
                                {(product.price * amount).toFixed(2)}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
