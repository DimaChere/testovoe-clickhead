import { createContext } from "react";

export const PurchaseConfirmContext = createContext<(() => void) | null>(null);
