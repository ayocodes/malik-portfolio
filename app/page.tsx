"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import {
  Menu,
  X,
  Video,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import {
  SiReact,
  SiHtml5,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface IExperience {
  Icon: any;
  name: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className=" rounded-xl p-1.5 bg-gradient-to-br from-blue-500 to-purple-600">
    <div className=" bg-[#0E1630] p-10 rounded-md">
      <div className=" flex gap-8 items-center mb-4">
        <div className=" p-3 rounded-full bg-white">
          <Video className=" text-purple-600 w-10 h-10 lg:w-16 lg:h-16" />
        </div>

        <h3 className="mb-2 font-bold text-white text-xl md:text-2xl xl:text-3xl">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 leading-6 font-bold text-lg">{description}</p>
    </div>
  </div>
);

const ExpCard: React.FC<IExperience> = ({ Icon, name }) => (
  <div className=" flex flex-col gap-8 items-center">
    <Icon size={80} color="default" />
    <p className=" text-gray-200 font-bold text-2xl">{name}</p>
  </div>
);

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-[#1016304b] md:hidden z-50 ${
        isOpen ? "" : "hidden"
      } flex justify-end`}
    >
      <div className="bg-[#101630d8] backdrop-blur-md p-4 w-4/5">
        <div className=" flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 font-bold pt-8 text-white">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">EXPERIENCE</a>
          </li>
          <li>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-full text-white w-full mt-6">
              CONTACT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cards = [
    {
      icon: "▶️",
      title: "VIDEO EDITING",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: "📱",
      title: "MOBILE APP DEVELOPMENT",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: "🖥️",
      title: "DESKTOP APP DEVELOPMENT",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      icon: "&lt;/&gt;",
      title: "PROGRAMMING LANGUAGES",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const experience: IExperience[] = [
    {
      Icon: SiReact,
      name: "React.JS",
    },
    {
      Icon: SiHtml5,
      name: "HTML",
    },
    {
      Icon: SiPython,
      name: "Python",
    },
    {
      Icon: SiJavascript,
      name: "Javascript",
    },
    {
      Icon: SiNodedotjs,
      name: "Node.js",
    },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
    },
  ];

  return (
    <div
      className={`min-h-screen text-white overflow-x-hidden ${montserrat.className}`}
    >
      <header className="p-4 lg:px-32">
        <nav className="flex justify-between items-center">
          <div className="text-4xl font-bold text-sky-300">A.A</div>
          <ul className="hidden md:flex md:gap-8 lg:gap-10  text-white font-bold text-sm">
            <li>
              <a href="#" className=" hover:text-sky-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-sky-300">
                ABOUT ME
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-sky-300">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-sky-300">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-sky-300">
                EXPERIENCE
              </a>
            </li>
          </ul>
          <button className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-5 rounded-xl text-sm font-bold">
            CONTACT
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <MobileNav isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <main className="flex flex-col justify-center px-4 md:px-16 lg:px-32 pt-16 md:pt-32 max-w-full">
        <h2 className="text-xl md:text-2xl text-gray-400 mb-2 font-bold">
          I'm a
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 break-words">
          FULL STACK
          <br />
          SOFTWARE
          <br />
          DEVELOPER<span className="text-sky-300">.</span>
        </h1>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-6 rounded-xl font-bold text-lg w-max">
          Previous Projects
        </button>

        {/* about me section */}

        <div className=" pt-16 lg:pt-40 flex flex-col md:flex-row justify-between items-center gap-8 md:space-y-0 md:space-x-12">
          <div className="w-full lg:w-1/2 ">
            <div className="relative z-10 overflow-hidden">
              <Image
                src="/malik.jpg"
                alt="Profile picture"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-8 w-full lg:w-1/2 ">
            <h2 className="text-3xl md:text-4xl font-bold">ABOUT ME</h2>
            <p className="text-gray-400 leading-6 font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex gap-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-6 rounded-2xl text-white w-full lg:text-xl font-bold ">
                HIRE ME
              </button>
              <button className="bg-transparent border border-purple-500 px-8 py-6 rounded-2xl text-white font-bold lg:text-xl w-full ">
                RESUME
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio */}

        <div className=" pt-16 lg:pt-40">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Portfolio
          </h1>

          <div className=" pt-16 lg:pt-40 flex flex-col md:flex-row justify-between items-center gap-20">
            <div className=" flex flex-col gap-8 w-full lg:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl text-sky-300 font-medium">
                Project 1
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold">
                Fundus AI - health app
              </h2>
              <p className="text-gray-400 leading-6 font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="flex gap-8">
                <p className=" text-white text-xl">→</p>
                <button className=" text-white font-semibold hover:text-blue-500">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 md:order-2">
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/pro-1.png"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className=" pt-16 lg:pt-40 flex flex-col md:flex-row justify-between items-center gap-20 w-full">
            <div className=" flex flex-col gap-8 w-full lg:w-1/2 order-2 md:order-2">
              <h2 className="text-3xl md:text-4xl text-sky-300 font-medium">
                Project 2
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold">
                Robo AI - robotics app
              </h2>
              <p className="text-gray-400 leading-6 font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="flex gap-8">
                <p className=" text-white text-xl">→</p>
                <button className=" text-white font-semibold hover:text-blue-500">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 md:order-1">
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/pro-2.png"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className=" pt-16 lg:pt-40 flex flex-col md:flex-row justify-between items-center gap-20">
            <div className=" flex flex-col gap-8 w-full lg:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl text-sky-300 font-medium">
                Project 3
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold">
                Fundus AI - health app
              </h2>
              <p className="text-gray-400 leading-6 font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="flex gap-8">
                <p className=" text-white text-xl">→</p>
                <button className=" text-white font-semibold hover:text-blue-500">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 md:order-2">
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/pro-1.png"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className=" pt-16 lg:pt-40 flex flex-col md:flex-row justify-between items-center gap-20 w-full">
            <div className=" flex flex-col gap-8 w-full lg:w-1/2 order-2 md:order-2">
              <h2 className="text-3xl md:text-4xl text-sky-300 font-medium">
                Project 4
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold">
                Robo AI - robotics app
              </h2>
              <p className="text-gray-400 leading-6 font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="flex gap-8">
                <p className=" text-white text-xl">→</p>
                <button className=" text-white font-semibold hover:text-blue-500">
                  Read more
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 md:order-1">
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/pro-2.png"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-center pt-16 lg:pt-20">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-24 py-6 rounded-2xl text-white lg:text-xl font-bold ">
              View all
            </button>
          </div>
        </div>

        {/* Services section */}
        <div className="  pt-16 lg:pt-40">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Services
          </h1>
          <div className=" grid gap-28 sm:grid-cols-1 lg:grid-cols-2  pt-16 ">
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* Experience section */}
        <div className="  pt-16 lg:pt-40">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Services
          </h1>
          <div className=" grid gap-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4  pt-16 ">
            {experience.map((link, index) => (
              <ExpCard key={index} {...link} />
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className=" bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-8 flex flex-col items-center justify-center mx-[-16px] md:mx-[-64px] lg:mx-[-128px] mt-16 lg:mt-40 pt-16 lg:pt-20 rounded-t-[60px] lg:rounded-t-[200px] md:rounded-t-[100px] px-4 md:px-16 lg:px-32">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            CONTACT
          </h1>

          <div className=" w-full flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">
                Drop Me a Message
              </h2>
              <p className="text-white mb-8">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's. 
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="text-white" />,
                    text: "+234 9068572831",
                  },
                  {
                    icon: <Mail className="text-white" />,
                    text: "adeyemo@gmail.com",
                  },
                  {
                    icon: <MapPin className="text-white" />,
                    text: "House No: 07 Rafsar Town, Mirpurkhas, 69000, Sindh Nigeria",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4"
                  >
                    <div className="bg-gradient-to-br from-blue-300 to-blue-600  p-4 rounded-lg shadow-lg">
                      {item.icon}
                    </div>
                    <span className="text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-gray-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-gray-800 text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-700 transition duration-300"
                    >
                      Send
                    </button>
                  </form>
            </div>

          </div>

          <div className="mt-12 flex flex-col lg:flex-row items-center justify-between w-full gap-2">
            <div className="flex items-center space-x-2 order-2 lg:order-1">
              <div className="text-white text-4xl font-bold">FS</div>
              <div className="text-white text-sm">
                2022 - Fazil Studio, All rights reserved
              </div>
            </div>
            <div className="flex space-x-4  order-1 lg:order-2">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-20 p-2 rounded-lg"
                >
                  <Icon className="text-white" size={24} />
                </div>
              ))}
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <span className="text-white font-bold">Be</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
