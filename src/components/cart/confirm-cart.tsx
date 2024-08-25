"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import ChoosePayMethod from "./choose-pay-method";
import Button from "../button";

export default function ConfirmCart() {
    const products = useSelector((state: RootState) => state.cart.products);

    const sum: number = +products.reduce((a, b) => a + b.price, 0).toFixed(2);

    return (
        <div className="flex justify-between items-center w-full">
            <p className="badge badge-primary p-3 text-2xl text-white">{sum}</p>
            <Button
                additionalStyles=""
                onClick={() => {
                    const modal: any = document.getElementById("my_modal_1");
                    if (modal) {
                        modal.showModal();
                    }
                }}
            >
                Confirm Cart
            </Button>
            <ChoosePayMethod sum={sum} />
        </div>
    );
}
