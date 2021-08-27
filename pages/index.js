import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <main className="black flex flex-wrap">
      <section className="md:w-7/12 px-12 p-8 md:px-24 md:p-12 md:min-h-screen">
        <h1 className="text-orange text-5xl font-black">KEYS TO<br/> THE CITY.</h1>
        <p className="mt-4 text-gray-50">Unlock ACTUAL knowledge of uni life from students that remember what it's like to be a frsher.</p>
        <br/>
        <p className="text-gray-50">Maximise your experience by learning from our mistakes, and start the year with tips we wish we had when we first arrived</p>
        <br/>
        <p className="text-gray-50">With inside info on the best clubs in the city (you won't find them on a bullshit wristband), how to make friends quickly, and why not to sleep with your flatmates, sign up below to make this the greatest year of your life.</p>
        <br/>
        <p className="text-gray-50">Follow our guide, and it won't be hard.</p>
      </section>

      <Subscribe/>
      <style jsx global>{`
          body {
            background-color: #1a1a1a;
            margin: 0;
            padding: 0;
          }
      `}</style>
      
    </main>
  );
}
