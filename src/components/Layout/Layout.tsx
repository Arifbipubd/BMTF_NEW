'use client'
 
import Head from "next/head";
import { useEffect } from "react";

export default function Layout({
    children,
    pageTitle,
}: {
    children: React.ReactNode;
    pageTitle: string;
}) {
    useEffect(() => {
        document.title = pageTitle || "BMTF | Home";
    }, [pageTitle]);
    return (
        <>
            <Head>
                <title>{pageTitle || "BMTF | Home"}</title>
            </Head>
            {children}
        </>
    );
}
