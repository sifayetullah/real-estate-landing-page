"use client";

import type React from "react";
import { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded={openIds.includes(item.id)}
            aria-controls={`accordion-${item.id}`}
          >
            <span>{item.title}</span>
            <span
              className={`transform transition-transform duration-200 ${openIds.includes(item.id) ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
          {openIds.includes(item.id) && (
            <div
              id={`accordion-${item.id}`}
              className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
