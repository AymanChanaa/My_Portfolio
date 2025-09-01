import Image from "next/image";

const Skills = () => {
  const skillsData = [
    {
      name: "Java",
      level: 87,
      color: "from-red-500 to-orange-600",
      icon: "/skills/java.png",
    },
    {
      name: "Next.js",
      level: 93,
      color: "from-gray-800 to-black",
      icon: "/skills/nextjs.png",
    },
    {
      name: "JavaScript",
      level: 95,
      color: "from-yellow-300 to-orange-400",
      icon: "/skills/javascript.png",
    },
    {
      name: "React",
      level: 92,
      color: "from-blue-400 to-blue-600",
      icon: "/skills/React.png",
    },
    {
      name: "Node.js",
      level: 88,
      color: "from-green-400 to-green-600",
      icon: "/skills/NodeJs.png",
    },
    {
      name: "SQL",
      level: 85,
      color: "from-indigo-400 to-indigo-600",
      icon: "/skills/SQL.png",
    },
    {
      name: "Git",
      level: 90,
      color: "from-gray-600 to-gray-800",
      icon: "/skills/Git.png",
    },
    {
      name: "Docker",
      level: 80,
      color: "from-blue-500 to-cyan-500",
      icon: "/skills/Docker.png",
    },
    {
      name: "C/C++",
      level: 78,
      color: "from-blue-600 to-purple-600",
      icon: "/skills/C.png",
    },
    {
      name: "ASP.NET",
      level: 82,
      color: "from-purple-500 to-indigo-600",
      icon: "/skills/CSharp.png",
    },
    {
      name: "Python",
      level: 90,
      color: "from-yellow-400 to-yellow-600",
      icon: "/skills/Python.png",
    },
    {
      name: "TensorFlow",
      level: 75,
      color: "from-orange-400 to-red-500",
      icon: "/skills/TensorFlow.png",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-24 h-24 bg-indigo-500 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Skills
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transform hover:scale-105 transition-all duration-300 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Skill Icon & Name */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-blue-700 font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
