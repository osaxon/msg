import Subscribe from "../components/Subscribe";
import Heading from "../components/Heading";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <section className="black md:w-7/12 px-6 p-6 md:px-24 md:p-12 md:min-h-screen">
        <Heading/>
        <p className="mt-4 text-gray-50">Unlock <span className="font-bold">ACTUAL</span> knowledge of uni life from students that remember what it's like to be a fresher.</p>
        <p className="text-gray-50">Learn from our mistakes, and start the year with knowledge we wish we had when we first arrived.</p>
        <br/>
        <p className="text-gray-50">Inside info on the best clubs in the city (you won't find them on a bullshit wristband), how to make friends quickly, and why not to sleep with your flatmates - follow our guide to maximise your uni experience.</p>
        <br/>
        <p className="text-gray-50">This might just be the greatest year of your life. Sign up below to guarantee it...</p>
      </section>

      <section className="w-full md:min-h-screen h-80 black md:w-5/12 flex-col justify-center items-center">
        <Subscribe/>
        <div className="mx-auto image-container">
          <Image 
            src={logo} 
            layout="responsive"
            width={1860}
            height={519}
            objectFit="cover"
            />
        </div>
      </section>
      
      <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            background-color: #1a1a1a;
          }
      `}</style>
      
    </main>

  );
}
