"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
    const products = useSelector((state: RootState) => state.cart.products);
    const coins = useSelector((state: RootState) => state.money.coins);

    return (
        <header className="sticky top-0 bg-slate-400 px-5 py-6">
            <div className="flex items-center justify-between mx-auto max-w-5xl">
                <nav className="flex items-center gap-6">
                    <Link href="/" className="text-xl text-white">
                        main
                    </Link>
                    <Link
                        href="/cart"
                        className="relative flex gap-2 px-4 py-2 rounded-lg text-xl bg-purple-400 hover:bg-purple-500 text-white"
                    >
                        Cart
                        {products.length > 0 && (
                            <>
                                <span className="border-l border-white"></span>
                                <span>{products.length}</span>
                            </>
                        )}
                    </Link>
                </nav>
                <Link
                    href="/donate"
                    className="badge badge-primary badge-lg flex items-center gap-1 border-none bg-purple-400 hover:bg-purple-500 text-white"
                >
                    {coins}
                    <Image src="/coin.svg" height={20} width={20} alt="Coins" />
                </Link>
            </div>
        </header>
    );
}
