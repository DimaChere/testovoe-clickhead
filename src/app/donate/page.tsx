"use client";
import { DonateVariant } from "@/lib/types";
import { addCoins } from "@/redux/features/moneySlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Donate() {
    const dispatch = useDispatch();

    const variants: DonateVariant[] = [
        {
            name: "small",
            value: 50,
            donateImg: "/coin.svg",
        },
        {
            name: "medium",
            value: 250,
            donateImg: "/more-coins.svg",
        },
        {
            name: "big",
            value: 1000,
            donateImg: "/a-lot-of-coins.svg",
        },
    ];

    const handleBuy = (value: number) => {
        dispatch(addCoins(value));
    };

    return (
        <main className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto p-10 max-w-7xl w-full h-12">
            {variants.map((donate) => (
                <div
                    key={donate.name}
                    className="flex flex-col gap-10 p-6 items-center border border-gray-400 rounded-xl shadow-2xl gradient"
                >
                    <Image
                        src={donate.donateImg}
                        alt={donate.name}
                        width={320}
                        height={320}
                    />
                    <span className="text-4xl text-white">{donate.value}</span>
                    <button
                        className="btn btn-primary w-full mt-auto border-none bg-purple-400 hover:bg-purple-500 text-white"
                        onClick={() => handleBuy(donate.value)}
                    >
                        <span>Buy for</span>
                        <div className="flex text-lg">
                            {donate.value}
                            <Image
                                src="/cash.svg"
                                height={30}
                                width={30}
                                alt="dollars"
                                className="h-7"
                            />
                        </div>
                    </button>
                </div>
            ))}
        </main>
    );
}
