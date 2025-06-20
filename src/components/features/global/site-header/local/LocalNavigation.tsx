import React from "react";
import type { NavItem } from "@/types/navigation";

interface LocalNavigationProps {
  items: NavItem[];
}

const LocalNavigation: React.FC<LocalNavigationProps> = ({ items }) => (
  <nav className="w-full bg-gray-50 border-b border-gray-100 z-30">
    <ul className="flex gap-2 px-4 md:px-8 py-2 overflow-x-auto whitespace-nowrap">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.link || "/"}
            className="text-sm font-medium px-3 py-2 rounded transition-colors duration-200 text-gray-600 hover:text-blue-900 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default LocalNavigation;
