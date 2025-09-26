import quickcast from "../assets/projects/quickcast.png";
import BGMISensiFix from "../assets/projects/bgmi.png";
import sopify from "../assets/projects/sopify.png";
import aiplugin from "../assets/projects/aiplugin.png";
import portfolio from "../assets/projects/portfolio.png";
import codecollab from "../assets/projects/codecollab.png";
import { code } from "framer-motion/client";

export const HERO_CONTENT = `M.Sc Computer Science student and passionate MERN stack developer with hands-on internship experience at 'Digipodium'. I specialize in building dynamic web applications using 
Next.js, React.js, and MongoDB. My portfolio showcases diverse projects, including an AI-powered tool using the Gemini API and a real-time presentation system, reflecting my passion for creating innovative, real-world solutions.`;

export const ABOUT_TEXT = `A motivated and detail-oriented M.Sc Computer Science student with practical experience in full-stack web development. During my MERN Stack internship at 'Digipodium', I successfully mentored over 30 students in developing their final year projects and built more than 8 projects myself. I am proficient in developing applications using technologies like - 
Next.js, React.js, Express.js, and MongoDB. My project work includes creating an AI-powered web app with the Gemini API and a real-time presentation system. I have also presented a research paper on IoT security at a national science and technology conference. I am eager to leverage my skills to contribute to innovative and challenging projects.`;

export const EDUCATIONS = [
  {
    year: "2024 - Present",
    degree: "M.Sc Computer Science",
    place: "Dr. Rammanohar Lohia Avadh University, Ayodhya(U.P.)",
    description: `Pursuing an MSc in Computer Science from Dr. Rammanohar Lohia Avadh University provides advanced knowledge, research opportunities, and industry readiness.`,
  },
  {
    year: "2021 - 2024",
    degree: "B.Sc Computer Science",
    place: "Dr. Rammanohar Lohia Avadh University, Ayodhya(U.P.)",
    description: `Graduated with a BSc in Computer Science from Dr. Rammanohar Lohia Avadh University provides a strong foundation in computing, programming, and problem-solving.`,
  },
  {
    year: "2020 - 2021",
    degree: "10+2 Non-Medical",
    place: "Gopal Vidya Mandir Sr. Sec. School, Jind(Hr.)",
    description: `Passed +2 (Non-Medical) from Gopal Vidya Mandir Sr. Sec. School with 81% marks, excelling in mathematics, physics, and chemistry.`,
  },
  {
    year: "2018 - 2019",
    degree: "10th",
    place: "Gopal Vidya Mandir Sr. Sec. School, Jind(Hr.)",
    description: `Passed 10th from Gopal Vidya Mandir Sr. Sec. School with 76.6% marks, showcasing strong academic performance across all subjects.`,
  },
];

export const EXPERIENCE = [
  {
    year: "Feb 2025 - May 2025",
    degree: "MERN Stack Web Dev Intern",
    place: "Digipodium",
    description: `Completed a 4-month internship at Digipodium, gaining hands-on experience in MERN stack development, enhancing skills in building full-stack web applications, and collaborating on real-world projects.`,
  }
];

export const PROJECTS = [
  {
    title: "BGMI Sensi Fix",
    link: "https://bgmi-sensi-fix.vercel.app/",
    image: BGMISensiFix,
    description:
    "This is an AI-powered web application designed to generate optimal sensitivity codes for Battlegrounds Mobile India (BGMI) players. Leveraging the Gemini API, the tool creates personalized settings based on user preferences to help enhance in-game aiming and performance.",
    technologies: ["NEXTJS", "Tailwind CSS", "Gemini API"],
  },
  {
    title: "QuickCast",
    link: "https://quick-cast-beta.vercel.app/",
    image: quickcast,
    description:
    "A real-time presentation system with content sharing, live polls, and chat features to enhance accessibility and audience interaction across devices",
    technologies: ["NEXTJS", "Tailwind CSS", "ExpressJS", "Node.js", "MongoDB"],
  },
  {
    title: "AI Galaxy Plugin",
    link: "https://ai-plugin-galaxy.vercel.app/",
    image: aiplugin,
    description:
    "Documentation for AI Extensions! This guide will help you integrate our AI components into your own projects seamlessly. Our components are designed to be plug-and-play, requiring minimal setup.",
    technologies: ["NEXTJS", "Tailwind CSS", "ExpressJS", "Node.js", "MongoDB"],
  },
  {
    title: " SOPify - Document Activity Recorder",
    link: "https://sopify-five.vercel.app/",
    image: sopify,
    description:
    "A web-based extension and website designed to automate the creation of Standard Operating Procedures (SOPs). The tool streamlines documentation by capturing screenshots, recording user activity, and allowing for in-app document editing and export.",
    technologies: ["NEXTJS", "Tailwind CSS", "ExpressJS", "Node.js", "MongoDB"],
  },
  {
    title: "Code Collab Website",
    link: "/",
    image: codecollab,
    description:
    "Open-Source Repo Finder,Your go-to platform for discovering open-source projects tailored to your skills and interests!",
    technologies: ["NEXTJS", "Tailwind CSS", "ExpressJS", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    link: "/",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJS", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Ajmer Basti Jind, Haryana 126102",
  phoneNo: "+91 97297-06784",
  email: "anishkumargvm02@gmail.com",
};
