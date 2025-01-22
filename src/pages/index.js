import Image from "next/image";
import pictureBgHome from "../../public/landing/picture-bg-home.svg";
import briefcase from "../../public/landing/briefcase.svg";
import leaf from "../../public/landing/leaf.svg";
import star from "../../public/landing/star.svg";

export default function Home() {
  return (
    <>

      <section className="flex justify-center px-5 md:px-12 lg:px-16 xl:px-20 overflow-x-hidden">
        <div className="max-w-7xl w-full">
          <div className="flex max-h-svh h-screen pt-16 w-full justify-between items-center">
            <div className="flex flex-col w-full max-w-md -mt-28">
              <h1 className="text-secondary text-wr6xl font-extrabold text-pretty !leading-tight uppercase pb-8">Lorem ipsum dolor sit amet</h1>
              <button className="bg-[#B08968] text-white w-fit font-extrabold py-3 px-4 rounded-2xl">Learn More</button>
            </div>
            <div className="min-w-96 h-fit flex items-center -mr-60 lg:-mr-72 xl:-mr-80">
              <Image src={pictureBgHome} alt="bg-picture" className="max-h-screen -mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-5 md:px-12 lg:px-16 xl:px-20 overflow-x-hidden">
        <div className="max-w-7xl w-full">
          <div className="flex justify-center py-20">
            <div className="flex flex-col-reverse md:flex-row max-w-4xl w-full bg-[#B08968] p-3 sm:p-5 md:p-7 bg-[url('/landing/rattan-bg-aboutus.png')] bg-no-repeat bg-right-bottom	">
              <div className="md:max-w-80 w-full grid grid-cols-2 h-96 sm:h-[488px] gap-1.5 sm:gap-2.5 md:gap-4">
                <div className="w-full bg-[#E6CCB2] row-span-3"></div>
                <div className="w-full bg-[#E6CCB2] row-span-2"></div>
                <div className="w-full bg-[#E6CCB2] row-span-4"></div>
                <div className="w-full bg-[#E6CCB2] row-span-1"></div>
                <div className="w-full bg-[#E6CCB2] row-span-2"></div>
              </div>
              <div className="w-full pb-4 md:pb-0 md:pl-11">
                <h5 className="font-semibold text-wrXl text-[#F9E2CB] mb-1 sm:mb-2 md:mb-3.5">About Us</h5>
                <h2 className="font-semibold text-wr4xl text-white font-Montserrat mb-1.5 sm:mb-3 md:mb-4">Lorem ipsumdolor sit amet, consectetur adipiscing.</h2>
                <p className="font-OpenSans font-semibold text-wrBase text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales nisl vel eros maximus, nec bibendum nulla vestibulum. Pellentesque euismod ex odio, sed faucibus est varius quis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-5 md:px-12 lg:px-16 xl:px-20 overflow-x-hidden bg-primary">
        <div className="max-w-7xl w-full flex flex-col items-center py-4">
          <h5 className="capitalize mb-9 font-Montserrat font-bold text-wr3xl text-white text-center text-pretty">reason to choose us</h5>
          <div className="flex max-w-md sm:max-w-xl lg:max-w-2xl justify-around w-full px-2.5 flex-wrap items-center gap-x-10 gap-y-7">
            <div className="flex flex-col items-center max-w-min justify-between">
              <Image src={briefcase} alt="Comfort" className="mb-2.5 px-0.5 opacity-80 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
              <p className="text-white font-medium text-wr2xl">Stylish</p>
            </div>
            <div className="flex flex-col items-center max-w-min justify-between">
              <Image src={leaf} alt="Comfort" className="mb-2.5 px-2.5 opacity-80 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" />
              <p className="text-white font-medium text-wr2xl">Comfort</p>
            </div>
            <div className="flex flex-col items-center max-w-min justify-between">
              <Image src={star} alt="Comfort" className="mb-2.5 px-3 opacity-80 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full" />
              <p className="text-white font-medium text-wr2xl">Aesthetic</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
