import Vector1 from "../../public/assets/Vector1";

export default function HeroSection() {
  return (
    <div className="flex justify-between   ">
      <div className=" z-20 pt-7 ">
        <div className=" relative -top-16 left-5 2xl:-top-16">
          <h1 className="2xl:top-68 absolute left-5 top-64 z-30  font-sans text-6xl font-bold tracking-wide  2xl:text-[4.3rem]">
            Welcome to
          </h1>
          <h1 className=" absolute left-[7.1rem] top-80 z-30 text-right font-mono text-5xl font-semibold tracking-wider text-[#ff4c4c] 2xl:top-[20.6rem] 2xl:text-[3.6rem]">
            Shoetopia
          </h1>
          <h1 className=" absolute left-4 top-[23.5rem] z-30 font-mono text-3xl font-light tracking-widest 2xl:left-6 2xl:top-[25rem]">
            Walk with confidence!
          </h1>
        </div>
        <Vector1 className="h-fit scale-110 scale-x-125" />
      </div>
      <div
        className=" aspect-auto overflow-hidden border-none outline-none
      "
      >
        <video
          className=" h-full scale-110 border-2 border-green-400 object-cover  "
          src="/assets/Images/Greenshoe.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
