'use client'

import React, { useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import CommonHeroSection from '@src/components/shared/CommonHeroSection'
import AllNews from '@src/components/shared/AllNews'
import ConnectBMTF from '@src/components/shared/ConnectBMTF'
type Props = {}

export default function Page({}: Props) {
    const pathname = usePathname()

    const [pathName, setPathName] = useState<Array<string>>([]);

    useEffect(() =>{
        let path = pathname.split("/");
        path[0] ='/';
        setPathName(path)
    }, [pathname])

  return (
    <section>
        <CommonHeroSection 
            heading='Career Oppurtunities'
            breadcrumb={pathName}
            imageSrc='/assets/images/shared/noc-and-notice.png'
        />
        <AllNews/>
        <ConnectBMTF />
    </section>
  )
}