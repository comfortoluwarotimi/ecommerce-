const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-gray-600 mb-2">Style Destination</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Spring Collection</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              An electronic file provides the same information as a paper file
              and requires the same documents at a paper file.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
                Shop Now
              </button>
              <button className="border border-gray-300 px-6 py-3 hover:bg-gray-50 transition">
                Read More
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="text-9xl">📱</div>
              <div className="absolute -top-8 -left-8 text-6xl">💐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;