"use client";

import Image from "next/image";

const Education = () => {
  const education = {
    degree: "Ingénieur d'État en Génie Logiciel & Systèmes d'Information",
    degreeEn: "State Engineer in Software Engineering & Information Systems",
    school: "École Nationale des Sciences Appliquées de Tanger",
    schoolEn: "National School of Applied Sciences of Tangier",
    period: "2020 - 2025",
    status: "Graduated",
    specialization: "Computer Engineering",
    gpa: "Distinction",
  };

  const certifications = [
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      provider: "DeepLearning.AI",
      status: "Completed",
      category: "Machine Learning",
      icon: "/education/DeepLearning.png",
      color: "white",
      certificatePath:
        "https://www.coursera.org/account/accomplishments/records/G1XAJJBB3RLN",
    },
    {
      title: "Advanced Learning Algorithms",
      provider: "DeepLearning.AI",
      status: "Completed",
      category: "Machine Learning",
      icon: "/education/DeepLearning.png",
      color: "white",
      certificatePath:
        "https://www.coursera.org/account/accomplishments/records/40UP4VZOKZR9",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      provider: "DeepLearning.AI",
      status: "Completed",
      category: "Machine Learning",
      icon: "/education/DeepLearning.png",
      color: "white",
      certificatePath:
        "https://www.coursera.org/account/accomplishments/records/7FQNL5XU5BYF",
    },
    {
      title: "Python for Data Science",
      provider: "IBM",
      status: "Completed",
      category: "Data Science",
      icon: "/education/IBM.png",
      color: "white",
      certificatePath: null,
    },
  ];

  const handleViewCertificate = (certificateUrl: string) => {
    if (certificateUrl == null) {
      return;
    }
    window.open(certificateUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-28 h-28 bg-indigo-500 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-20 h-20 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-16 h-16 bg-purple-500 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mb-6">
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
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Education &
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Certifications
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
              🎓
            </span>
            Formal Education
          </h4>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-indigo-200 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Main Education Info */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-indigo-200 shadow-lg">
                    <Image
                      src="/education/Ensat.png"
                      alt="ENSA Tanger Logo"
                      className="w-full h-full object-cover"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xl font-bold text-gray-900 mb-1">
                      {education.degreeEn}
                    </h5>
                    <p className="text-lg text-indigo-600 font-semibold mb-2">
                      {education.schoolEn}
                    </p>
                    <p className="text-sm text-gray-500 italic mb-3">
                      {education.degree}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
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
                        {education.period}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                        {education.status}
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                        {education.specialization}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPA/Grade Section */}
              <div className="lg:text-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-yellow-700">
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h4 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              📜
            </span>
            Professional Certifications
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-indigo-200 transform hover:scale-105 transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Certification Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Image
                      src={cert.icon}
                      alt="certification icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h5 className="font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {cert.title}
                      </h5>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex-shrink-0">
                        ✓ {cert.status}
                      </span>
                    </div>
                    <p className="text-indigo-600 font-semibold mb-1">
                      {cert.provider}
                    </p>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Certification Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium text-green-600">
                      Verified Certificate
                    </span>
                  </div>
                  <button
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium hover:underline transition-colors duration-200"
                    onClick={() => handleViewCertificate(cert.certificatePath!)}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">
                  Continuous Learning
                </h4>
                <p className="text-gray-600">
                  Always expanding my knowledge and skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
