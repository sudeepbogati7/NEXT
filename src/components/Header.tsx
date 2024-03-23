'use client';
import Link from "next/link";
import React from "react";
export default function Nav() {
    return (
        <header className="flex flex-row text-3xl shadow-lg shadow-gray-500/40 p-2 h-18 overflow-hidden justify-between  w-full">
            <nav className="font-bold pl-4">
                The <span className="text-xl text-blue-700 mr-6">Sudeep</span>
            </nav>
            <div className="text-lg font-medium flex justify-center items-center gap-6">
                <Link href='/'><span className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in">About</span></Link>
                <Link href='/'><span className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in">Blogs</span></Link>
                <Link href='/'><span className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in">Projects</span></Link>
                <Link href='/'><span className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in">Contact</span></Link>
                <Link href='/'>
                    <span className="w-14 h-14 rounded-full flex items-center justify-center border-black">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-black">
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </span>
                </Link>
            </div>
        </header>
    )
}