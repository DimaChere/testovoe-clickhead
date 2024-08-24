"use client";
import { useProducts } from "@/lib/api";
import { Product } from "@/lib/types";
import { addToCart } from "@/redux/features/cartSlice";
import { RootState } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const queryClient = new QueryClient();

export default function ProductsListWrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <ProductsList />
        </QueryClientProvider>
    );
}

function ProductsList() {
    const { isPending, error, data } = useProducts();

    const dispatch = useDispatch();

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="grid grid-cols-3 gap-6">
            {data?.products.map((product) => (
                <div
                    key={product.id}
                    className="p-6 bg-slate-500 rounded-xl text-white"
                >
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-orange-400 px-4 py-2 rounded-md"
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}
