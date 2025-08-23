import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { KanbanCreateModal } from "./kanban-create-modal";

type Props = {
  status: string;
  amount: number;
};

const KanbanHeaderCard = ({ status, amount }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-card-background p-3 px-4 rounded-xl mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-lg font-semibold">{status}</div>
          <div className="rounded-full w-5 flex items-center justify-center h-5 font-bold bg-purple text-xs text-white">
            {amount}
          </div>
        </div>
        <div
          onClick={() => setModalOpen(true)}
          className="bg-gray-100 dark:bg-card-background w-8 h-8 flex justify-center items-center rounded-full text-font-primary"
        >
          <TiPlus />
        </div>
      </div>
      <KanbanCreateModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default KanbanHeaderCard;
