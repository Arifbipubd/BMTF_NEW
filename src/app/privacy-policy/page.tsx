'use client'

import React, {useState, useEffect } from "react";
import Layout from "@src/components/Layout/Layout";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";

type Props = {};

export default function Page({}: Props) {
    const { scrollYProgress } = useScroll();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (x) =>
            setScrollProgress(x)
        );
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <Layout pageTitle="BMTF | Privacy Policy">
            <Scrollbar progress={scrollProgress} />
            <div className="privacy-policy">
                {/* Page Title  */}
                <div className="industify_fn_pagetitle">
                    <div className="container">
                        <div className="title_holder singleVerticalBreadcrumb">
                            <h3 className="privacyTitle">Privacy Policy</h3>
                        </div>
                    </div>
                </div>
                {/* /Page Title  */}

                {/* Sidebar Page  */}
                <div className="industify_fn_sidebarpage">
                    <div className="container">
                        <div className="s_inner">
                            {/* Main Sidebar: Left  */}
                            <div className="">
                                {/* Single Service  */}
                                <div className="industify_fn_service_single">
                                    <div className="desc_holder">
                                        <p>
                                            Bangladesh Machine Tools Factory
                                            (&quot;us,&quot; &quot;we,&quot; or
                                            &quot;our&quot;) operates
                                            [www.bmtf.com.bd] (the
                                            &quot;Site&quot;). This page informs
                                            you of our policies regarding the
                                            collection, use, and disclosure of
                                            Personal Information we receive from
                                            users of the Site.
                                        </p>
                                        <p>
                                            We use your Personal Information
                                            only for providing and improving the
                                            Site. By using the Site, you agree
                                            to the collection and use of
                                            information in accordance with this
                                            policy.
                                        </p>
                                        <h3>Information Collection and Use</h3>
                                        <p>
                                            While using our Site, we may ask you
                                            to provide us with certain
                                            personally identifiable information
                                            that can be used to contact or
                                            identify you. Personally
                                            identifiable information may include
                                            but is not limited to your name
                                            (&quot;Personal Information&quot;).
                                        </p>
                                        <h3>Log Data</h3>
                                        <p>
                                            Like many site operators, we collect
                                            information that your browser sends
                                            whenever you visit our Site
                                            (&quot;Log Data&quot;). This Log
                                            Data may include information such as
                                            your computer&apos;s Internet
                                            Protocol (&quot;IP&quot;) address,
                                            browser type, browser version, the
                                            pages of our Site that you visit,
                                            the time and date of your visit, the
                                            time spent on those pages, and other
                                            statistics.
                                        </p>
                                        <h3>Cookies</h3>
                                        <p>
                                            Cookies are files with a small
                                            amount of data, which may include an
                                            anonymous unique identifier. Cookies
                                            are sent to your browser from a web
                                            site and stored on your
                                            computer&apos;s hard drive. Like
                                            many sites, we use
                                            &quot;cookies&quot; to collect
                                            information. You can instruct your
                                            browser to refuse all cookies or to
                                            indicate when a cookie is being
                                            sent. However, if you do not accept
                                            cookies, you may not be able to use
                                            some portions of our Site.
                                        </p>
                                        <h3>Security</h3>
                                        <p>
                                            The security of your Personal
                                            Information is important to us, but
                                            remember that no method of
                                            transmission over the Internet or
                                            method of electronic storage is 100%
                                            secure. While we strive to use
                                            commercially acceptable means to
                                            protect your Personal Information,
                                            we cannot guarantee its absolute
                                            security.
                                        </p>
                                        <h3>Changes to This Privacy Policy</h3>
                                        <p>
                                            This Privacy Policy is effective as
                                            of [Date] and will remain in effect
                                            except with respect to any changes
                                            in its provisions in the future,
                                            which will be in effect immediately
                                            after being posted on this page.
                                        </p>
                                        <p>
                                            We reserve the right to update or
                                            change our Privacy Policy at any
                                            time, and you should check this
                                            Privacy Policy periodically. Your
                                            continued use of the Service after
                                            we post any modifications to the
                                            Privacy Policy on this page will
                                            constitute your acknowledgment of
                                            the modifications and your consent
                                            to abide and be bound by the
                                            modified Privacy Policy.
                                        </p>
                                        <h3>Contact Us</h3>
                                        <p>
                                            If you have any questions about this
                                            Privacy Policy, please contact us at
                                            mkt@bmtf.com.bd.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Sidebar Page  */} 
            </div>
        </Layout>
    );
}
