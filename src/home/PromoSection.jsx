const PromoSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-8xl">📱</div>
          <div>
            <h2 className="text-4xl font-bold mb-4">SAMRAT</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Improve star processing with technology that creates greater
              collateral management efficiency with comprehensive, web-based Electronic.
            </p>
            <button className="bg-white text-black px-6 py-3 hover:bg-gray-100 transition">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;