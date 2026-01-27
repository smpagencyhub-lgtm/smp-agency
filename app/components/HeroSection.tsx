export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Left Side - Text and Image */}
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-6 order-2 lg:order-1 animate-fade-in-up">
            {/* Left Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-red-600 leading-[0.9] tracking-tight text-center lg:text-left">
              <span className="block animate-fade-in-up">LIFE</span>
              <span className="block animate-fade-in-up animation-delay-200">IS A</span>
              <span className="block animate-fade-in-up animation-delay-400">PARTY</span>
            </h1>
            
            {/* Left Image - Oval */}
            <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80">
              <div className="absolute inset-0 rounded-[40%] border-2 border-red-600/40 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-[38%] overflow-hidden">
                      <img
                          src="/images/left-model.gif"
                          alt="Left Model"
                          className="object-cover w-full h-full"/>
                </div>
              </div>
            </div>
            
            {/* Left Body Text */}
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg font-serif max-w-xs text-center lg:text-left animate-fade-in-up animation-delay-600">
              Join the elite. Build your empire. Own your space.
            </p>
          </div>

          {/* Center - Large Circular Image */}
          <div className="flex justify-center items-center order-1 lg:order-2 animate-fade-in-up animation-delay-200">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-red-600/40 shadow-2xl shadow-red-600/30 animate-pulse-once transform hover:scale-110 transition-all duration-600 hover:shadow-red-600/50 hover:border-red-600/60">
               
                      <img
                          src="/images/center-model.gif"
                          alt="center Model"
                          className="object-cover w-full h-full"/>
              </div>
            </div>
          </div>

          {/* Right Side - Text and Image */}
          <div className="flex flex-col items-center lg:items-end space-y-4 lg:space-y-6 order-3 animate-fade-in-up animation-delay-400">
            {/* Right Sub-heading */}
            <p className="text-red-600/80 text-base sm:text-lg md:text-xl lg:text-2xl font-serif tracking-wider animate-fade-in-up">
              OASIS.
            </p>
            
            {/* Right Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-red-600 leading-[0.9] tracking-tight text-center lg:text-right">
              <span className="block animate-fade-in-up animation-delay-200">DO IT</span>
              <span className="block animate-fade-in-up animation-delay-400">IN</span>
              <span className="block animate-fade-in-up animation-delay-600">STYLE</span>
            </h1>
            
            {/* Right Image - Oval */}
            <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80">
              <div className="absolute inset-0 rounded-[40%] border-2 border-red-600/40 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-[38%] overflow-hidden">
                      <img
                          src="/images/right-model.gif"
                          alt="center Model"
                          className="object-cover w-full h-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 sm:space-y-6 animate-fade-in-up animation-delay-800 z-20">
          {/* Apply Now Button - Circular */}
          <a
            href="#apply"
            className="group relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
            flex items-center justify-center rounded-full border-2 border-red-600
            hover:border-red-500 transition-all duration-500 hover:scale-105
            hover:shadow-xl hover:shadow-red-600/60 bg-black/50 backdrop-blur-sm
            hover:bg-black/70"
          >
            <span className="text-red-600 font-serif text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider group-hover:text-red-500 transition-colors duration-300 text-center leading-tight">
              APPLY
              <br />
              NOW!
            </span>
            <div className="absolute inset-0 rounded-full border-2 border-red-600/30 animate-ping opacity-0 group-hover:opacity-100 pointer-events-none"></div>
          </a>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
