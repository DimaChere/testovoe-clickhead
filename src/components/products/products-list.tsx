"use client";
import { useProducts } from "@/lib/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductBlock from "./product-block";
import { Skeleton } from "@mui/material";

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

    if (isPending)
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-6">
                {Array.from({ length: 30 }, (_, index) => (
                    <Skeleton
                        key={index}
                        sx={{ bgcolor: "slategray" }}
                        variant="rectangular"
                        width={370}
                        height={136}
                        className="rounded-xl"
                    />
                ))}
            </div>
        );

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-6">
            {data?.products.map((product) => (
                <ProductBlock product={product} key={product.id} />
            ))}
        </div>
    );
}
