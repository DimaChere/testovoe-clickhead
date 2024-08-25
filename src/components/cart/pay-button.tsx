"use client";
import { clearCart } from "@/redux/features/cartSlice";
import { removeCoins } from "@/redux/features/moneySlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Button from "../button";

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
                            <Button
                                additionalStyles="flex items-center justify-center gap-1"
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
                            </Button>
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
                <>
                    {coins >= sum ? (
                        <>
                            <Button
                                additionalStyles="flex items-center justify-center gap-1"
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
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                additionalStyles="flex items-center justify-center gap-1"
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
                            </Button>
                        </>
                    )}
                </>
            );

        case "Cash":
            return (
                <div>
                    <Button
                        additionalStyles="flex items-center justify-center gap-1"
                        onClick={handleMoneyPay}
                    >
                        Buy for
                        <span>{sum}</span>
                        <Image
                            src="/cash.svg"
                            height={30}
                            width={30}
                            alt=" cash"
                            className="h-7"
                        />
                    </Button>
                </div>
            );
        default:
            return null;
    }
}
