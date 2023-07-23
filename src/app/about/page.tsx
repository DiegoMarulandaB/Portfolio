//!2023
'use client'
import React from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText/AnimatedText';

const About = () => {
  return (
    <section id="about" className="my-20 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-2 mt-4 font-bold">
        <AnimatedText text="About" className="sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl mt-2" />
      </h1>

      <div className="flex flex-col md:flex-row md:p-4 md:text-left mt-2 space-y-10 md:space-x-10 md:space-y-0 items-stretch justify-center align-top">
        <div className="md:w-3/6">
          <h1 className="text-4xl lg:text-6xl xl:text-6xl text-left mb-6 mx-2 mt-2">
            About Diego 😎|📘|🎸|🏋️‍♀️|🎮
          </h1>
          <p className="mx-2">
            Hello! Welcome. Allow me to introduce myself: I am Diego, an indie frontend developer based in Colombia!
            Passionate about technology, geopolitics, general culture, and science. My goal is to enhance my knowledge
            every day and have topics of conversation with other people.
          </p>
          <br />
          <p className="mx-2">
            From a very young age, I was captivated by the world of technology. I love exploring the latest trends and
            finding out how they can impact our lives and society in general. I am always willing to learn about new
            technologies, and I enjoy programming and software development as a way of bringing my ideas to life. For
            more information on my studies regarding programming, I invite you to visit my LinkedIn profile.
          </p>
          <br />
          <p className="mx-2">
            As for my hobbies, music, video games, and sports occupy a special place in my life. Music is a constant
            source of inspiration, especially rock and its subgenres. I also enjoy video games, not only for their
            entertainment but also for their ability to tell stories and stimulate my creativity. Regarding sports, you
            must be in good physical condition to spend several hours in front of a computer.
          </p>
          <br />
          <p className="mx-2">
            I like to read,{' '}
            <span className="font-bold">
              I believe that in the world of technology, it is essential to expand knowledge through books
            </span>
            , since it is a sector with different branches of learning, and my favorite genre is currently fantasy. My
            favorite writer is Brandon Sanderson.
            <br />
            <br /> On this portfolio website, you can find samples of my projects. I hope you enjoy exploring my work as
            much as I enjoy creating it!
          </p>
        </div>

        <div className="md:w-1/4 md:text-center">
          <h1 className="text-center text-2xl lg:text-4xl xl:text-6xl mt-4 font-bold">My Skills</h1>
          <div className="flex flex-wrap flex-row justify-center md:justify-start">
            <div className="md:w-3/3">
              <h2 className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-4 font-light mb-1 py-2">Languages</h2>
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt="Css Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more language icons here */}
                  <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="Html Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* javascript */}
                   <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                    alt="JavaScript Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* react */}
                     <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="React Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/3 md:mt-8">
              <h2 className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-2  font-light mb-1 py-2">Tools</h2>
              <div className="grid grid-cols-5 md:grid-cols-4 gap-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
                    alt="Git Bash Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more tools icons here */}
                {/* git */}
                 <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="Git Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* github */}
                 <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                    alt="Github Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* linux */}
                  <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"
                    alt="Linux Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* neovim */}
                  <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/neovimio/neovimio-icon.svg"
                    alt="Neovim Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* postman */}
                      <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="Postman Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* vscode */}
                       <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg"
                    alt="Vscode Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-3/2 md:mt-8">
              <h2 className="text-center sm:text-1xl md:text-1xl lg:text-1xl xl:text-4xl mt-2 font-light mb-1 py-2">Learning</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Images and Alt texts are left as-is */}
                <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="Tailwind Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
                {/* Add more learning icons here */}
                {/* typescript */}
                   <div>
                  <Image
                    src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
                    alt="Typescript Icon"
                    width={50}
                    height={50}
                    className="h-auto max-w-full px-1 py-2 mb-1 bg-slate-300 rounded-md text-lg xl:text-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
