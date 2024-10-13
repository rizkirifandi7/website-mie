"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("beranda");

	return (
		<nav className="w-full fixed z-50">
			<div className="max-w-screen-xl mx-auto py-4 px-6 bg-navbar rounded-md mt-2">
				<div
					className={`flex justify-between items-center gap-16 font-semibold tracking-widest uppercase`}
					id="navbar-default"
				>
					<Link
						href="#beranda"
						onClick={() => setActiveLink("beranda")}
						className={`${
							activeLink === "beranda" ? "border-b-2 border-black" : ""
						}`}
					>
						Beranda
					</Link>
					<Link
						href="#menu"
						onClick={() => setActiveLink("menu")}
						className={`${
							activeLink === "menu" ? "border-b-2 border-black" : ""
						}`}
					>
						Menu
					</Link>
					<Link href="#" className="flex items-center gap-2">
						<Image src="./logo.svg" width="32" height="32" alt="demihan Logo" />
						<span className={`text-2xl font-bold`}>D&apos;emiehan</span>
					</Link>
					<Link
						href="#tentang"
						onClick={() => setActiveLink("tentang")}
						className={`${
							activeLink === "tentang" ? "border-b-2 border-black" : ""
						}`}
					>
						Tentang
					</Link>
					<Link
						href="#kontak"
						onClick={() => setActiveLink("kontak")}
						className={`${
							activeLink === "kontak" ? "border-b-2 border-black" : ""
						}`}
					>
						Kontak
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
