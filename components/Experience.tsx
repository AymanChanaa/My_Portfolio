"use client";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer – Final Year Project",
      company: "Izemx",
      period: "Feb 2025 - Aug 2025",
      type: "Final Year Project",
      location: "Remote",
      description:
        "Designed a personalized educational platform for children, integrating multiple AI assistants. Created 3 applications targeting 3 profiles: Administrator, Parent, Child. Developed backend in Spring Boot with subscription management, plans, users, permissions. Built Next.js frontend for each profile with smooth user experience. Integrated Stripe payment system for subscription management.",
      technologies: [
        "Spring Boot",
        "Next.js",
        "PostgreSQL",
        "Zustand",
        "GitLab",
        "Docker",
        "Stripe",
        "REST API",
      ],
      achievements: [
        "Functional platform enabling intelligent tracking of children's progress",
        "AI-powered personalized learning customization",
        "Complete payment integration with Stripe",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Tickex Project",
      period: "Dec 2023 - May 2024",
      type: "Collective Project",
      location: "Academic",
      description:
        "Developed an online booking solution where users can book event tickets and organizers can customize their event configurations. Designed and implemented scalable backend services to handle real-time ticket booking and event management using microservices architecture.",
      technologies: [
        "Microservices",
        "ASP.NET",
        "SQL Server",
        "Spring Boot",
        "Apache Kafka",
        "Next.js",
        "Docker",
        "CI/CD",
      ],
      achievements: [
        "Real-time ticket booking system",
        "Scalable microservices architecture",
        "Event management with custom configurations",
      ],
    },
    {
      title: "Back-End Developer",
      company: "School Management System",
      period: "Jul 2023 - Aug 2023",
      type: "Academic Project",
      location: "Academic",
      description:
        "Designed a student, teacher, and module management application. Developed RESTful APIs for enrollment management and security (authentication, roles). Implemented comprehensive CRUD operations and role-based access control.",
      technologies: [
        "Spring Boot",
        "Spring Data",
        "MySQL",
        "REST API",
        "React JS",
      ],
      achievements: [
        "Complete CRUD operations for academic management",
        "Role-based authentication system",
        "RESTful API architecture",
      ],
    },
  ];

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/skills/Aimane_Chanaa_CV.pdf";
    link.download = "Aimane_Chanaa_CV.pdf";
    link.click();
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-40 left-10 w-24 h-24 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-16 h-16 bg-pink-500 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey in software development and engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-500 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:items-center`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-200 transform hover:scale-105 transition-all duration-500 hover:-translate-y-2">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium rounded-full mb-4">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {exp.period}
                    </div>

                    {/* Job Title & Company */}
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-2">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <p className="text-lg font-semibold text-blue-600">
                        {exp.company}
                      </p>
                      <span className="text-gray-400">•</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                        {exp.type}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-xs font-medium rounded-full border border-purple-200 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <svg
                              className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">
                  Want to know more?
                </h4>
                <p className="text-sm text-gray-600">Download my complete CV</p>
              </div>
            </div>
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              onClick={() => downloadCV()}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
