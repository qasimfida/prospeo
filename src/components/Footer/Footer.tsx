import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-10 mt-[125px]"
      style={{
        backgroundImage: `url('images/Footer.png')`, // Replace with the correct path to your image
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain', // Adjust as needed: 'cover', 'contain', 'auto'
        backgroundColor: '#fef6ee', // A fallback color similar to your design
      }}
    >
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
          <div className="flex items-start space-x-2">
          
              <img
                src="icons/Prosepeo.svg"
                alt="Logo"
                className="w-[216px] "
              />
          
          
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-red-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-red-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-red-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-gray-600 hover:text-red-500">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-red-500">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        {["Products", "Resources", "Other"].map((section) => (
          <div key={section}>
            <h5 className="text-lg font-medium text-gray-800 mb-4">{section}</h5>
            <ul className="space-y-2">
              {[
                "Domain search",
                "Email finder",
                "Mobile finder",
                "Email verifier",
                "Export sales navigator",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-red-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
