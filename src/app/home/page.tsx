'use client' // this is a client component
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Link from 'next/link';
import { AiOutlineUser, AiOutlineCode, AiOutlineMail } from 'react-icons/ai';

// Define the Button interface and buttons
interface Button {
  label: string;
  route: string;
}


const ButtonAbout: Button[] = [{ label: 'Read more', route: '/about' }]
const ButtonProjects: Button[] = [{ label: 'Read more', route: '/projects' }]
const ButtonContact: Button[] = [{ label: 'Read more', route: '/contact' }]

const HomePage = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center mt-32">
        <h1 className="text-2xl text-center font-bold">
          <AnimatedText text="👋🏽Welcome" className="text-left mr-2 mb-2 mt-2 font-bold" />
        </h1>
      </div>

      <div className="flex flex-col text-center items-center justify-center md:space-x-3 md:text-left mt-4">
        <div className="md:w-3/3">
        
      

    <div className="">
      <div className=" max-w-lg mx-auto my-10 bg-white dark:bg-slate-800 rounded-md border-2 border-slate-50 shadow-md p-5 w-full ">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="/diego.jpg"
          alt="Profile picture"
        />
        <h2 className="font-ligth dark:bg-text-white-900 text-center text-2xl font-semibold mt-3">Hello, I'm Diego!</h2>
       
        <p className="text-sky-500 text-center  mt-1">Frontend Developer</p>
      
        <div className="mt-5">
          <h3 className=" font-ligth dark:bg-text-white-900 text-center text-2xl font-semibold mt-3">Bio</h3>
          <p className="font-ligth text-center mt-2">
           <strong> Indie frontend developer based in Colombia!</strong> Passionate about technology, geopolitics, general culture, and science.
            
          </p>
              <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-6">
        {ButtonAbout.map((button, index) => (
          <Link key={index} href={button.route}>
            <button
              type="button"
              className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center 
              hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
            >
              {index === 0 && <AiOutlineUser className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
             
             
              {button.label}
            </button>
          </Link>
        ))}
      </div>
        </div>
      </div>
    </div>
        </div>


        {/* projects */}

        
    <div className=" ">
      <div className=" max-w-lg mx-auto my-10 bg-white dark:bg-slate-800 rounded-md border-2 border-slate-50 shadow-md p-5 w-full flex flex-col text-center items-center justify-center ">
      
             <Image
            src="/projects.svg"
            alt="projects image"
            width={160}
            height={160}
            className="w-34 h-34 rounded-full mx-auto "
          />
        <h2 className="font-ligth dark:bg-text-white-900 text-center text-2xl font-semibold mt-3">Projects</h2>
    
        <div className="mt-5">
          {/* <h3 className=" text-center  text-xl font-ligth">Bio</h3> */}
          <p className="font-ligth text-center mt-2">
          You can find samples of my projects. I hope you enjoy exploring my work as much as I enjoy creating it!
            
          </p>
              <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-6">
        {ButtonProjects.map((button, index) => (
          <Link key={index} href={button.route}>
            <button
              type="button"
              className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center 
              hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
            >
               {index === 0 && < AiOutlineCode className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
          
             
             
              {button.label}
            </button>
          </Link>
        ))}
      </div>
        </div>
      </div>
    </div>

    {/* Contact */}

       <div className=" ">
      <div className=" max-w-lg mx-auto my-10 bg-white dark:bg-slate-800 rounded-md border-2 border-slate-50 shadow-md p-5 w-full flex flex-col text-center items-center justify-center ">
      
             <Image
            src="/email.svg"
            alt="projects image"
            width={160}
            height={160}
            className="w-34 h-34 rounded-full mx-auto "
          />
        <h2 className="font-ligth dark:bg-text-white-900 text-center text-2xl font-semibold mt-3">Contact me</h2>
     
        <div className="mt-5">
          {/* <h3 className=" text-center  text-xl font-ligth">Bio</h3> */}
          <p className="font-ligth text-center mt-2">
          Feel free to contact me to share the details of your project and explore how we can work together to achieve great results!
            
          </p>
              <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-6">
        {ButtonContact.map((button, index) => (
          <Link key={index} href={button.route}>
            <button
              type="button"
              className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 text-center inline-flex items-center 
              hover:-translate-y-1 transition-transform cursor-pointer text-white bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-md px-3 py-3 mb-4 md:mb-0 w-full md:w-40"
            >
               {index === 0 && < AiOutlineMail className="icon text-white text-center items-center justify-center mb-1 mr-2" size={32} />}
          
             
             
              {button.label}
            </button>
          </Link>
        ))}
      </div>
        </div>
      </div>
    </div>
      </div>
       <div>
        <div>
       
        </div>
      
      </div>

   
    </section>
  );
};

export default HomePage;