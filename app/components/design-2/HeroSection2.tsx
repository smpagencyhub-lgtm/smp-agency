const HeroSection2 = () => {
  return (
    <section id="hero" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl h-screen mx-auto">
        <div className="grid grid-cols-3 h-full gap-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div className="col-span-2 ">04</div>
          <div>05</div>
          <div>06</div>
          <div className="col-span-2 ">07</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
