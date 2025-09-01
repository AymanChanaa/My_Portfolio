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
