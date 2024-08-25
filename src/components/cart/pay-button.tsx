"use client";
import { clearCart } from "@/redux/features/cartSlice";
import { removeCoins } from "@/redux/features/moneySlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function PayButton({
    payMethod,
    sum,
}: {
    payMethod: string | null;
    sum: number;
}) {
    const coins = useSelector((state: RootState) => state.money.coins);
    const dispatch = useDispatch();

    const handleCoinsPay = () => {
        dispatch(removeCoins(sum));
        dispatch(clearCart());
    };

    const handleCoinsAndMoneyPay = () => {
        if (coins >= sum) {
            dispatch(removeCoins(sum));
        } else {
            dispatch(removeCoins(coins));
        }
        dispatch(clearCart());
    };

    const handleMoneyPay = () => {
        dispatch(clearCart());
    };

    switch (payMethod) {
        case "Coins":
            return (
                <div>
                    <div className="">
                        {coins >= sum ? (
                            <button
                                className="btn flex items-center justify-center gap-1 bg-purple-400 hover:bg-purple-500 text-white"
                                onClick={handleCoinsPay}
                            >
                                Buy for
                                <span>{sum}</span>
                                <Image
                                    src="/coin.svg"
                                    height={30}
                                    width={30}
                                    alt=" coins"
                                    className="h-7"
                                />
                            </button>
                        ) : (
                            <div className="flex flex-col">
                                <span>Not enough Coins</span>
                                <Link
                                    href="/donate"
                                    className="link text-purple-400"
                                >
                                    Buy some
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            );
        case "Coins and cash":
            return (
                <div>
                    {coins >= sum ? (
                        <button
                            className="btn flex items-center justify-center gap-1 bg-purple-400 hover:bg-purple-500 text-white"
                            onClick={handleCoinsAndMoneyPay}
                        >
                            Buy for
                            <span>{sum}</span>
                            <Image
                                src="/coin.svg"
                                height={30}
                                width={30}
                                alt=" coins"
                                className="h-7"
                            />
                        </button>
                    ) : (
                        <button
                            className="btn flex items-center justify-center gap-1 bg-purple-400 hover:bg-purple-500 text-white"
                            onClick={handleCoinsAndMoneyPay}
                        >
                            <span>{coins}</span>
                            <Image
                                src="/coin.svg"
                                height={30}
                                width={30}
                                alt=" coins"
                                className="h-7"
                            />
                            +<span>{(sum - coins).toFixed(2)}</span>
                            <Image
                                src="/cash.svg"
                                height={30}
                                width={30}
                                alt="dollars"
                                className="h-7"
                            />
                        </button>
                    )}
                </div>
            );

        case "Cash":
            return (
                <div>
                    <button
                        className="btn flex items-center justify-center gap-1 bg-purple-400 hover:bg-purple-500 text-white"
                        onClick={handleMoneyPay}
                    >
                        Buy for
                        <span>{sum}</span>
                        <Image
                            src="/cash.svg"
                            height={30}
                            width={30}
                            alt=" coins"
                            className="h-7"
                        />
                    </button>
                </div>
            );
        default:
            return null;
    }
}
