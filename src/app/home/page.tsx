'use client' // this is a client component
// No need for 'use client' in modern React apps
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineCode, AiOutlineMail } from 'react-icons/ai';

interface Button {
  label: string;
  route: string;
}

const ButtonAbout: Button[] = [{ label: 'Read more', route: '/about' }];
const ButtonProjects: Button[] = [{ label: 'Read more', route: '/projects' }];
const ButtonContact: Button[] = [{ label: 'Read more', route: '/contact' }];

const HomePage = () => {
  return (
    <section id="home" className="mt-8 md:mt-16">
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          <AnimatedText text="👋🏽Welcome" className="text-left mr-2 mb-2 mt-16 font-bold" />
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-8">
        {/* About */}
        <div className="bg-neutral-100 dark:bg-slate-700 rounded-md  shadow-md p-5">
          <div className="flex flex-col items-center justify-center">
            <Image src="/diego.jpg" alt="Profile picture" width={128} height={128} className="w-32 h-32 rounded-full mx-auto" />
            <h2 className="font-semibold text-2xl mt-3">Hello, I'm Diego!</h2>
            <p className="text-cyan-400">Frontend Developer</p>
            <div className="mt-5">
              <h3 className="font-semibold text-center text-2xl">Bio</h3>
              <p className= 'text-center'>
                <strong>Indie frontend developer based in Colombia!</strong> Passionate about technology, geopolitics, general culture, and science.
              </p>
            </div>
            <div className="mt-6">
              {ButtonAbout.map((button, index) => (
                <Link key={index} href={button.route}>
                  <button
                    type="button"
                    className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                  >
                    {index === 0 && <AiOutlineUser className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
                    {button.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-neutral-100 dark:bg-slate-700 rounded-md  shadow-md p-5">
          <div className="flex flex-col items-center justify-center">
            <Image src="/projects.svg" alt="Projects image" width={128} height={128} className="w-32 h-32 rounded-full mx-auto" />
            <h2 className="font-semibold text-2xl mt-3">Projects</h2>
            <div className="mt-5">
              <p className= 'text-center'>You can find samples of my projects. I hope you enjoy exploring my work as much as I enjoy creating it!</p>
            </div>
            <div className="mt-6">
              {ButtonProjects.map((button, index) => (
                <Link key={index} href={button.route}>
                  <button
                    type="button"
                    className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                  >
                    {index === 0 && <AiOutlineCode className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
                    {button.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-neutral-100 dark:bg-slate-700 rounded-md  shadow-md p-5">
          <div className="flex flex-col items-center justify-center">
            <Image src="/email.svg" alt="Email image" width={128} height={128} className="w-32 h-32 rounded-full mx-auto" />
            <h2 className="font-semibold text-2xl mt-3">Contact me</h2>
            <div className="mt-5">
              <p className= 'text-center'>Feel free to contact me to share the details of your project and explore how we can work together to achieve great results!</p>
            </div>
            <div className="mt-6">
              {ButtonContact.map((button, index) => (
                <Link key={index} href={button.route}>
                  <button
                    type="button"
                    className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
                  >
                    {index === 0 && <AiOutlineMail className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
                    {button.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
