import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import HomeBg from "../../public/landing/home-background.png";
import MobileHomeBg from "../../public/landing/mobile-home-background.png";
import briefcase from "../../public/landing/briefcase.svg";
import leaf from "../../public/landing/leaf.svg";
import aesthetic from "../../public/landing/aesthetic.svg";
import productvector from "../../public/landing/product-vector.svg";
import downarrow from "../../public/landing/down-arrow.svg";
import star from "../../public/landing/rating/star.svg"
import starempty from "../../public/landing/rating/starempty.svg";
import homebag from "../../public/landing/home-bag.png";

export default function Home() {
  const productImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];

  const [visibleCount, setVisibleCount] = useState(3); // Mulai dari 3 gambar

  const showHandler = () => {
    setVisibleCount((prevCount) => (prevCount === 3 ? 9 : 3)); // Tampilkan hingga 9 gambar
  };

  const ratings = [
    {
      id: 1,
      avatar: "user1.jpg",
      name: "John Doe",
      date: "2025-01-22",
      description: "Produk ini sangat luar biasa! Kualitasnya melebihi ekspektasi.",
      stars: 5,
    },
    {
      id: 2,
      avatar: "",
      name: "Jane Smith",
      date: "2025-01-21",
      description: "Pelayanan cepat dan produk berkualitas tinggi. Sangat memuaskan!",
      stars: 5,
    },
    {
      id: 3,
      avatar: "",
      name: "Alice Johnson",
      date: "2025-01-20",
      description: "Sangat puas dengan produk ini. Pengemasan juga sangat rapi.",
      stars: 5,
    },
    {
      id: 4,
      avatar: "",
      name: "Michael Brown",
      date: "2025-01-19",
      description: "Produk sempurna dan sesuai deskripsi. Pengiriman juga cepat.",
      stars: 4,
    },
    {
      id: 5,
      avatar: "",
      name: "Emily Davis",
      date: "2025-01-18",
      description: "Tidak ada kekurangan. Sangat puas dengan kualitas dan layanan!",
      stars: 5,
    },
    {
      id: 6,
      avatar: "",
      name: "Daniel Wilson",
      date: "2025-01-17",
      description: "Kualitas produk sangat bagus, tidak ada cacat. Terima kasih!",
      stars: 5,
    },
    {
      id: 7,
      avatar: "",
      name: "Sophia Martinez",
      date: "2025-01-16",
      description: "Produk premium dengan harga terjangkau. Sangat recommended!",
      stars: 4,
    },
    {
      id: 8,
      avatar: "",
      name: "Ethan Anderson",
      date: "2025-01-15",
      description: "Luar biasa! Saya akan membeli lagi produk dari toko ini.",
      stars: 5,
    },
    {
      id: 9,
      avatar: "",
      name: "Olivia Taylor",
      date: "2025-01-14",
      description: "Sangat puas dengan hasilnya. Produk ini benar-benar berkualitas!",
      stars: 5,
    },
    {
      id: 10,
      avatar: "",
      name: "William Thomas",
      date: "2025-01-13",
      description: "Semua sesuai ekspektasi. Sangat direkomendasikan untuk siapa saja.",
      stars: 4,
    },
  ];


  return (
    <>
      <section className="pb-20" id="home">
        <div className="landing-container overflow-hidden hidden md:block">
          <div className="max-w-7xl w-full">
            <div className="hidden max-h-svh h-screen pt-16 w-full justify-between items-center md:flex">
              <div className="flex flex-col w-full max-w-md -mt-28">
                <h1 className="text-secondary text-wr6xl font-extrabold text-pretty leading-tight! uppercase pb-8">Lorem ipsum dolor sit amet</h1>
                <Link href="/#product" className="bg-[#B08968] text-white w-fit font-extrabold py-3 px-4 rounded-2xl">Learn More</Link>
              </div>
              <div className="min-w-96 h-fit flex items-center -mr-60 lg:-mr-72 xl:-mr-80 relative">
                <Image src={HomeBg} alt="bg-picture" className="max-h-screen -mt-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="landing-container items-center flex flex-col text-center pt-6 bg-[url('/landing/mobile-home-background.png')] bg-center bg-no-repeat bg-cover">
            <h1 className="text-secondary text-wr6xl font-extrabold text-pretty leading-tight! uppercase pb-8">Lorem ipsum dolor sit amet</h1>
            <Image src={homebag} width={500} height={500} />
            <p className="text-[#B08968] font-Open-sans font-semibold text-wrXl text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales nisl vel eros maximus, nec bibendum nulla vestibulum. Pellentesque euismod ex odio, sed faucibus est varius quis.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="landing-container">
        <div className="max-w-7xl w-full">
          <div className="flex justify-center pb-20">
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

      <section id="why-us" className="landing-container bg-primary">
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
              <Image src={aesthetic} alt="Comfort" className="mb-2.5 px-3 opacity-80 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full" />
              <p className="text-white font-medium text-wr2xl">Aesthetic</p>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="landing-container py-7">
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

      <section id="rating" className="landing-container">
        <div className="max-w-7xl w-full flex pt-15 flex-col md:flex-row">
          <h5 className="text-primary font-bold text-wr4xl font-Montserrat w-full md:w-5/11 mr-16 mt-5 mb-4 pl-3 xl:pl-11 ">what do they say about our products?</h5>
          <div className="relative end-0 w-full">
            <div className="pr-1 md:pr-4 lg:pr-5 xl:pr-6 w-full absolute -bottom-1">
              <div className="w-full h-28 bg-linear-to-t from-background to-transparent">
              </div>
            </div>
            <div className="overflow-y-scroll snap-y snap-mandatory h-109 scrollbar">
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 xl:gap-4 mr-1 md:mr-4 lg:mr-5 xl:mr-6">
                {ratings.map((rating) => (
                  <div className="flex rounded-3xl px-5 py-3 bg-[#D6B08B] h-fit snap-start">
                    <div className="rounded-full overflow-hidden flex justify-center items-center h-10 md:h-16 w-full max-w-10 md:max-w-16">
                      <Image src={`/landing/rating/${rating.avatar ? rating.avatar : "user.svg"}`}
                        width={100} height={100}
                        className="w-full min-h-full object-cover " />
                    </div>
                    <div className="ml-2.5 w-full">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="font-bold text-wrSm font-Montserrat text-[#562400] leading-2 mb-0.5">{rating.name}</p>
                          <p className="font-bold text-wrXs font-Montserrat text-primary mb-3">{rating.date}</p>
                        </div>
                        <div className="flex">
                          {Array.from({ length: rating.stars }).map((_, index) => (
                            <Image key={index} src={star} alt={star} width={16} height={16} className="size-3 md:size-4 lg:size-4.5 xl:size-5 fill-inherit" />
                          ))}
                          {Array.from({ length: 5 - rating.stars }).map((_, index) => (
                            <Image key={index} src={starempty} alt={star} width={16} height={16} className="w-5 h-5" />
                          ))}
                        </div>
                      </div>
                      <p className="font-bold text-wrSm font-Montserrat text-primary">{rating.description}</p>
                    </div>
                  </div>
                ))}
                <div className="flex rounded-3xl px-5 py-10 bg-[#D6B08B] h-fit snap-start justify-center">
                  <p className="font-bold text-wrSm font-Montserrat text-[#562400] leading-2 text-center"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
