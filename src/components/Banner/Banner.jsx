const Banner = () => {
  const bannerImage =
    "https://images.unsplash.com/photo-1640459958548-56c1c6717a40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full h-[20rem] relative bg-cover opacity-95">
      <img src={bannerImage} alt="banner" className="w-full h-full bg-cover" />

      <div className="absolute top-20 left-0 right-0 mx-auto w-[40rem] items-center justify-center text-center">
        <div className="flex flex-col gap-5 item-center">
          <div className="font-semibold text-2xl text-white">
            Welcome to Coinalyze
          </div>

          <div className="font-semibold text-5xl text-white">
            Crypto Currency Tracker
          </div>
          <div className="font-semibold text-sm text-white">
            Discover the world of cryptocurrencies with our comprehensive
            tracker. Stay updated on market trends, prices, and news to make
            informed investment decisions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
