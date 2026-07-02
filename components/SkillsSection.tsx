import React from "react";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-20 px-4 bg-gray-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center text-gray-900 cursor-default select-none">
          Technical Expertise
        </h2>
        {/* Intro paragraph */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          As a front-end developer, I build fast, responsive, and engaging web
          interfaces using modern tools and best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              category: "Core Frontend",
              skills: [
                { name: "HTML5 & Semantic Tags", level: 95 },
                { name: "Modern CSS", level: 90 },
                { name: "JavaScript", level: 95 },
                { name: "Responsive Design", level: 85 },
              ],
              icon: "🎨",
              color: "from-blue-400 to-blue-600",
            },
            {
              category: "Frameworks & Libraries",
              skills: [
                { name: "React.js", level: 90 },
                { name: "Next.js", level: 95 },
                { name: "TypeScript", level: 85 },
              ],
              icon: "⚡",
              color: "from-green-400 to-green-600",
            },
            {
              category: "UI/UX & Design Tools",
              skills: [
                { name: "Figma / Adobe XD", level: 90 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Framer Motion", level: 85 },
                { name: "Component Libraries (MUI, ShadCN)", level: 90 },
              ],
              icon: "🚀",
              color: "from-teal-400 to-cyan-600", // add new line
            },
            {
              category: "Performance & Tools",
              skills: [
                { name: "Lighthouse / Web Vitals", level: 90 },
                { name: "Git & GitHub", level: 95 },
                { name: "Vite / Webpack", level: 85 },
                { name: "Testing (Jest / RTL)", level: 80 },
              ],
              icon: "🛠️",
              color: "from-teal-400 to-cyan-600",
            },
          ].map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg p-6 transform hover:scale-[1.02] transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl cursor-default select-none">
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-900 cursor-default select-none">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
