"use client";

import React, { JSX } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaClock } from "react-icons/fa";

type Props = {
  title: string;
  due_date: string;
};

const KanbanItemCard = ({ title, due_date }: Props) => {
  return (
    <article className="w-full bg-card-background p-4 rounded-lg shadow-sm hover:shadow-md cursor-grab transition-shadow duration-200">
      <header className="flex items-center justify-between">
        <h3 className="text-font-primary font-semibold text-base">
          {title}
        </h3>
        <button
          aria-label="More options"
          className="text-font-light hover:text-font-primary transition-colors"
        >
          <TfiMoreAlt className="text-font-light cursor-pointer" />
        </button>
      </header>

      <section className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CgMenuLeftAlt className="text-2xl text-font-light -ml-1 cursor-pointer" />
          <time
            dateTime="2025-01-19"
            className="flex items-center gap-1 bg-yellow-light text-yellow font-semibold text-xs py-1.5 px-2 rounded-md select-none"
          >
            <FaClock />
            {due_date}
          </time>
        </div>
        <div className="w-8 h-8 bg-gray-100 -mr-1 dark:bg-inner-card rounded-full" />
      </section>
    </article>
  );
};

export default KanbanItemCard;
