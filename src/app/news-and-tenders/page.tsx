/** @format */

"use client";

import React, { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import AllNews from "@src/components/shared/AllNews";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import Layout from "@src/components/Layout/Layout";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
import { getData } from "@src/utils/api/getData";
type Props = {};

export default function Page({}: Props) {
  const pathname = usePathname();

  const [data, setData] = useState<Array<any>>([]);
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
    getData("news")
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorLog(err);
        setLoading(false);
      });
  }, [setData]);

  const News = useMemo(() => <AllNews newsAndTender={data} />, [data]);

  return (
    <Layout pageTitle='BMTF | News and Tenders'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='News and Tenders'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/noc-and-notice.png'
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
          <div>{<div>{News}</div>}</div>
        )}
        {/* <ConnectBMTF /> */}
      </section>
    </Layout>
  );
}
