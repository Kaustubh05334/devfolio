import React from "react";

const Projects = () => {
    const items = [
        {   
            id: 1,
            image: "va.avif",
            link: "https://github.com/Kaustubh05334/voice-assistant",
            title: "Voice Assistant",
            category: "Python" 
        },
        {
            id:2,
            image: "ecomm.jpg",
            link: "https://github.com/Kaustubh05334/django-ecommerce-website",
            title: "Ecommerce Website",
            category : "Django Tailwind"
        },
      ];
    return (
        <div className='pt-8 mb-20' id='project'>
          <p className=' text-white mx-auto text-center font-bold text-2xl py-8'>Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-around p-4 mx-5">
            {items.map((item) => (
                <a key={item.id} aria-label="Project" href={item.link} className="h-full">
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-gray-800 h-full ">
                    <div>
                    <img src={item.image} className="rounded-t-xl border-none w-full h-80 object-cover" alt="Project" />
                    </div>
                    <div className="text-center px-4 pt-6">
                    <p className="font-general-medium text-lg md:text-xl text-white mb-2">{item.title}</p>
                    <span className="text-lg text-white">{item.category}</span>
                    </div>
                </div>
                </a>
            ))}
            </div>
        </div>
    )
}

export default Projects;
