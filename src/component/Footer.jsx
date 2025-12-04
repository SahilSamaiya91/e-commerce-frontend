const Footer = () => {
  return (
    <footer className="bg-black text-white py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-30 px-6">
        {/* GET IN TOUCH */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src="/goToTouch.png" className="w-6 h-4" />
            <h3 className="text-xl font-semibold">GET IN TOUCH</h3>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <img src="/whatsapp.png" className="w-6 h-6" />
            <span className="font-bold">Whatsapp:</span>
            <span className="underline">+91 8120860187</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="font-bold">Support:</span>
            <a href="mailto:sahillihas050@gmail.com" className="underline">
              sahillihas050@gmail.com
            </a>
          </div>

          <div className="border-b border-gray-300 w-full"></div>

          <div>
            <div className="flex items-center gap-2 text-xl font-semibold mb-3">
              <img src="/ReachUs.png" className="w-5 h-6" />
              REACH US
            </div>

            <div className="text-sm leading-relaxed">
              <p>103, Manjunatha Enclave, 1st Main Road</p>
              <p>Murgeshpalya, near HAL main gate</p>
              <p>560017 Bangalore, Karnataka</p>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src="/socialLogo.png" className="w-6 h-6" />
            <h3 className="text-xl font-semibold">SOCIAL</h3>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/instagram.png" className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/facebook.png" className="w-8 h-8" />
            </a>
          </div>

          <div className="border-b border-gray-300 w-full"></div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src="/About Us.png" className="w-12 h-10" />
              <h3 className="text-xl font-semibold">ABOUT US</h3>
            </div>

            <div className="ml-10 space-y-2 text-sm">
              <div className="hover:text-yellow-400">ABOUT US</div>
              <div className="hover:text-yellow-400">THE BEGINNING</div>
              <div className="hover:text-yellow-400">THE INFINITY</div>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-2">
            <img src="/link.png" className="w-5 h-4" />
            <h3 className="text-xl font-semibold">QUICK LINK</h3>
          </div>

          {[
            "HOME",
            "MY ACCOUNT",
            "CONTACT US",
            "FAQ",
            "T&C",
            "PRIVACY POLICY",
            "REFUND POLICY",
            "RETURN AND EXCHANGE POLICY",
          ].map((item) => (
            <div key={item} className="text-sm hover:text-amber-500">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20 text-[12px]">
        {" "}
        © 2025, temoc Marketing Private Limited. All Rights Reserved.{" "}
      </div>
    </footer>
  );
};

export default Footer;
