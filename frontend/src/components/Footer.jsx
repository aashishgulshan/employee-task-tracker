import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Employee Task Tracker
      </div>
    </footer>
  );
};

export default Footer;
