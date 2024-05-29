/** @format */

import React from "react";
import Form from "./Form";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className='bg-skyLight py-14 md:py-16 lg:py-[70px]'>
      <div
        className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-[78px]
                
            `}
      >
        <div className='flex flex-col justify-center gap-5 md:gap-6 lg:gap-[30px]'>
          <div>
            <h2 className='text-primary font-3xl md:text-[34px] lg:text-[37px] 2xl:text-[2.5rem] font-bold leading-[150%]'>
              Get in touch with us
            </h2>
          </div>
          <div>
            <p className='text-[#5A5A65] text-sm  2xl:text-base leading-[150%] capitalize'>
              Need assistance or have questions? Our team is here to support
              you. Contact us today
            </p>
          </div>
          <div>
            <h3 className='bg-headine text-lg md:text-xl capitalize font-medium leading-[150%]'>
              Fax
            </h3>
            <hr className='w-2/3 h-[1px] bg-textDark my-5 md:my-[36px]' />
            <div>
              <p className='text-[#5A5A65] text-sm 2xl:text-base leading-[150%] capitalize mb-2.5 md:mb-4 lg:mb-5'>
                Factory Office: +880-2-996618078
              </p>

              <p className='text-[#5A5A65] text-sm 2xl:text-base leading-[150%] capitalize'>
                Corporate Office: +880-2-8871893
              </p>
            </div>
          </div>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
