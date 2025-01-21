import React from "react";
import "@/app/globals.css"; 
import Navbar from "@/components/Header/Header"; 
import Footer from "@/components/Footer/Footer"; 

export const metadata = {
  title: "Prospeo - Find Leads That Respond",
  description: "Accelerate growth with verified emails and mobile numbers.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* <Navbar />  */}
        <main className="min-h-screen flex flex-col">{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
};

export default RootLayout;
