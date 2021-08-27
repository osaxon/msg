import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-3 bg-gray-900 grid-rows-2">
      <section className="md:col-span-2 p-12 md:p-28 md:row-span-full">
        <h1 className="text-red-500 font-black md:text-5xl text-4xl w-full mb-6">
          KEYS TO <br/> THE CITY .
        </h1>
        <p className="center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          ultrices felis, lacinia vehicula est. In condimentum leo vitae neque
          ullamcorper vestibulum. Quisque viverra elementum diam sed aliquam.
          Aliquam vel ante ac tellus pharetra volutpat. Morbi lobortis metus sed
        </p>
      </section>
      <section className="md:col-start-3 row-span-2">
        <Subscribe />
      </section>
      
    </div>
  );
}
