"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { Squeeze as Hamburger } from "hamburger-react";
import Logo from "../../public/logo.png";
import ThemeContext from "@/context/ThemeContext";
import Button from "./shared/Button";

export default function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	// const router = useRouter();
	const currentURL = usePathname();

	const menuItems = [
		{
			id: 1,
			title: "home",
		},
		{
			id: 2,
			title: "about",
		},
		{
			id: 3,
			title: "services",
		},
	];

	const [showMenu, setShowMenu] = useState(true);

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState);
	};

	return (
		<div
			id="top"
			className={`flex justify-between p-4 border-b items-center`}
		>
			<Link
				href="/"
				className="w-40 sm:w-32"
			>
				<Image
					src={Logo}
					alt="logo"
					priority
				/>
			</Link>

			{/* Hamburger for mobile */}
			<div>
				<div className="relative z-20 hidden cursor-pointer sm:block">
					{showMenu ? (
						<Hamburger
							toggled={!showMenu}
							toggle={menuDisplay}
							size="30"
						/>
					) : (
						<Hamburger
							toggled={!showMenu}
							toggle={menuDisplay}
							size="30"
						/>
					)}
				</div>

				<ul
					onClick={menuDisplay}
					className={`${
						showMenu ? "-right-full" : " right-0"
					} py-5 px-16 md:px-10 sm:px-4 bg-white w-full text-xl flex justify-center flex-col transition-all ease-in-out duration-500 absolute z-10 h-svh top-0`}
				>
					{menuItems.map((Item) => (
						<li
							key={Item.id}
							className="capitalize"
						>
							<a
								href={`#${Item.title}`}
								className="flex items-center px-2 pt-4 pb-[10px] hover:text-black/50 transition ease-in-out duration-500 leading-[150%] text-3xl md:text-2xl sm:text-xl"
							>
								{Item.title}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="flex items-center gap-4 sm:hidden">
				<button
					onClick={toggleTheme}
					className="transition-all duration-300 ease-in-out"
				>
					{theme === "light" ? (
						<IoIosMoon
							className="hover:text-grey outline-black outline-8 hover:outline-orange"
							size={30}
						/>
					) : (
						<IoIosSunny size={30} />
					)}
				</button>

				{currentURL.startsWith("/aedc") && (
					<Link href="/water-board">
						<Button>Water Board</Button>
					</Link>
				)}

				{currentURL.startsWith("/water-board") && (
					<Link href="/aedc">
						<Button>AEDC</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
