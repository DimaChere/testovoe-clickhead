"use client";
import CartProducts from "@/components/cart/cart-products";
import ConfirmCart from "@/components/cart/confirm-cart";
import EmptyCart from "@/components/cart/empty-cart";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
    const products = useSelector((state: RootState) => state.cart.products);
    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

    const handlePurchaseConfirmation = () => {
        setPurchaseConfirmed(true);
        setTimeout(() => setPurchaseConfirmed(false), 3000);
    };

    return (
        <main className="flex flex-1 flex-col items-center h-full">
            {purchaseConfirmed && (
                <div role="alert" className="alert alert-success mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Your purchase has been confirmed!</span>
                </div>
            )}
            <div className="flex flex-col gap-6 px-10 py-4 min-w-96 rounded-b-xl bg-slate-200">
                {products.length > 0 ? (
                    <>
                        <CartProducts />
                        <ConfirmCart onConfirm={handlePurchaseConfirmation} />
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </main>
    );
}
