/** @format */

"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useScroll } from "framer-motion";

import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import CareerTable from "@src/components/shared/CareerTable";

import Layout from "@src/components/Layout/Layout";
import Scrollbar from "@src/components/shared/Scrollbar";
import { getData } from "@src/utils/api/getData";

type Props = {};

export default function Page({}: Props) {
  const pathname = usePathname();

  const [careers, setCareers] = useState<Array<any>>([]);
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
    getData("careers")
      .then((data) => {
        setCareers(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorLog(err);
        setLoading(false);
      });
  }, []);
  const table = useMemo(() => <CareerTable careers={careers} />, [careers]);
  return (
    <Layout pageTitle='BMTF | Career Oppurtunities'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Career Oppurtunities'
          breadcrumb={pathName}
          imageSrc='/assets/images/history/history_hero_image.png'
        />
        {loading ? (
          <div className='min-h-[60vh] flex items-center justify-center'>
            <div>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src='/assets/images/home/Vector.svg'
                alt=''
                className='animate-spin w-full h-full'
              />
            </div>
          </div>
        ) : (
          <div>{table}</div>
        )}
      </section>
    </Layout>
  );
}
