import Image from "next/image";
import pictureBgHome from "../../public/landing/picture-bg-home.svg";

export default function Home() {
  return (
    <div className="px-20 overflow-x-hidden">
      <section className="flex max-h-svh h-screen pt-16 w-full justify-between">
        <div className="flex flex-col w-1/3 max-w-md mt-28">
          <h1 className="text-secondary text-wr6xl font-extrabold text-pretty !leading-tight uppercase pb-8">Lorem ipsum dolor sit amet</h1>
          <button className="bg-[#B08968] text-white w-fit font-extrabold py-3 px-4 rounded-2xl">Learn More</button>
        </div>
        <div>
          <Image src={pictureBgHome} alt="bg-picture" className="h-full translate-x-72" />
        </div>
      </section>
    </div>

  );
}
