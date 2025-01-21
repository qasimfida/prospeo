export const logoPath = "/icons/Prosepeo.svg";
export const ImgPath = "/images/mainImage.jpg";

export const navigationLinks = [
  { name: "Platform", href: "#platform" },
  { name: "Our Data", href: "#data" },
  { name: "Why Prospeo", href: "#why" },
  { name: "Resources", href: "#resources" },
  { name: "Pricing", href: "#pricing" },
];

export const heroSection = {
  title: "Find leads that respond",
  description:
    "Accelerate growth with verified emails and mobile numbers – 250M leads and 30M companies at your fingertips.",
  ratings: [
    { icon: "/icons/GoogleIcon.svg", rating: "4.4", label: "★★★★★" },
    { icon: "/icons/suffixIcon.svg", rating: "4.6", label: "★★★★★" },
  ],
  buttonText: "Get Started for free",
  backgroundImage: "/icons/HeroBg.svg",
  buttonIcon: "/icons/statsIcon.svg",
};

export const brands = [
    {
      name: "Google",
      src: "/icons/google.svg",
    },
    {
      name: "DocuSign",
      src: "/icons/doc.svg",
    },
    {
      name: "Flixier",
      src: "/icons/fli.svg",
    },
    {
      name: "Oracle",
      src: "/icons/Oracle.svg",
    },
    {
      name: "Webflow",
      src: "/icons/webflow.svg",
    },
    {
      name: "FreshBooks",
      src: "/icons/freshbook.svg",
    },
  ];
  

  export const statsSection = {
    title: "27% Increase in positive reply",
    description:
      "The depth and breadth of Prospeo’s database has enabled us to prospect better accounts and bring in larger deals. In fact, since bringing on Prospeo the average company size we’re closing has grown by 2.5x.",
    author: {
      name: "Michel Lieben, Ceo at",
      role: " ColdIQ",
      image: "/images/FrameDp.png",
    },
    stats: [
      {
        percentage: "55%",
        label: "Pick up rate on mobiles",
        icon: "/images/smartphone.png",
      },
      {
        percentage: "55M",
        label: "Verified email addresses",
        icon: "/images/Email.png",
      },
      {
        percentage: "90%",
        label: "Data accuracy",
        icon: "/images/Layer.png",
        width: "152px",
        height: "110px",
      },
    ],
    backgrounds: {
      redOverlay: "/images/BackgroundMaterials.png",
    
    },
  };
  
  export const headingText = {
    heading: "Integrate into any workflow",
  };

  export const cardData = [
    {
      id: 1,
      title: "Integrate into any workflow",
      icons: [
        "/icons/logo.svg", 
        "/icons/logo2.svg",
        "/icons/logocard4.svg",
        "/icons/csvlogo.svg",
        "/icons/logocard3.svg",
        "/icons/logo5.svg",
      ],
      backgroundImage: "/icons/Card1bg.svg", 
    },
    {
      id: 2,
      title: "Enrich from CSV",
      description:
        "Add your CSV to enrich data seamlessly. Easy integration with your workflow.",
      overlayImage: "/images/Card2front.png", 
      backgroundImage: "/images/Bgcard2.png", 
    },
    {
      id: 3,
      title: "You are a click away from Growth",
      badges: [
        { image: "/icons/csvlogo.svg", label: "Tier Accuracy 2021" },
        { image: "/icons/csvlogo.svg", label: "High Performer 2021" },
        { image: "/icons/csvlogo.svg", label: "Most Used 2024" },
      ],
    },
  ];
  export const getFounderCardData = () => ({

    title: "Prospeo for Founders",
  
    description: "Enable your team to connect with the right people through better contact data and workflows, guided by intent signals.",
  
    points: [
  
      "Contact & Account Search: Access over 124 million verified contacts to create targeted lists matching your ideal customer profiles.",
  
      "Intent Data: Identify prospects actively interested in your offerings for timely, relevant outreach.",
  
      "Chrome Extension: Allow your team to find accurate contact information directly on LinkedIn and other websites, in one click.",
  
      "Reliable Contact Details: Equip your team with verified email addresses and phone numbers that actually pick up.",
  
    ],
  
    buttons: ["Founders", "Sales Team", "Revops"],
  
    image: "/images/founderframe.png",
  
    backgroundImage: "/images/founder.png",
  
  }); 
  
  
export const footerText = `© ${new Date().getFullYear()} Prospeo. All rights reserved.`;
