import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver for <b>Clients</b>  and <b>Junior Delopers</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Mobile Development",
    about:
      "stunning user mobile Development for Startups & Enterprises",
  },
  {
    Icon: RiComputerLine,
    title: "BlockChain Development",
    about:
      "Building Decentralised Applications using Web 3.0, React JS, Solidity!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "89",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "92",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "91",
  },
  {
    Icon: BsCircleFill,
    name: "Next Js",
    level: "89",
  },
  {
    Icon: BsCircleFill,
    name: "Node JS",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Github",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Visual Studio Code",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Android Studio",
    level: "75",
  },
];

export const projects: IProject[] = [
  { 
    name: "OneSeason (Travel Web Application)",
    description:
      "I was responsible for leading the team for this project to develop a digital platform connecting hoteliers and travelers. OneSeason provides opportunities for hoteliers and related business owners to increase their revenue intensively while  at the same time serving as a complete guide and resource to all travelers by providing every features required to make their journeys/adventure a complete experience. These features where implemented using technologies like React JS, Node JS, Express, Bootstrap CSS and mongo DB which resulted in a clear, responsive, easy/quick navigation and fast search mechanism which aid the visitors and travelers find what they are looking for faster. Therefore reducing bounce back by at least 60%, thus improving the ranks in search engines towards 35% and increasing the response time of every request by 45%.",
    image_path: "/images/OneSeason.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    key_techs: ["React", "Node JS", "Express", "Bootstrap", "Redux"],
  },
  {
    name: "Perfect Sharon (E-commerce Web Application)",
    image_path: "/images/Perfect Sharon Logo 1.jpeg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description:
      "Perfect Sharon was designed to reflect a modern take on women’s underwear with the focus of offering simple and sporty-style bikinis that are comfortable, affordable, attractive and pleasant manner. My role was to provide an E-commerce application that is accessible, easy, fast, smooth in navigation, user friendly, and can scale in terms of traffic. I was able to achieve these by using technologies like Python / Django for server side and React JS for frontend.",
    key_techs: ["React", "Python", "Django"],
  },

  {
    name: "EaglesEye (Properties Web Application)",
    image_path: "/images/Eagles Eye_ Real Estate.png",
    deployed_url: "https://eagleseye.ae/",
    github_url: "#",
    category: ["node", "mongo", "react"],
    description:
      "Developed a property web application targeted for users in UAE to have a seamless platform where sellers, buyers, and tenants are able to connect and provide a common and reliable source for the UAE real estate market. Intended to be a one-stop database of available listings of all properties for sale and rent. With my combination of modern practices in React, JavaScript, Typescript, CSS, and HTML Node.js improved the time of page for the average user by 2 minutes. We were also able to increase the page views per session by 22%.",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Next JS",
    ],
  },

  {
    name: "Mobilies.io (Website for Mobile Development Services)",
    image_path: "/images/mobilies.io screen.jpeg",
    deployed_url: "http://mobilies.io/",
    github_url: "#",
    category: ["django", "react"],
    description:
      "Developed a website showcasing my services with style. Built to outline all the information and benefits of subscribing to my development services. I developed this website using one of PHP's most used platforms,  WordPress. Today I improved the speed and responsiveness of the website thus increasing the number of traffic by 15% using and creating advanced plugins. The smoothness of the website has attracted a volume of potential clients for these services by 20% so far.",
    key_techs: ["PHP", "Laravel", "SQL"],
  },

  {
    name: "Turbine (Web Application for Growing Businesses)",
    image_path: "/images/Turbine.png",
    deployed_url: "https://turbine.media/",
    github_url: "#",
    category: ["express"],
    description:
      "Built Turbine as a common ground to enable both influencers and promoters to connect seamlessly to grow their business and generate income for themselves. I used top industry PHP leading library's Laravel thus saving time and resources by 60% generating a must-have common feature in almost every application like Authentication, Registration, and Logins to mention a few. Overall using the Laravel MVC architecture by avoiding code duplication and separating business logic from the presentation logic, coupled with the PHP Active Record implementation we improved our development time by 30% and project scalability by 15%.",
    key_techs: ["Laravel", "PHP", "Javascript"],
  },
  {
    name: "IDIP Mobile App",
    image_path: "/images/IDIP.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    description:
      'Developed a government-oriented app for the management and control of the Internally displaced people (IDIP) affected by a group of rivals back then in Nigeria. Used the reusable components of React,  to create an easy-to-use UI with flexible navigation thereby reducing the learning curve by 70%. And Node.js tool such as NPM to utilize back-end libraries.',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "Firestore",
      "React Native",
      "Styled Components",
    ],
  },
];
