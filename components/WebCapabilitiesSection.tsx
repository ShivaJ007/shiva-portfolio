import React from "react";

export const WebCapabilitiesSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 cursor-default select-none">
          Modern Web Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Responsive Design",
              icon: "📱",
              features: [
                "Mobile-first design",
                "Tailwind CSS",
                "Media queries",
              ],
            },
            {
              title: "React Development",
              icon: "⚛️",
              features: [
                "Hooks (useState, useEffect)",
                "Component-driven UI",
                "React Router",
              ],
            },
            {
              title: "Performance Optimization",
              icon: "🚀",
              features: ["Code splitting", "Lazy loading", "Optimized images"],
            },
            {
              title: "UI/UX Practices",
              icon: "🎨",
              features: [
                "Accessibility (a11y)",
                "Keyboard navigation",
                "Smooth animations",
              ],
            },
            {
              title: "Browser Features",
              icon: "🧠",
              features: [
                "LocalStorage",
                "Intersection Observer",
                "Clipboard API",
              ],
            },
            {
              title: "Deployment & Hosting",
              icon: "🌐",
              features: ["GitHub Pages", "Netlify", "Custom domain setup"],
            },
          ].map((category) => (
            <div
              key={category.title}
              className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md transform hover:scale-105 duration-300"
            >
              <div className="text-3xl mb-4 cursor-default select-none">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 cursor-default select-none">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-600 group-hover:text-gray-700 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
