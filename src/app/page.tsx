"use client";
import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("@/components/Blogs/BlogCard"));
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css";
export default function Home() {
  return (
    <>
      <BlogCard />
    </>
  );
}
