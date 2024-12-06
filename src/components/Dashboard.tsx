'use client'
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import data from "@/data/Data";

export default function Dashboard() {
  return (
    <div className="dark">
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-burtons text-xl font-semibold"
            >
              Javascript Developer
            </motion.h1>
            <ul className="flex items-center">
              <li>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1n0OoFWI-2fjsXTqLJX9hDwkKiHykms5m/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </motion.a>
              </li>
            </ul>
          </nav>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:p-10 py-7"
          >
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Utkarsh Singh
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Providing services for programming and design content needs. Join
              me down below and let&apos;s get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              {[
                { href: "https://twitter.com/iutkarsh077", icon: <AiFillTwitterCircle /> },
                { href: "https://www.linkedin.com/in/utkarsh-singh-9467aa257/", icon: <AiFillLinkedin /> },
                { href: "https://github.com/iutkarsh077", icon: <AiFillGithub /> }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="flex justify-center mt-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="rounded-full border-2 border-gray-600 overflow-hidden h-68 w-68 md:h-96 md:w-96">
                <img
                  src={"../../assets/myimg.jpg"}
                  alt="My Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a web developer and designer,
              I&apos;ve done many projects{" "}
              <a href="https://github.com/iutkarsh077" target="_blank" rel="noopener noreferrer">
                Github.
              </a>{" "}
              Ever since embarking on my journey as a web developer and
              designer, I&apos;ve been on an exhilarating quest to transform digital
              landscapes, one line of code and one pixel at a time.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming, and teaching.
            </p>
          </motion.div>
          <div className="lg:flex gap-10">
            {[
              {
                title: "Full Stack Web Development",
                image: "../../assets/devlopment.png",
                description: "Crafting robust web solutions tailored to your requirements, covering both front-end and back-end development.",
                technologies: ["HTML, CSS, JavaScript", "React, Next Js 14, Typescript (Front-end)", "Node.js, Express (Back-end)", "MongoDB, Cloudinary"]
              },
              {
                title: "Bring Your Vision to Life",
                image: "../../assets/design.png",
                description: "Do you have a creative concept for your next stunning website? Let's turn your ideas into captivating designs.",
                technologies: ["CSS3", "Tailwind CSS", "Shadcn UI", "Material-UI, Bootstrap"]
              },
              {
                title: "Mastering Logic in Web Development",
                image: "../../assets/code.png",
                description: "Are you looking to strengthen the foundation of your web development projects? I specialize in crafting robust and efficient code structures that form the backbone of your digital solutions.",
                technologies: ["Algorithm Design", "Data Structures", "Problem Solving", "Optimizing Performance"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 hover:scale-105 text-black hover:cursor-pointer flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  className="bg-red-700 rounded-xl"
                  src={service.image}
                  alt={service.title}
                  style={{ width: "200px", height: "150px" }}
                />
                <h3 className="text-lg font-medium pt-8 pb-2">{service.title}</h3>
                <p className="py-2">{service.description}</p>
                <h4 className="py-4 text-teal-600">Technologies I Work With</h4>
                {service.technologies.map((tech, techIndex) => (
                  <p key={techIndex} className="text-gray-800 py-1">{tech}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
        <section className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Web development, to me, is not just a job, it&apos;s a passion that
              fuels my commitment to creating a better online world. I&apos;ve
              strived for excellence in every line of code, every responsive
              design, and every user interaction.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have a selection of projects that effectively represent the
              quality and scope of my work.
            </p>
          </motion.div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
           {data.map((img: any, index: any) => (
              <motion.div
                key={index}
                className="basis-1/3 flex-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href={img.redirectedTo} target="_blank">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="rounded-lg object-cover w-full h-full"
                    src={img.src}
                    alt={img.alt}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}