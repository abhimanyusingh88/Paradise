"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, InformationCircleIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

const navLinks = [
    {
        name: "Cabins",
        href: "/cabins",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Guest area",
        href: "/account",
    },
];

function MobileNavigation({ session }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <div className="md:hidden">
            <button
                className="p-2 text-primary-100 hover:text-accent-400 transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Bars3Icon className="h-8 w-8" />
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMenu}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 z-[101] h-full w-3/4 sm:w-64 bg-primary-950 border-l border-primary-800 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-primary-800">
                    <span className="text-xl font-semibold text-primary-100">Menu</span>
                    <button
                        className="p-2 text-primary-100 hover:text-accent-400 transition-colors"
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        <XMarkIcon className="h-8 w-8" />
                    </button>
                </div>

                <nav className="flex flex-col px-6 py-8 gap-6">
                    <Link
                        href="/location"
                        className={`text-lg font-medium transition-colors hover:text-accent-400 flex items-center gap-4 ${pathname === "/location" ? "text-accent-400" : "text-primary-100"
                            }`}
                        onClick={toggleMenu}
                    >
                        <MapPinIcon className="h-6 w-6 text-primary-600" />
                        <span>Location</span>
                    </Link>
                    <Link
                        href="/cabins"
                        className={`text-lg font-medium transition-colors hover:text-accent-400 flex items-center gap-4 ${pathname === "/cabins" ? "text-accent-400" : "text-primary-100"
                            }`}
                        onClick={toggleMenu}
                    >
                        <HomeIcon className="h-6 w-6 text-primary-600" />
                        <span>Cabins</span>
                    </Link>
                    <Link
                        href="/about"
                        className={`text-lg font-medium transition-colors hover:text-accent-400 flex items-center gap-4 ${pathname === "/about" ? "text-accent-400" : "text-primary-100"
                            }`}
                        onClick={toggleMenu}
                    >
                        <InformationCircleIcon className="h-6 w-6 text-primary-600" />
                        <span>About</span>
                    </Link>
                    <Link
                        href="/feedback"
                        className={`text-lg font-medium transition-colors hover:text-accent-400 flex items-center gap-4 ${pathname === "/feedback" ? "text-accent-400" : "text-primary-100"
                            }`}
                        onClick={toggleMenu}
                    >
                        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-primary-600" />
                        <span>Feedback</span>
                    </Link>

                    {session?.user ? (
                        <>
                            <Link
                                href="/account"
                                className={`text-lg font-medium transition-colors hover:text-accent-400 flex items-center gap-4 ${pathname.startsWith("/account") ? "text-accent-400" : "text-primary-100"
                                    }`}
                                onClick={toggleMenu}
                            >
                                <div className="relative h-8 w-8 rounded-full overflow-hidden border border-primary-600">
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name}
                                        className="object-cover h-full w-full"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <span>Guest area</span>
                            </Link>
                            <div className="pt-4 border-t border-primary-800 w-full">
                                <SignOutButton className="!py-0 !px-0 !bg-transparent hover:!text-accent-400 text-lg font-medium text-primary-100" />
                            </div>
                        </>
                    ) : (
                        <Link
                            href="/account"
                            className={`text-lg font-medium transition-colors hover:text-accent-400 flex items-center gap-4 ${pathname.startsWith("/account") ? "text-accent-400" : "text-primary-100"
                                }`}
                            onClick={toggleMenu}
                        >
                            <UserIcon className="h-6 w-6 text-primary-600" />
                            <span>Guest area</span>
                        </Link>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default MobileNavigation;
