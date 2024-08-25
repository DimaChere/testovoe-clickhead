"use client";
import CartProducts from "@/components/cart/cart-products";
import ConfirmCart from "@/components/cart/confirm-cart";
import EmptyCart from "@/components/cart/empty-cart";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Cart() {
    const products = useSelector((state: RootState) => state.cart.products);

    return (
        <main className="flex flex-1 flex-col items-center h-full">
            <div className="flex flex-col gap-6 px-10 py-4 min-w-96 rounded-b-xl bg-slate-200">
                {products.length > 0 ? (
                    <>
                        <CartProducts />
                        <ConfirmCart />
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </main>
    );
}
