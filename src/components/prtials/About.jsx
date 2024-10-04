import React from "react";

const About = () => {
  document.title = "MovieDB | About";

  return (
    <div className="bg-[#1A202C] min-h-screen px-8 py-12">
      <h1 className="text-5xl font-bold text-center text-white mb-8">About MovieDB</h1>
      
      <p className="text-lg text-gray-300 text-center mb-10">
        Welcome to MovieDB! This project was built to provide a sleek and responsive platform to browse and search for movies. 
        Created with the latest web development tools, it highlights a strong understanding of modern front-end technologies.
      </p>
      
      <div className="bg-[#2D3748] p-6 rounded-lg mb-10 shadow-lg hover:shadow-2xl duration-300">
        <h2 className="text-3xl text-yellow-400 font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-300">
          MovieDB is a movie browsing and search platform developed using React, Vite, Redux for state management, and Tailwind CSS for styling. It integrates a movie database API to fetch real-time data on movies, including search functionality and detailed movie pages.
        </p>
      </div>

      <div className="bg-[#2D3748] p-6 rounded-lg mb-10 shadow-lg hover:shadow-2xl duration-300">
        <h2 className="text-3xl text-yellow-400 font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Responsive design optimized for all devices</li>
          <li>Real-time search functionality using an external movie API</li>
          <li>Detailed movie information including cast, synopsis, and more</li>
          <li>State management handled by Redux Toolkit</li>
          <li>Styled with Tailwind CSS for a modern look and feel</li>
        </ul>
      </div>

      <div className="bg-[#2D3748] p-6 rounded-lg mb-10 shadow-lg hover:shadow-2xl duration-300">
        <h2 className="text-3xl text-yellow-400 font-semibold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>React JS for building UI components</li>
          <li>Vite for fast development builds</li>
          <li>Redux Toolkit for managing global state</li>
          <li>Axios for handling API requests</li>
          <li>Tailwind CSS for utility-first styling</li>
        </ul>
      </div>

      <div className="bg-[#2D3748] p-6 rounded-lg mb-10 shadow-lg hover:shadow-2xl duration-300">
        <h2 className="text-3xl text-yellow-400 font-semibold mb-4">About the Developer</h2>
        <p className="text-gray-300">
          Hi, I'm Swyam Pandey, a passionate Web Developer focused on creating clean, responsive, and user-friendly web applications. I built MovieDB as a personal project to enhance my skills in modern web development, particularly with React and state management using Redux.
        </p>
      </div>

      <div className="text-center">
        <a href="https://github.com/SwyamPandey" className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full inline-block mx-2">
          <i className="ri-github-fill mr-2"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/swyam-pandey-b968a125a/" className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full inline-block mx-2">
          <i className="ri-linkedin-fill mr-2"></i> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default About;
