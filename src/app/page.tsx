import Link from 'next/link';
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Header/Header";
import DemoImg from "../components/Demo/DemoImg";
import Brand from "../components/Brand/BrandIcons";
import Status from "../components/status/Status";
import Heading from "../components/AnimatedHeading/Heading";
import Cards from "../components/Integrate/Cards";
import Founder from "../components/FounderCard/FounderCard";
import BackgroundWrapper from '../components/BackgroundWrapper';
import MeetCompanies from '../components/MeetCompanies/MeetCompanies';
import LowerSection from '../components/Collaburation/CollaburationCompanies';

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <DemoImg />
      <Brand/>
      <Status />
      <Heading />
      <Cards />
      <Founder />
      <BackgroundWrapper>
      <MeetCompanies />
      {/* <LowerSection /> */}
    </BackgroundWrapper>
    <div className="text-center mt-4">
           <Link href="/dashboard" className="text-blue-500 underline">
             Go to Dashboard
           </Link>
         </div>
    </div>
  );
}
