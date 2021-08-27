import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900 flex flex-wrap md:flex-nowrap">
      <section className="p-20">
        <h1 className="inline-flex text-white text-center text-5xl w-full mb-10">
          KEYS TO THE CITY .
        </h1>
        <p className="center text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          ultrices felis, lacinia vehicula est. In condimentum leo vitae neque
          ullamcorper vestibulum. Quisque viverra elementum diam sed aliquam.
          Aliquam vel ante ac tellus pharetra volutpat. Morbi lobortis metus sed
        </p>
      </section>
      <section className="w-full">
        <Subscribe />
      </section>
      
    </div>
  );
}
