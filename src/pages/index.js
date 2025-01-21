import Image from "next/image";
import pictureBgHome from "../../public/landing/picture-bg-home.svg";

export default function Home() {
  return (
    <div className="flex justify-center px-5 md:px-12 lg:px-16 xl:px-20 overflow-x-hidden">
      <div className="max-w-7xl w-full">

        <section className="flex max-h-svh h-screen pt-16 w-full justify-between items-center">
          <div className="flex flex-col w-full max-w-md -mt-28">
            <h1 className="text-secondary text-wr6xl font-extrabold text-pretty !leading-tight uppercase pb-8">Lorem ipsum dolor sit amet</h1>
            <button className="bg-[#B08968] text-white w-fit font-extrabold py-3 px-4 rounded-2xl">Learn More</button>
          </div>
          <div className="min-w-96 h-fit flex items-center -mr-60 lg:-mr-72 xl:-mr-80">
            <Image src={pictureBgHome} alt="bg-picture" className="max-h-screen -mt-8" />
          </div>
        </section>

        <section className="flex justify-center py-20">
          <div className="flex max-w-4xl w-full bg-[#B08968] p-7 bg-[url('/landing/rattan-bg-aboutus.png')] bg-no-repeat bg-right-bottom	">
            <div className="max-w-80 w-full grid grid-cols-2 h-[488px] gap-4">
              <div className="w-full bg-[#E6CCB2] row-span-3"></div>
              <div className="w-full bg-[#E6CCB2] row-span-2"></div>
              <div className="w-full bg-[#E6CCB2] row-span-4"></div>
              <div className="w-full bg-[#E6CCB2] row-span-1"></div>
              <div className="w-full bg-[#E6CCB2] row-span-2"></div>
            </div>
            <div className="w-full pl-11">
              <h5 className="font-semibold text-wrXl text-[#F9E2CB] mb-3.5">About Us</h5>
              <h2 className="font-semibold text-wr4xl text-white font-Montserrat mb-4">Lorem ipsumdolor sit amet, consectetur adipiscing.</h2>
              <p className="font-OpenSans font-semibold text-wrBase text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales nisl vel eros maximus, nec bibendum nulla vestibulum. Pellentesque euismod ex odio, sed faucibus est varius quis.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
