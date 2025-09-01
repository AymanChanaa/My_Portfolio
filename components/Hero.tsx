"use client";

import Image from "next/image";

const Hero = () => {
  const techs = ["NextJs", "TypeScript", "Node.js", "Java", "PostgreSQL"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/skills/Aimane_Chanaa_CV.pdf";
    link.download = "Aimane_Chanaa_CV.pdf";
    link.click();
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/aimane-chanaa-584596242/",
      "_blank"
    );
  };

  const openGitHub = () => {
    window.open("https://github.com/AymanChanaa", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-16 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Software
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Engineer
                </span>
              </h1>

              <div className="relative">
                <p className="text-xl sm:text-2xl text-gray-600 font-medium leading-relaxed">
                  Full Stack Developer |
                  <span className="text-blue-600 font-semibold"> Next.js</span>{" "}
                  &
                  <span className="text-green-600 font-semibold">
                    {" "}
                    Spring Boot
                  </span>
                </p>
                <div className="absolute -bottom-2 left-0 lg:left-0 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about creating elegant solutions and building
                scalable applications that make a difference. Always eager to
                learn and tackle new challenges.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
              {techs.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={openLinkedIn}
                className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-blue-600 hover:border-blue-600 group transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>

              <button
                onClick={openGitHub}
                className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-gray-800 hover:border-gray-800 group transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>
              <button
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                onClick={() => downloadCV()}
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              {/* Animated Background Circles */}
              <div className="absolute -inset-4">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-spin opacity-20"
                  style={{ animationDuration: "8s" }}
                ></div>
              </div>
              <div className="absolute -inset-2">
                <div
                  className="w-68 h-68 sm:w-76 sm:h-76 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-spin opacity-30"
                  style={{
                    animationDuration: "6s",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>

              {/* Profile Picture Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                  <Image
                    src="/Aimane.jpg"
                    alt="Aimane Chanaa"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full animate-bounce opacity-80 shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full animate-pulse opacity-70 shadow-lg"></div>
                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-pink-400 rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-2 h-2 bg-pink-500 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-3 h-3 bg-indigo-500 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
