import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import pictureBgHome from "../../public/landing/picture-bg-home.svg";
import briefcase from "../../public/landing/briefcase.svg";
import leaf from "../../public/landing/leaf.svg";
import star from "../../public/landing/star.svg";
import productvector from "../../public/landing/product-vector.svg";
import downarrow from "../../public/landing/down-arrow.svg";

export default function Home() {
  const productImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

  const [visibleCount, setVisibleCount] = useState(3); // Mulai dari 3 gambar

  const showHandler = () => {
    setVisibleCount((prevCount) => (prevCount === 3 ? 9 : 3)); // Tampilkan hingga 9 gambar
  };
  return (
    <>

      <section className="landing-container overflow-hidden">
        <div className="max-w-7xl w-full">
          <div className="flex max-h-svh h-screen pt-16 w-full justify-between items-center">
            <div className="flex flex-col w-full max-w-md -mt-28">
              <h1 className="text-secondary text-wr6xl font-extrabold text-pretty leading-tight! uppercase pb-8">Lorem ipsum dolor sit amet</h1>
              <button className="bg-[#B08968] text-white w-fit font-extrabold py-3 px-4 rounded-2xl">Learn More</button>
            </div>
            <div className="min-w-96 h-fit flex items-center -mr-60 lg:-mr-72 xl:-mr-80">
              <Image src={pictureBgHome} alt="bg-picture" className="max-h-screen -mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-container">
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

      <section className="landing-container bg-primary">
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

      <section className="landing-container py-7">
        <div className="max-w-7xl w-full flex flex-col items-center">
          <div className="flex justify-between gap-2 items-center mb-7 w-full max-w-xs md:max-w-sm mx-14">
            <Image src={productvector} width={100} height={100} alt="vector" className="max-w-[25%] sm:max-w-[20%] md:max-w-[25%] lg:max-w-[30%] xl:max-w-full h-auto shrink-0" />
            <h5 className="text-primary font-semibold text-wr3xl">Product</h5>
            <Image src={productvector} width={100} height={100} alt="vector" className="scale-x-[-1] max-w-[25%] sm:max-w-[20%] md:max-w-[25%] lg:max-w-[30%] xl:max-w-full shrink-0" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 lg:gap-6 xl:gap-8 w-full mb-2.5 sm:mb-7">
            {productImages.slice(0, visibleCount).map((productImage, index) => (
              <div key={index} className="max-h-96 rounded-3xl overflow-hidden flex justify-center items-center">
                <Image
                  src={`/landing/product/${productImage}`}
                  alt={`Product ${index + 1}`}
                  width={500} height={500}
                  objectFit="cover"
                  className="rounded-3xl w-full min-h-full object-cover"
                  priority={index < 3} // Prioritize loading for the first 3 images
                />
              </div>
            ))}
          </div>
          {visibleCount == 3 && (
            <div className="flex w-full justify-end sm:justify-center">
              <button
                className="items-center text-primary font-semibold text-wrXl hidden sm:flex"
                onClick={showHandler}
              >
                Show More
                <Image src={downarrow} alt="down arrow" width={100} height={100} className={`w-5 ml-2 transform transition-transform ${visibleCount === 3 ? "rotate-0" : "rotate-180"
                  }`} />
              </button>
              <Link href="/products" className="items-center text-primary font-semibold text-wrXl sm:hidden">
                See All Products
              </Link>
            </div>
          )}
          {visibleCount == 9 && (
            <div className="flex w-full justify-between">
              <button
                className="items-center text-primary font-semibold text-wrXl flex"
                onClick={showHandler}
              >
                Show Less
                <Image src={downarrow} alt="down arrow" width={100} height={100} className={`w-5 ml-2 transform transition-transform ${visibleCount === 3 ? "rotate-0" : "rotate-180"
                  }`} />
              </button>
              <Link href="/products" className="items-center text-primary font-semibold text-wrXl ">
                See All Products
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="landing-container">
        <div className="max-w-7xl w-full px-11 flex">
          <h5 className="text-primary font-bold text-wr4xl font-Montserrat w-2/5 text-balance mr-16">what do they say about our products?</h5>
          <div className="flex ">
            <div className="rounded-full overflow-hidden flex justify-center items-center size-16">
              <Image src={"/landing/rating/1.jpg"} width={100} height={100} className="w-full min-h-full object-cover"/>
            </div>
            <div>
              <p className="font-bold text-wrSm font-Montserrat">Nelson mandela</p>
              <p className="font-bold text-wrXs font-Montserrat">12 November 2025</p>
              <p className="font-bold text-wrSm font-Montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices placerat fermentum. Maecenas faucibus scelerisque mi id gravida. In a lorem a turpis aliquet sodales. Sed a velit pharetra, luctus nunc malesuada, posuere risus.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
