import React from "react";

type Props = {};

export default function Form({}: Props) {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 md:mb-[15px]">
                    <label
                        htmlFor="name"
                        className="text-black font-medium leading-[24px] capitalize "
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Type Here..."
                        className={`bg-white border-none  rounded-[10px] mt-4 md:mt-5 text-[#5A5A65]
                         placeholder:text-[#5A5A65] px-3 md:px-5 py-5 md:py-[25px] w-full 
                         focus:outline-[0.5px] focus:outline-solid focus:outline-primary 
                        `}
                    />
                </div>
                <div className="mb-3 md:mb-[15px]">
                    <label
                        htmlFor="email"
                        className="text-black font-medium leading-[24px] capitalize"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Type Here..."
                        className={`bg-white border-none rounded-[10px] mt-4 md:mt-5 text-[#5A5A65]
                         placeholder:text-[#5A5A65] px-3 md:px-5 py-5 md:py-[25px] w-full
                         focus:outline-[0.5px] focus:outline-solid focus:outline-primary 
                        `}
                    />
                </div>
                <div className="mb-3 md:mb-[15px]">
                    <label
                        htmlFor="message"
                        className="text-black font-medium leading-[24px] capitalize"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Type Here..."
                        cols={30}
                        rows={8}
                        className={`bg-white border-none outline-none rounded-[10px] mt-4 md:mt-5 resize-none text-[#5A5A65]
                         placeholder:text-[#5A5A65] px-3 md:px-5 py-5 md:py-[25px] w-full
                         focus:outline-[0.5px] focus:outline-solid focus:outline-primary 
                        `}
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className={`bg-primary px-6 py-4 md:px-7 md:py-5 lg:px-[34px] lg:py-[25px] rounded-[10px] 
                        text-white text-sm capitalize font-semibold leading-[21px]
                        `}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}
