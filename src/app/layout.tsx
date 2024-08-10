import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@src/components/shared/Navbar";
import Footer from "@src/components/shared/Footer";
import "./theme.css";
import "./globals.css";
import Pointer from "@src/components/shared/Pointer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bangladesh Machine Tools Factory Limited (BMTF)",
    description: "BMTF is a commercial enterprise run under the management of Bangladesh Army.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./icon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* eslint-disable-next-line @next/next/no-page-custom-font*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={inter.className}>
                <Navbar />
                <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
