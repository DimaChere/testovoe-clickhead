import { ShoppingCart } from "@mui/icons-material";

export default function EmptyCart() {
    return (
        <div className="flex flex-col items-center gap-10 p-11 pb-4">
            <ShoppingCart className="w-40 h-40" />
            <p className="text-2xl text-black">Fill the cart</p>
        </div>
    );
}
