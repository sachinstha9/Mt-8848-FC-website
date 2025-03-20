import React from "react";
import SectionHeader from "./SectionHeading";

export default function Form() {
  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
        <SectionHeader text="JOIN US" />

        <div className="flex md:flex-row items-center justify-center">
          {/* Form Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-8">
            {/* Adjusted width */}
            <form className="space-y-4">
              {/* First Name and Last Name */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block robotoSlab text-sm font-medium text-[var(--text-color)]"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-2 border"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block robotoSlab text-sm font-medium text-[var(--text-color)]"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-2 border"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block robotoSlab text-sm font-medium text-[var(--text-color)]"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block robotoSlab text-sm font-medium text-[var(--text-color)]"
                >
                  Phone Number
                </label>
                <input type="tel" id="phone" className="w-full p-2 border" />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block robotoSlab text-sm font-medium text-[var(--text-color)]"
                >
                  Address*
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border"
                  required
                />
              </div>

              {/* Additional Information */}
              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block robotoSlab text-sm font-medium text-[var(--text-color)]"
                >
                  Anything else?
                </label>
                <textarea
                  id="additionalInfo"
                  className="w-full p-2 border h-24"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="fjallaOne text-white text-lg sm:text-xl bg-[var(--blue-color)] px-6 py-2 inline-block text-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 mt-6 md:mt-0 md:pl-6 hidden md:block">
            {/* Adjusted width */}
            <div className="w-full h-[500px] sm:h-[600px] relative">
              {/* Portrait-sized container */}
              <img
                src="/moments/1.png"
                alt="Football player"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
