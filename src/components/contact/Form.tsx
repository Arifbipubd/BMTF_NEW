"use client";

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

type Props = {};

const schema = yup.object({
  name: yup.string().required("Name is Required."),
  email: yup
    .string()
    .email("Email Must be a valid format.")
    .required("Email is required."),
  message: yup.string().required("Message is required."),
});

export default function Form({}: Props) {
  // const handleSubmit = (e: any) => {
  //     e.preventDefault();
  // };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {},
    validationSchema: schema,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 md:mb-[15px]">
          <label
            htmlFor="name"
            className="text-black font-medium 2xl:text-xl leading-[24px] capitalize "
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            placeholder="Type Here..."
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-white border outline-none  rounded-[10px] mt-4 md:mt-5 text-[#5A5A65]
                         placeholder:text-[#5A5A65] px-3 md:px-5 py-5 md:py-[25px] w-full 
                         focus:border-primary  ${
                           errors.name
                             ? "border-red-500 focus:border-red-500"
                             : "border-transparent focus:border-primary"
                         }
            `}
          />
          {errors.name && (
            <span className="text-red-500 text-xs 2xl:text-sm py-1">
              {errors.name}
            </span>
          )}
        </div>
        <div className="mb-3 md:mb-[15px]">
          <label
            htmlFor="email"
            className="text-black font-medium 2xl:text-xl leading-[24px] capitalize"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type Here..."
            className={`bg-white border outline-none rounded-[10px] mt-4 md:mt-5 text-[#5A5A65]
                         placeholder:text-[#5A5A65] px-3 md:px-5 py-5 md:py-[25px] w-full
                         focus:border-primary ${
                           errors.email
                             ? "border-red-500 focus:border-red-500"
                             : "border-transparent focus:border-primary"
                         }
                        `}
          />
          {errors.email && (
            <span className="text-red-500 text-xs 2xl:text-sm py-1">
              {errors.email}
            </span>
          )}
        </div>
        <div className="mb-3 md:mb-[15px]">
          <label
            htmlFor="message"
            className="text-black font-medium  leading-[24px] capitalize"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Type Here..."
            cols={30}
            rows={8}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-white border outline-none rounded-[10px] mt-4 md:mt-5 resize-none text-[#5A5A65]
                         placeholder:text-[#5A5A65] px-3 md:px-5 py-5 md:py-[25px] w-full  ${
                           errors.message
                             ? "border-red-500 focus:border-red-500"
                             : "border-transparent focus:border-primary"
                         }
                        `}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-xs 2xl:text-sm py-1">
              {errors.message}
            </span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className={`bg-primary px-6 py-4 md:px-7 md:py-5 lg:px-[34px] lg:py-[25px] rounded-[10px] 
                        text-white text-sm 2xl:text-base  capitalize font-semibold leading-[21px]
                        `}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
