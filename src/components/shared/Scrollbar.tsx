"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

type Props = {
    progress: number;
};

export default function Scrollbar({ progress }: Props) {
    const [displayProperty, setDisplayProperty] = useState<string>('none');
    const [position, setPosition] = useState<any>('static')
    const changeOnScroll = () => {
        if (window.scrollY > 10) {
            setDisplayProperty("block");
            setPosition("fixed");
        } else {
            setDisplayProperty("none");
            setPosition("static");
        }
    };
    useEffect(() => {
        const eventFired: any = window.addEventListener(
            "scroll",
            changeOnScroll
        );
        return () => {
            eventFired;
        };
    });
    return (
        <div
            style={{
                position: position,
                top: 0,
                left: 0,
                width: "100%",
                height: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                zIndex: 9999,
                display: displayProperty,
                transition: 'all 1s ease-in'
            }}
        >
            <motion.div
                style={{
                    height: "100%",
                    backgroundColor: "var(--color-primary)",
                    width: progress * 100 + "%",
                }}
            />
        </div>
    );
}
