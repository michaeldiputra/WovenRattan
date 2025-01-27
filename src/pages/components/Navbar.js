import Link from "next/link"

export default function Navbar() {
    return (
        <nav class="sticky top-0 z-10 backdrop-filter backdrop-blur-lg pt-5 pb-4 landing-container">
            <div className="max-w-7xl w-full flex justify-between">
                <span className="text-gray-700 font-Montserrat font-extrabold text-xl">LOGO</span>
                <div className="gap-x-13 md:flex hidden">
                    <Link href="/#home" className="overflow-hidden group transition-transform">
                        <h5 className="text-gray-700 text-wrBase font-extrabold">Home</h5>
                        <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                    </Link>
                    <Link href="/#about" className="overflow-hidden group transition-transform">
                        <h5 className="text-gray-700 text-wrBase font-extrabold">About</h5>
                        <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                    </Link>
                    <Link href="/#product" className="overflow-hidden group transition-transform">
                        <h5 className="text-gray-700 text-wrBase font-extrabold">Product</h5>
                        <div className="h-1 w-3/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                    </Link>
                    <Link href="/#footer" className="overflow-hidden group transition-transform">
                        <h5 className="text-gray-700 text-wrBase font-extrabold">Contact Us</h5>
                        <div className="h-1 w-4/5 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                    </Link>
                </div>
                
            </div>
        </nav>


    )
}