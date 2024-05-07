"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import whitelogo from "../public/whitelogo.png";

export default function Footer() {
  return (
    <div className="footerbg p-10 text-white">
      <div className="container mx-auto">
        <div className="md:flex sm:flex-row gap-3 justify-between py-8 sm:space-y-6">
          <div className="md:w-1/2 sm:w-full space-y-4">
            <Image src={whitelogo} alt="robofx" />
            <p>
              Robo FX Trader Software website is a software provider company for
              forex trading. Offering automatic robot setup with expert managed
              trading accounts.
            </p>
            <div className="flex items-center gap-4">
              <Icon icon="tabler:clock" width={28} />
              <div>
                <p>Mon - Fri - 09:00AM - 06:00PM </p>
                <p>Saturday - 09:00AM - 05:00PM</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="border-storke border-b-1 pb-2">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href={"/features"}>Features</Link>
              </li>
              <li>
                <Link href={"/faq"}>Faq</Link>
              </li>
              <li>
                <Link href={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="border-storke border-b-1 pb-2">Other Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href={"/support"}>Support</Link>
              </li>
              <li>
                <Link href={"/"}>Terms and Conditions</Link>
              </li>
              <li>
                <Link href={"/"}>Refund Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy and Policy</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="border-storke border-b-1 pb-2">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <div className="flex items-center gap-2">
                  <Icon icon="ph:map-pin" />
                  <p>
                    13thStreet, 47 W 13th St
                    <br />
                    New York, NY 10011
                    <br />
                    USA
                  </p>
                </div>
              </li>
              {/* <li>
                <Link href={"/"} className="flex items-center gap-2">
                  <Icon icon="solar:phone-linear" />
                  <span>+971 50 363 0578</span>
                </Link>
              </li> */}
              <li>
                <Link href={"/"} className="flex items-center gap-2">
                  <Icon icon="clarity:envelope-solid" />
                  <p>support@robofxtrader.com</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center border-stroke border-t-1 pt-3">
          <p>
            Copyrights © 2024 All Rights Reserved by Robo FX Trader Software.
          </p>
        </div>
      </div>
    </div>
  );
}
