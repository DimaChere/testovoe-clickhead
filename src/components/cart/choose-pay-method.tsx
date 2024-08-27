"use client";
import { PayMethod } from "@/lib/types";
import PayMethodCard from "./pay-method-card";
import { useState } from "react";
import PayButton from "./pay-button";

export default function ChoosePayMethod({ sum }: { sum: number }) {
    const [payMethod, setPayMethod] = useState<string | null>(null);

    const payMethods: PayMethod[] = [
        {
            name: "Coins",
            methodImg: "/coin.svg",
        },
        {
            name: "Coins and cash",
            methodImg: "/combine-pay.svg",
        },
        {
            name: "Cash",
            methodImg: "/cash.svg",
        },
    ];

    const paymentMethodHandle = (name: string) => {
        setPayMethod(name);
    };

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-slate-300 dark:bg-[#1d232a]">
                <h3 className="font-bold text-lg mb-4 text-gray-400">
                    Choose pay method
                </h3>
                <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex gap-3 w-full">
                        {payMethods.map((method) => (
                            <PayMethodCard
                                key={method.name}
                                method={method}
                                onClickHandler={paymentMethodHandle}
                            />
                        ))}
                    </div>
                    <PayButton payMethod={payMethod} sum={sum} />
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}
