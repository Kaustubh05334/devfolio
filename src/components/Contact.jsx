import React from "react";


const Contact = () => {
    const recipient = 'kaustubhbhargava5@gmail.com';
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}`;
    return (
        <div id="contact">  
            <p className=' text-white mx-auto text-center font-bold text-2xl py-8'>Contact me</p>
            <div className="flex flex-row gap-5 justify-center mb-10 sm:mb-15">
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 h-15 w-15 bg-gray-800 p-1 rounded-xl">
                    <a href={gmailLink} target="_blank" rel="noopener noreferrer"><img src="contact/gmail.svg" alt="Gmail"></img></a>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 h-15 w-15 bg-gray-800 p-1 rounded-xl">
                    <a href="https://github.com/Kaustubh05334" target="_blank" rel="noopener noreferrer"><img src="contact/github.svg" alt="Github"></img></a>
                </div>
                <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 h-15 w-15 bg-gray-800 p-1 rounded-xl">
                    <a href="https://www.linkedin.com/in/kaustubh-bhargava-021634202/" target="_blank" rel="noopener noreferrer"><img src="contact/linkedin.svg" alt="Linkedin"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;