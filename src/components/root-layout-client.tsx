"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import Header from "@/components/header";

export default function RootLayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Provider store={store}>
                <Header />
                <div className=""></div>
                {children}
            </Provider>
        </>
    );
}
