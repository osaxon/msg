import Subscribe from "../components/Subscribe";
import Heading from "../components/Heading";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <section className="black md:w-7/12 px-12 p-8 md:px-24 md:p-12 md:min-h-screen">
        <Heading/>
        <p className="mt-4 text-gray-50">Unlock <span className="font-bold">ACTUAL</span> knowledge of uni life from students that remember what it's like to be a fresher.</p>
        
        <br/>
        <p className="text-gray-50">Maximise your experience by learning from our mistakes, and start the year with tips we wish we had when we first arrived</p>
        <br/>
        <p className="text-gray-50">With inside info on the best clubs in the city (you won't find them on a bullshit wristband), how to make friends quickly, and why not to sleep with your flatmates, sign up below to make this the greatest year of your life.</p>
        <br/>
        <p className="text-gray-50">Follow our guide, and it won't be hard...</p>
      </section>

      <section className="w-full black px-10 md:w-5/12 flex flex-wrap justify-center md:items-end">
        <Subscribe/>
        <div className="mx-5 min-h-10">
          <Image 
            src={logo} 
            layout="intrinsic"
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
