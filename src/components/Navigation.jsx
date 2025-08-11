import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "iOS", icon: "📱" },
    { path: "/adobe", label: "Adobe", icon: "🎨" },
    { path: "/netflix", label: "Netflix", icon: "🎬" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Sonali's Resume
            </Link>
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Choose your theme
          </div>
        </div>
      </div>
    </nav>
  );
}
