"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";

import Link from "next/link";
export default function Blog() {
  const [seeFullContent, setSeeFullContent] = useState(false);
  const toggleContent = () => {
    setSeeFullContent(!seeFullContent);
  };
  return (
    <div className="grid grid-flow-col">
      <div className=" shadow-lg shadow-black-600/60 flex flex-col align-center justify-center m-10 p-3 container border border-black-700 h-fit w-96 bg-gray-100 rounded-2xl">
        <span className="">
          <Image
            width={500}
            height={150}
            className="h-72 rounded-se-lg"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </span>
        <h2 className="pt-5 text-xl font-bold mb-">
          My Software Engineering Journey
        </h2>
        <span className="text-sm mb-5 border-b border-gray-400 w-fit">
          20 March 2024 | 09:50 PM{" "}
        </span>
        <p
          className={`text-lg ${
            seeFullContent ? "fade-out" : "fade-in"
          } transition-all duration-1000`}
        >
          {seeFullContent
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab,"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at"}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 hover:text-blue-700 border rounded-2xl bg-blue-100 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out border-gray-700 mt-2 p-1 w-1/3 transform hover:scale-110"
        >
          {seeFullContent ? "Read more" : "Read less"}
        </button>
      </div>
      <div className=" shadow-lg shadow-black-600/60 flex flex-col align-center justify-center m-10 p-3 container border border-black-700 h-fit w-96 bg-gray-100 rounded-2xl">
        <span className="">
          <Image
            width={500}
            height={150}
            className="h-72 rounded-se-lg"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </span>
        <h2 className="pt-5 text-xl font-bold mb-">
          My Software Engineering Journey
        </h2>
        <span className="text-sm mb-5 border-b border-gray-400 w-fit">
          20 March 2024 | 09:50 PM{" "}
        </span>
        <p
          className={`text-lg ${
            seeFullContent ? "fade-out" : "fade-in"
          } transition-all duration-1000`}
        >
          {seeFullContent
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab,"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at"}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 hover:text-blue-700 border rounded-2xl bg-blue-100 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out border-gray-700 mt-2 p-1 w-1/3 transform hover:scale-110"
        >
          {seeFullContent ? "Read more" : "Read less"}
        </button>
      </div>
      <div className=" shadow-lg shadow-black-600/60 flex flex-col align-center justify-center m-10 p-3 container border border-black-700 h-fit w-96 bg-gray-100 rounded-2xl">
        <span className="">
          <Image
            width={500}
            height={150}
            className="h-72 rounded-se-lg"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </span>
        <h2 className="pt-5 text-xl font-bold mb-">
          My Software Engineering Journey
        </h2>
        <span className="text-sm mb-5 border-b border-gray-400 w-fit">
          20 March 2024 | 09:50 PM{" "}
        </span>
        <p
          className={`text-lg ${
            seeFullContent ? "fade-out" : "fade-in"
          } transition-all duration-1000`}
        >
          {seeFullContent
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab,"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at"}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 hover:text-blue-700 border rounded-2xl bg-blue-100 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out border-gray-700 mt-2 p-1 w-1/3 transform hover:scale-110"
        >
          {seeFullContent ? "Read more" : "Read less"}
        </button>
      </div>
      <div className=" shadow-lg shadow-black-600/60 flex flex-col align-center justify-center m-10 p-3 container border border-black-700 h-fit w-96 bg-gray-100 rounded-2xl">
        <span className="">
          <Image
            width={500}
            height={150}
            className="h-72 rounded-se-lg"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </span>
        <h2 className="pt-5 text-xl font-bold mb-">
          My Software Engineering Journey
        </h2>
        <span className="text-sm mb-5 border-b border-gray-400 w-fit">
          20 March 2024 | 09:50 PM{" "}
        </span>
        <p
          className={`text-lg ${
            seeFullContent ? "fade-out" : "fade-in"
          } transition-all duration-1000`}
        >
          {seeFullContent
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab,"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at"}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 hover:text-blue-700 border rounded-2xl bg-blue-100 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out border-gray-700 mt-2 p-1 w-1/3 transform hover:scale-110"
        >
          {seeFullContent ? "Read more" : "Read less"}
        </button>
      </div>
      <div className=" shadow-lg shadow-black-600/60 flex flex-col align-center justify-center m-10 p-3 container border border-black-700 h-fit w-96 bg-gray-100 rounded-2xl">
        <span className="">
          <Image
            width={500}
            height={150}
            className="h-72 rounded-se-lg"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </span>
        <h2 className="pt-5 text-xl font-bold mb-">
          My Software Engineering Journey
        </h2>
        <span className="text-sm mb-5 border-b border-gray-400 w-fit">
          20 March 2024 | 09:50 PM{" "}
        </span>
        <p
          className={`text-lg ${
            seeFullContent ? "fade-out" : "fade-in"
          } transition-all duration-1000`}
        >
          {seeFullContent
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab,"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at"}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 hover:text-blue-700 border rounded-2xl bg-blue-100 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out border-gray-700 mt-2 p-1 w-1/3 transform hover:scale-110"
        >
          {seeFullContent ? "Read more" : "Read less"}
        </button>
      </div>
      <div className=" shadow-lg shadow-black-600/60 flex flex-col align-center justify-center m-10 p-3 container border border-black-700 h-fit w-96 bg-gray-100 rounded-2xl">
        <span className="">
          <Image
            width={500}
            height={150}
            className="h-72 rounded-se-lg"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </span>
        <h2 className="pt-5 text-xl font-bold mb-">
          My Software Engineering Journey
        </h2>
        <span className="text-sm mb-5 border-b border-gray-400 w-fit">
          20 March 2024 | 09:50 PM{" "}
        </span>
        <p
          className={`text-lg ${
            seeFullContent ? "fade-out" : "fade-in"
          } transition-all duration-1000`}
        >
          {seeFullContent
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab,"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sit nobisLorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores quibusdam odio. Soluta non excepturi ullam similique placeat distinctio ratione sed ab, sunt deserunt quos doloremque blanditiis beatae quod officia nobis, temporibus labore inventore? Facilis ad aliasvoluptatibus odio! commodi ducimus, voluptas fuga dignissimos at"}
        </p>
        <button
          onClick={toggleContent}
          className="text-blue-500 hover:text-blue-700 border rounded-2xl bg-blue-100 hover:bg-blue-400 hover:text-white transition-all duration-300 ease-in-out border-gray-700 mt-2 p-1 w-1/3 transform hover:scale-110"
        >
          {seeFullContent ? "Read more" : "Read less"}
        </button>
      </div>
    </div>
  );
}
