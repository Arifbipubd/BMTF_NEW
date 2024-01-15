'use client'

import React, { useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import CommonHeroSection from '@src/components/shared/CommonHeroSection'
import Table from '@src/components/shared/Table'
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
            heading='NOC & Notice'
            breadcrumb={pathName}
            imageSrc='/assets/images/shared/noc-and-notice.png'
        />
        <Table />
        <ConnectBMTF />
    </section>
  )
}