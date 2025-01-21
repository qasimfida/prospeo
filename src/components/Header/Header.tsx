import React from "react";
import Link from "next/link"; // Import Link from next/link
import { Button } from "@/components/ui/button"; // Assuming Button is a custom UI component
import { navigationLinks, logoPath } from "@/lib/data";  

const Header = () => {
  return (
    <header className="fixed font-coresansd top-[47px] left-1/2 transform -translate-x-1/2 w-[1121px] bg-white rounded-[15px] shadow-md z-50">
      <div className="h-[65px] p-[10px_20px] flex gap-[38px] justify-around items-center">
        <Link href="/" passHref>
          <div className="">
            <img src={logoPath} alt="Logo" />
          </div>
        </Link>
      
        <nav className="flex gap-[32px]">
          {navigationLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref className="text-[#0B0C0E] text-[18px] font-normal">
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex gap-[16px] items-center">
          <Link href="#login" passHref className="text-[#0B0C0E] text-[18px] font-normal">
            Login
          </Link>

          {/* Wrap the "Get Started" button with Link */}
          <Link href="/dashboard" passHref>
            <Button variant="default" className="bg-[#EF1515] p-[9px_16px] rounded-[7.8px] text-[18px] text-normal text-white hover:bg-[#d40d0d]">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
