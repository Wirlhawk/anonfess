import type { Metadata } from "next";
import { Lexend } from "next/font/google"; 
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500" ,"700"], 
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lexend.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
