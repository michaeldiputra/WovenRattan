import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/components/facebook.svg";
import instagram from "../../../public/components/instagram.svg";
import twitter from "../../../public/components/twitter.svg";
import whatsapp from "../../../public/components/whatsapp.svg";

export default function Footer() {
    return (
        <footer id="footer" className="pb-6 sm:pb-29 pt-29 flex sm:justify-center landing-container">
            <div className="sm:text-center flex flex-col sm:items-center max-w-7xl w-full sm:w-fit">
                <h1 className="font-medium font-Montserrat text-2xl mb-17">
                    Logo
                </h1>
                <div className="font-Montserrat flex flex-col sm:flex-row gap-y-2 gap-x-13 sm:px-12 mb-5 sm:mb-10 text-gray-700">
                    <Link href="/#home" className="font-extrabold text-wrXl hover:opacity-90">Home</Link>
                    <Link href="/#about" className="font-extrabold text-wrXl hover:opacity-90">About</Link>
                    <Link href="/#product" className="font-extrabold text-wrXl hover:opacity-90">Product</Link>
                    <Link href="/#footer" className="font-extrabold text-wrXl hover:opacity-90">Contact Us</Link>
                </div>
                <div className="h-px w-full bg-black/37 mb-6"></div>
                <div className="flex gap-5 sm:gap-12 max-h-5 sm:max-h-8 max-w-3xs justify-start">
                    <Link href="#">
                        <Image src={twitter} width={100} height={100} className="h-full w-fit cursor-pointer hover:opacity-70" />
                    </Link>
                    <Link href="#">
                        <Image src={instagram} width={100} height={100} className="h-full w-fit cursor-pointer hover:opacity-70" />
                    </Link>
                    <Link href="#">
                        <Image src={whatsapp} width={100} height={100} className="h-full w-fit cursor-pointer hover:opacity-70" />
                    </Link>
                    <Link href="#">
                        <Image src={facebook} width={100} height={100} className="h-full w-fit cursor-pointer hover:opacity-70" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}