"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import { AnimatePresence, motion } from "framer-motion";

import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";

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
  const [message, setMessage] = useState<string | null>(
    "Message Sent successful"
  );
  const [loading, setLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await axios.post(
          "https://admin.bmtf.com.bd/api/contacts",
          values
        );
        setMessage("Message Send Successful.");
        setIsSuccess(true);
        setIsToastOpen(true);
      } catch (err) {
        setIsSuccess(false);
        setMessage("Error Sending Message.");
        setIsToastOpen(true);
      } finally {
        resetForm()
        setTimeout(() => {
          setIsToastOpen(false);
          setLoading(false);
          setMessage(null);
          setIsSuccess(false);
          
        }, 3000);
      }
    },
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
                           touched.name && errors.name
                             ? "border-red-500 focus:border-red-500"
                             : "border-transparent focus:border-primary"
                         }
            `}
          />
          {touched.name && errors.name && (
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
                           touched.email && errors.email
                             ? "border-red-500 focus:border-red-500"
                             : "border-transparent focus:border-primary"
                         }
                        `}
          />
          {touched.email && errors.email && (
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
                           touched.message && errors.message
                             ? "border-red-500 focus:border-red-500"
                             : "border-transparent focus:border-primary"
                         }
                        `}
          ></textarea>
          {touched.message && errors.message && (
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
            disabled={loading}
          >
            Send Message
          </button>
        </div>
      </form>
      <AnimatePresence>
        {isToastOpen && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className={`fixed top-20 right-2 z-50 pl-4 pr-8 md:pl-6 md:pr-14 py-3 min-w-[10rem] flex text-skyLight rounded-[10px] shadow-md
              ${isSuccess ? "bg-primary" : "bg-[#F9461B]"}  
            `}
          >
            <div className="text-lg md:text-2xl font-semibold mr-2">
              {isSuccess ? <FaCheckCircle /> : <MdOutlineError />}
            </div>
            <div>
              <h3 className="md:text-lg font-semibold leading-[1.2]">
                {isSuccess ? "Success" : "Error"}
              </h3>
              <p className="text-sm md:text-base font-medium">{message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
