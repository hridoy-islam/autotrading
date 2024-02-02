"use client";
import { Card, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <Card className="py-20 rounded-none">
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="space-y-8 justify-between">
          <Chip className="rounded-xl">Contact us</Chip>
          <h2 className="text-4xl font-bold">Get In Touch With Us</h2>

          <div className="space-y-4">
            <h2 className="text-xl">Visit Our Office</h2>
            <div className="flex gap-2 items-center">
              <Icon icon="carbon:map" className="text-primary text-lg" />
              <p>13thStreet, 47 W 13th St, New York, NY 10011, USA</p>
            </div>

            <div className="flex gap-2 items-center">
              <Icon icon="ic:baseline-email" className="text-primary text-lg" />
              <p>mining@robofxtrader.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <Icon icon="ep:phone" className="text-primary text-lg" />
              <p>+19292301920</p>
            </div>
          </div>
        </div>

        <div className="">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone *"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="border-b border-black py-2 placeholder-black px-1 focus:outline-none"
            ></textarea>
            <input
              type="submit"
              className="cursor-pointer btn-basic block w-1/3 p-3 rounded-lg"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </Card>
  );
}
