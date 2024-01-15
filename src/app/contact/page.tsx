'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import CommonHeroSection from '@src/components/shared/CommonHeroSection'
import Card from '@src/components/conact/Card'
import Contact from '@src/components/conact/Contact'
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
            heading='Contact Us'
            breadcrumb={pathName}
            imageSrc='/assets/images/shared/hero_image.png'  
        />
        <Card />
        <Contact />
    </section>
  )
}