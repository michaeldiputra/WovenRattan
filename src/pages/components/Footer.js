import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/components/facebook.svg";
import instagram from "../../../public/components/instagram.svg";
import twitter from "../../../public/components/twitter.svg";
import whatsapp from "../../../public/components/whatsapp.svg";

export default function Footer(){
    return(
        <footer className="py-29 flex justify-center">
            <div className="text-center flex flex-col items-center">
                <h1 className="font-medium font-Montserrat text-2xl mb-17">
                    Logo
                </h1>
                <div className="font-Montserrat flex gap-13 px-12 mb-10 text-gray-700">
                    <Link href="/#home" className="font-extrabold text-wrXl">Home</Link>
                    <Link href="/#home" className="font-extrabold text-wrXl">About</Link>
                    <Link href="/#home" className="font-extrabold text-wrXl">Product</Link>
                    <Link href="/#home" className="font-extrabold text-wrXl">Contact Us</Link>
                </div>
                <div className="h-px w-full bg-black/37 mb-6"></div>
                <div className="flex gap-12 max-h-8 max-w-3xs">
                    <Image src={twitter} width={100} height={100} />
                    <Image src={instagram} width={100} height={100} />
                    <Image src={whatsapp} width={100} height={100} />
                    <Image src={facebook} width={100} height={100} />
                </div>
            </div>
        </footer>
    )
}