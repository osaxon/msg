import Subscribe from "../components/Subscribe";
import Heading from "../components/Heading";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <section className="black md:w-7/12 px-8 p-8 md:px-24 md:p-12 md:min-h-screen">
        <Heading/>
        <p className="mt-4 text-gray-50">Unlock <span className="font-bold">ACTUAL</span> knowledge of uni life from students that remember what it's like to be a fresher.</p>
        
        <br/>
        <p className="text-gray-50">Maximise your experience by learning from our mistakes, and start the year with tips we wish we had when we first arrived.</p>
        <br/>
        <p className="text-gray-50">With inside info on the best clubs in the city (you won't find them on a bullshit wristband), how to make friends quickly, and why not to sleep with your flatmates, sign up below to make this the greatest year of your life.</p>
        <br/>
        <p className="text-gray-50">Follow our guide, and it won't be hard...</p>
      </section>

      <section className="w-full md:min-h-screen h-72 black md:w-5/12 flex-col justify-center items-center">
        <Subscribe/>
        <div className="mx-auto image-container mb-2">
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
          }
      `}</style>
      
    </main>

  );
}
