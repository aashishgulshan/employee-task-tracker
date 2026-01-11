import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold text-indigo-600">Employee Task Tracker</div>
        <nav className="space-x-4 text-sm text-gray-600">
          <a href="/" className="hover:text-indigo-600">Home</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
