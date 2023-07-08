import React,{useEffect,useState} from "react";
import Typewriter from "typewriter-effect";
const Home = () => {
    const jobTitles = [
        "A Backend Developer",
        "A Python Developer",
        "A Full-Stack Developer",      
      ];
    return (
        <div className="flex flex-col -mt-20 sm:flex-row h-screen w-screen">
            <div className="w-full sm:w-1/2 flex flex-col items-center justify-center pt-16 min-h-[45%] sm:min-h-full">
                <span className=" text-white hover:text-gray-300 ">
                <p className="text-3xl sm:text-5xl justify-center content-center">Hi! I'm </p>
                <p className="text-3xl sm:text-5xl justify-center content-center"> Kaustubh Bhargava</p>
                </span>
                <p className=" text-white hover:text-gray-300 text-2xl sm:text-4xl justify-center content-center">
                    <Typewriter
                    
                    onInit={(typewriter) => {
                        typewriter
                            .typeString(jobTitles[0])
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(jobTitles[1])
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(jobTitles[2])
                            .start();
                    }}
                    />
                </p>
            </div>
            <div className="w-full sm:w-1/2 flex items-center justify-center sm:pt-16">
                <img src="/coder.svg" alt="Image" className="w-full h-full"/>
            </div>
        </div>
    );
  };
  
export default Home;