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
          <div className="min-w-96 h-fit flex items-center md:-mr-60 lg:-mr-72 xl:-mr-80">
            <Image src={pictureBgHome} alt="bg-picture" className="max-h-screen -mt-8" />
          </div>
        </section>

        <section className="p-1 bg-black">

        </section>

      </div>
    </div>
  );
}
