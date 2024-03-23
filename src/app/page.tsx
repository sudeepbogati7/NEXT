"use client";
import AboutMe from '@/components/About';
import '../../styles/global.css';
import Nav from "@/components/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
export default function Home() {
  return (
    <>
      <div >
        <Nav />
        <div className=''>
          <AboutMe />
        </div>
      </div>
    </>
  );
}
