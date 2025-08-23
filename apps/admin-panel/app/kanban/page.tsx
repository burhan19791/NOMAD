"use client";

import React from "react";
import KanbanHeaderCard from "../components/kanban/kanban-header-card";
import KanbanItemCard from "../components/kanban/kanban-item-card";

const Kanban = () => {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6 overflow-x-auto">
      <div className="flex items-start gap-6 min-w-max">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <KanbanHeaderCard status="Unassigned" amount={2} />
          <KanbanItemCard
            title="Finish Admin Panel Template"
            due_date="17 Jan"
          />
          <KanbanItemCard title="Do Something" due_date="4 Dec" />
        </div>

        <div className="flex flex-col gap-4 min-w-[280px]">
          <KanbanHeaderCard status="Todo" amount={3} />
          <KanbanItemCard title="Work on API" due_date="20 Jan" />
          <KanbanItemCard title="Fix Bugs" due_date="22 Jan" />
          <KanbanItemCard title="Write Docs" due_date="25 Jan" />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <KanbanHeaderCard status="In Progress" amount={3} />
          <KanbanItemCard title="Work on API" due_date="20 Jan" />
          <KanbanItemCard title="Fix Bugs" due_date="22 Jan" />
          <KanbanItemCard title="Write Docs" due_date="25 Jan" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <KanbanHeaderCard status="Review" amount={1} />
          <KanbanItemCard title="Code Review" due_date="21 Jan" />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 min-w-[280px]">
          <KanbanHeaderCard status="Done" amount={1} />
          <KanbanItemCard title="Release v1.0" due_date="15 Jan" />
        </div>
      </div>
    </div>
  );
};

export default Kanban;
