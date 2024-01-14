'use client'

import React, {useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import CommonHeroSection from '@src/components/shared/CommonHeroSection'
import AllVerticals from '@src/components/verticals/AllVerticals'

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
        heading='All verticals'
        breadcrumb={pathName}
        imageSrc='/assets/images/verticals/Electronic_Assembly.png'
        />
        <AllVerticals />
    </section>
  )
}