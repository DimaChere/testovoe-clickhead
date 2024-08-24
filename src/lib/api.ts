import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CartState, Product } from "./types";

const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;
};

export const useProducts = () => {
    return useQuery<CartState, Error>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
};
