"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import OurClient from "@src/components/our-client/OurClient";
import Layout from "@src/components/Layout/Layout";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
import { getData } from "@src/utils/api/getData";

type Props = {};

export default function Page({}: Props) {
  const pathname = usePathname();

  const [clients, setClients] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorLog, setErrorLog] = useState<string | null>(null);
  const [pathName, setPathName] = useState<Array<string>>([]);

  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (x) =>
      setScrollProgress(x)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    let path = pathname.split("/");
    path[0] = "/";
    setPathName(path);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    getData("clients")
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorLog(err);
        setLoading(false)
      });
  }, []);

  const clientsView = useMemo(() => <OurClient clients={clients} />, [clients])
  return (
    <Layout pageTitle="Our Client">
      <Scrollbar progress={scrollProgress} />
      <section className="">
        <CommonHeroSection
          heading="Our Client"
          breadcrumb={pathName}
          imageSrc="/assets/images/shared/hero_image.png"
        />
        {loading ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src="/assets/images/home/Vector.svg"
                alt=""
                className="animate-spin w-full h-full"
              />
            </div>
          </div>
        ) : (
          <div>
            {clientsView}
          </div>
        )}
      </section>
    </Layout>
  );
}
