import gambar from "../assets/profile.png";
import ai from "../assets/AI.png";
import web from "../assets/WEB.png";
import js from "../assets/JS.png";
import k3 from "../assets/k3.png";
import pr1 from "../assets/project1.png";
import pr2 from "../assets/pr2.png";
import pr3 from "../assets/pr3.png";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { Button } from "flowbite-react";
import { IoLogoWhatsapp } from "react-icons/io";

import { motion } from "framer-motion";
import { Card } from "flowbite-react";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { SiDbeaver } from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";
import { SiDart } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const skills = [
  { name: "Laravel", icon: FaLaravel },
  { name: "React", icon: RiReactjsFill },
  { name: "PHP", icon: FaPhp },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "HTML", icon: AiOutlineHtml5 },
  { name: "CSS", icon: TbBrandCss3 },
  { name: "C#", icon: TbBrandCSharp },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "DBeaver", icon: SiDbeaver },
  { name: "Flutter", icon: TbBrandFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Figma", icon: FaFigma },
];

export default function HomeComp() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}
      </style>

      <Navbar className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-md transition-all duration-300">
        <NavbarBrand href="Home">
          <img
            src="https://i.pinimg.com/736x/e7/f9/89/e7f9891586ae166c8fbcbc1b17d52f59.jpg"
            className="mr-3 h-6 sm:h-9 rounded-full"
            style={{ boxShadow: "0 0 10px white" }}
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            sidowwws.
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#Home" active>
            Home
          </NavbarLink>
          <NavbarLink href="#skills">Skills</NavbarLink>
          <NavbarLink href="#project">Project</NavbarLink>
          <NavbarLink href="#certificate">Certificate</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <section
        id="Home"
        className="min-h-screen flex items-center py-16 px-4 md:py-24 lg:py-32 bg-transparent"
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Hi, I'm{" "}
                <span style={{ fontFamily: "'Pacifico', cursive" }}>
                  dowwws
                </span>
              </h1>

              <p className="typing-text text-2xl md:text-2xl text-blue-600 dark:text-blue-400 mb-5 font-semibold">
                Frontend | UI/UX Design
              </p>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md md:max-w-2xl mx-auto md:mx-0">
                I am someone who is passionate about design and a user-friendly
                web developer because I believe an attractive website, if
                difficult to use, will not provide a good experience to users.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
                <Button
                  gradientDuoTone="purpleToBlue"
                  href="https://wa.me/08989209979"
                  target="_blank"
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full p-0"
                >
                  <IoLogoWhatsapp className="text-xl md:text-2xl" />
                </Button>

                <Button
                  href="https://www.instagram.com/sidowwws21"
                  target="_blank"
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full p-0"
                  color="alternative"
                >
                  <RiInstagramFill className="text-xl md:text-2xl" />
                </Button>

                <Button
                  href="https://github.com/ridhobillah"
                  target="_blank"
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full p-0"
                  color="alternative"
                >
                  <FaGithub className="text-xl md:text-2xl" />
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
                    <img
                      src={gambar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-10 h-10 md:w-12 md:h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                  <FaCode color="white" size={18} />
                </div>

                <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-9 h-9 md:w-11 md:h-11 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
                  <BiLogoVisualStudio color="white" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="skills" className="py-8 mb-10">
        {" "}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2
            className="text-xl md:text-2xl font-semibold text-center mb-8 text-white"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            My Skills
          </h2>
          <div
            className="overflow-hidden rounded-full py-5 px-4 md:px-8 
                bg-white/10 backdrop-blur-md border border-white/20 text-white"
          >
            <div className="px-6 md:px-12">
              <motion.div
                className="flex w-max gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
              >
                {[...skills, ...skills].map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs md:text-sm whitespace-nowrap shadow"
                    >
                      <Icon className="text-base opacity-80" />
                      {skill.name}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div id="project" className="py-12">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Projects
        </h2>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Project 1 */}
          <Card
            className="w-full"
            imgAlt="Absensi pegawai berbasis website"
            imgSrc={pr1}
          >
            <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Absensi pegawai
            </h5>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2">
              <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                Selesai
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <FaLaravel color="red" />
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <SiMysql color="blue" />
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <SiBootstrap color="purple" />
              </span>
            </div>
          </Card>

          {/* Project 2 */}
          <Card className="w-full" imgAlt="Kamus bahasa inggris" imgSrc={pr2}>
            <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kamus bahasa inggris
            </h5>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2">
              <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                Selesai
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <RiReactjsFill color="teal" />
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <RiTailwindCssFill color="skyblue" />
              </span>
            </div>
          </Card>

          {/* Project 3 */}
          <Card className="w-full" imgAlt="Fake store app" imgSrc={pr3}>
            <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fake store app
            </h5>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2">
              <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                Selesai
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <RiReactjsFill color="teal" />
              </span>
              <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center">
                <RiTailwindCssFill color="skyblue" />
              </span>
            </div>
          </Card>
        </div>
      </div>

      <div id="certificate" className="flex items-center p-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold text-gray-900 mb-8 text-center dark:text-white"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            certificate collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kartu 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow overflow-hidden">
              {/* h-auto memastikan gambar tampil penuh sesuai bentuk aslinya */}
              <img
                className="w-full h-auto object-contain"
                src={ai}
                alt="Sertifikat 1"
              />
              <div className="p-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Dicoding
                </span>
                <h5
                  className="mt-2 mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{ fontSize: "17px" }}
                >
                  Belajar dasar AI
                </h5>
                <a
                  href={ai}
                  className="w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow overflow-hidden">
              {/* h-auto memastikan gambar tampil penuh sesuai bentuk aslinya */}
              <img
                className="w-full h-auto object-contain"
                src={web}
                alt="Sertifikat 1"
              />
              <div className="p-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Dicoding
                </span>
                <h5
                  className="mt-2 mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{ fontSize: "17px" }}
                >
                  Dasar pemrograman Web
                </h5>
                <a
                  href={web}
                  className="w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow overflow-hidden">
              {/* h-auto memastikan gambar tampil penuh sesuai bentuk aslinya */}
              <img
                className="w-full h-auto object-contain"
                src={js}
                alt="Sertifikat 1"
              />
              <div className="p-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Dicoding
                </span>
                <h5
                  className="mt-2 mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{ fontSize: "17px" }}
                >
                  Dasar pemrograman Javascript
                </h5>
                <a
                  href={js}
                  className="w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow overflow-hidden">
              {/* h-auto memastikan gambar tampil penuh sesuai bentuk aslinya */}
              <img
                className="w-full h-auto object-contain"
                src={k3}
                alt="Sertifikat 1"
              />
              <div className="p-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Dicoding
                </span>
                <h5
                  className="mt-2 mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                  style={{ fontSize: "17px" }}
                >
                  Keselamatan dan kesehatan kerja
                </h5>
                <a
                  href={k3}
                  className="w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
