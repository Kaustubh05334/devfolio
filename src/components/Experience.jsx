import React from "react";

const Experience = () => {
    const items = [
        {   
            id: 1,
            company: "Snoffle India",
            period: "11th-May-23 to 11th-July-23",
            role: "Full-Stack Intern",
            desc: 'I created and designed models while implementing core functionalities and contributing to the development of robust web applications.' 
        },
      ];
    return (
        <div className='pt-8' id='experience'>
          <p className=' text-white mx-auto text-center font-bold text-2xl py-8'>Experience</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-around p-4 mx-5">
            {items.map((item) => (
              <div key={item.id} className=" bg-gray-800 p-8 flex flex-col justify-center rounded-2xl mb-10 text-white">
                <p className="text-4xl">{item.company}</p>
                <p className="text-lg my-3">{item.period}</p>
                <p className="text-2xl mb-2">{item.role}</p>
                <p className="text-lg text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
    )
}
export default Experience