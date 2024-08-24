"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    return (
        <div className="bg-slate-400 px-5 py-6">
            <nav>
                <Link href="/">Main</Link>
                <Link href="/cart">Cart</Link>
            </nav>
        </div>
    );
}
