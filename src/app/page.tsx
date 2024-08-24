"use client";
import Cart from "@/components/cartProducts";
import ProductsListWrapper from "@/components/products-list";
import ProductsList from "@/components/products-list";

import Image from "next/image";

export default function Home() {
    return (
        <main className="flex justify-center bg-slate-200">
            <ProductsListWrapper />
        </main>
    );
}
