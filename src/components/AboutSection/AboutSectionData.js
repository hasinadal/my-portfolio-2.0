import ImageHelper from "../../Helpers/ImageHelper";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";

export const AboutSectionData = {
  sectionTitle: SectionTitleHelper.aboutMe,
  description: [
    {
      id: 1,
      desc: "I am a dynamic and imaginative recent graduate, holding a bachelor's degree in Computer Engineering from India, with a strong specialization in the field.",
    },
    {
      id: 2,
      desc: "I'm dedicated, responsible, flexible and adaptable according to the projects. I pride myself on my eagerness and ability to learn. Over the last few years, I have allowed myself to delve into a design and art centric lifestyle. Due to my attention to detail, I am constantly absorbing ideas from everyday life. I am very passionate about my work and driven to satisfy my clients.",
    },
    {
      id: 3,
      desc: "Until recently, I was employed as a Front-End Developer and UI/UX Designer at a prominent product-based IT company, located in Bangalore, Karnataka. Additionally, I have embraced freelance work, collaborating with a wide range of clients on an array of exciting projects. My objective is to craft inventive solutions that not only captivate but also foster enduring connections between brands and their customer base. My primary focus on branding and UI/projects/web design is driven by a resolute desire to produce seamless and polished products through intentional and impassioned design.",
    },
    {
      id: 4,
      desc: "Following my departure from my previous role, I ventured into entrepreneurship, successfully establishing two startups that have shown promising performance. This journey led me to take a refreshing hiatus from the corporate world, returning to my roots in Ahmedabad, Gujarat and relishing quality time with my family. Having recharged both mentally and emotionally, I am now invigorated and actively seeking new avenues to apply my skills and expertise.",
    },
  ],
  buttonData: {
    name: "Let's Connect",
    url: "https://www.linkedin.com/in/tabrezdal/",
  },
  sectionImage: ImageHelper?.AboutImage,
};
