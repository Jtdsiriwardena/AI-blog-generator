import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
  
      <h1 className="text-4xl font-bold tracking-tight text-center">
          <span className="text-4xl font-bold  text-gray-100 mb-8" >About &nbsp;</span> 
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent font-extrabold">Idea</span>
          <span className="text-white">Loom</span>
        </h1>
      <p className="text-center text-gray-200 max-w-2xl mx-auto mb-10 mt-4">
        IdeaLoom is a platform that weaves together creativity, collaboration, and innovation to bring ideas to life. 
        Whether you are brainstorming, refining concepts, or turning visions into reality, we make the process seamless.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 - Innovation */}
        <div className="bg-black shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <div className="text-blue-600 text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-white mb-2">Innovate with Ease</h3>
          <p className="text-gray-100">
            Transform raw ideas into structured plans with our intuitive tools designed for creative thinkers.
          </p>
        </div>

        {/* Card 2 - Collaboration */}
        <div className="bg-black shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <div className="text-green-600 text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-white mb-2">Seamless Collaboration</h3>
          <p className="text-gray-100">
            Work together in real time, share insights, and refine your ideas with a team-driven approach.
          </p>
        </div>

        {/* Card 3 - Execution */}
        <div className="bg-black shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
          <div className="text-purple-600 text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold text-white mb-2">From Idea to Action</h3>
          <p className="text-gray-100">
            Take your ideas beyond brainstorming and turn them into actionable strategies with our workflow tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
