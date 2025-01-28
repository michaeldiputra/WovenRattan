import { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import hamburger from "../../../public/hamburger.svg"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
        console.log("handleNav")
    };

    return (
        <nav className="sticky w-full top-0 z-99 font-Raleway">
            <div className="backdrop-filter backdrop-blur-lg pt-5 pb-4 landing-container">
                <div className="max-w-7xl w-full flex justify-between items-center">
                    <span className="text-gray-700 font-Montserrat font-extrabold text-xl">LOGO</span>
                    <div className="gap-x-13 md:flex hidden">
                        <Link href="/#home" className="overflow-hidden group transition-transform">
                            <h5 className="text-gray-700 text-wrBase font-extrabold">Home</h5>
                            <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                        </Link>
                        <Link href="/#about" className="overflow-hidden group transition-transform">
                            <h5 className="text-gray-700 text-wrBase font-extrabold">About</h5>
                            <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                        </Link>
                        <Link href="/#product" className="overflow-hidden group transition-transform">
                            <h5 className="text-gray-700 text-wrBase font-extrabold">Product</h5>
                            <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                        </Link>
                        <Link href="/#footer" className="overflow-hidden group transition-transform">
                            <h5 className="text-gray-700 text-wrBase font-extrabold">Contact Us</h5>
                            <div className="h-1 w-4/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                        </Link>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={handleNav} className="h-full">
                            <Image src={hamburger} width={10} height={10} className="h-auto w-auto" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-1.5 md:hidden'>
                <div className={`${!isOpen ? '-translate-y-70' : 'translate-0'} transition-transform w-full absolute bg-[#B08968] border rounded-xl text-background font-Montserrat font-extrabold text-wrXl border-primary flex flex-col gap-y-3 pt-2.5 pb-6 pl-5 mt-3`}>
                    <Link onClick={handleNav} href="/#home" className="overflow-hidden group transition-transform">
                        <h5 className="">Home</h5>
                        <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                    </Link>
                    <Link onClick={handleNav} href="/#about" className="overflow-hidden group transition-transform">
                        <h5 className="">About</h5>
                        <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                    </Link>
                    <Link onClick={handleNav} href="/#product" className="overflow-hidden group transition-transform">
                        <h5 className="">Product</h5>
                        <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                    </Link>
                    <Link onClick={handleNav} href="/#footer" className="overflow-hidden group transition-transform">
                        <h5 className="">Contact Us</h5>
                        <div className="h-1 w-4/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform -ml-px"></div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}