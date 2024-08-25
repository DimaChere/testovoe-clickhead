import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/components/root-layout-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Marketplace",
    description: "Test task from click head",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} relative min-h-screen`}>
                <RootLayoutClient>{children}</RootLayoutClient>
            </body>
        </html>
    );
}
