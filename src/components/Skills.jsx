import React from 'react';
const Skills = () =>{
    const items = [
        { id: 1, imageSrc: 'logos/django.svg', text: 'Django' },
        { id: 2, imageSrc: 'logos/python.svg', text: 'Python' },
        { id: 3, imageSrc: 'logos/reactjs.svg', text: 'ReactJS' },
        { id: 4, imageSrc: 'logos/tailwind-css.svg', text: 'Tailwind' },
        { id: 5, imageSrc: 'logos/postgresql.svg', text: 'PostgreSQL' },
        { id: 6, imageSrc: 'logos/js.svg', text: 'JavaScript' },
        { id: 7, imageSrc: 'logos/html.svg', text: 'HTML' },
        { id: 8, imageSrc: 'logos/css.svg', text: 'CSS' },
      ];
     
      return (
        <div className='z-40 sm:pt-8' id='skills'>
          <p className=' text-white mx-auto text-center text-3xl font-bold py-8'>Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center px-4">
            {items.map((item) => (
              <div key={item.id} className="md:w-80 bg-gray-800 p-4 flex flex-col items-center justify-center rounded-2xl">
                <img className="w-32 h-32 object-cover" src={item.imageSrc} alt="Item" />
                <p className="mt-2 text-center text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Skills;