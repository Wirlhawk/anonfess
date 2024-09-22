import type { Metadata } from "next";
import { Lexend } from "next/font/google"; 
import "./globals.css";

const lexend = Lexend({
    subsets: ["latin"],
    weight: ["400", "500" ,"700"], 
})

export const metadata: Metadata = {
    title: "AnonFess",
    description: "AnonFess, Kirim Pesan Rahasia!",
    openGraph: {
        title: "AnonFess",
        description: "Kirim Pesan Rahasia dengan AnonFess!",
        images: [
            {
                url: "/assets/banner.png", 
                width: 800,
                height: 500,
                alt: "AnonFess preview image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AnonFess",
        description: "Kirim Pesan Rahasia dengan AnonFess!",
        images: ["/assets/banner.png"], 
    },
    icons: {
        icon: "/assets/logo.ico", // Icon in the public folder
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
            </head>
            <body className={`${lexend.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
