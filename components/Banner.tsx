"use client";
import Image from "next/image";
import robo from "../public/robo.png";
import { Button } from "@nextui-org/react";

export default function Banner() {
  return (
    <div className="homepagebg text-white -mt-20">
      <div className="container grid md:grid-cols-2 sm:grid-cols-1 items-center">
        <div className="space-y-6">
          <h2 className="text-6xl">
            Supercharge your trading journey with{" "}
            <span className="text-primary">Robo FX Trader</span>
          </h2>
          <p>
            Robo FX Trading Software is programmed to adapt to the current
            market conditions as it executes trades on both sides of the market
            24/7.
          </p>
          <div>
            <Button className="btn-basic mr-2">Get Started</Button>
            <Button className="bg-black text-white border border-white">
              Download AI Robot
            </Button>
          </div>
        </div>
        <div>
          <Image src={robo} alt="robofx" className="mt-24" />
        </div>
      </div>
    </div>
  );
}
