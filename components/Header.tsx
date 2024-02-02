"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import whitelogo from "../public/whitelogo.png";

export default function Header() {
  const menuItems = ["Features", "FAQ", "Pricing", "Support", "Contact"];
  return (
    <Navbar
      className="py-2 container mx-auto bg-transparent"
      maxWidth="full"
      position="static"
      isBlurred={false}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          icon={<Icon icon="material-symbols:menu" color="white" width={24} />}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href={"/"}>
            <Image src={whitelogo} alt="robofx" className="w-full h-auto" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="space-x-6 text-white">
        <NavbarItem className="hidden lg:flex">
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/features">Features</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/faq">FAQ</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/pricing">Pricing</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/support">Support</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/getstarted"
            variant="flat"
            className="btn-basic"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
