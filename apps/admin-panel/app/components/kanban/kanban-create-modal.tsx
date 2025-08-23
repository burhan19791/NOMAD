"use client";

import React, { useEffect } from "react";
import { Label, Textarea, TextInput } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import CustomTextSelect from "../custom-text-select";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function KanbanCreateModal({ open, onClose }: Props) {
  // lock scroll while modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="kanban-create-title"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* modal panel */}
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl shadow-lg">
        {/* main container with your theme bg */}
        <div className="bg-card-background rounded-2xl overflow-hidden">
          {/* header */}
          <div className="flex items-center justify-between p-5 border-b border-tw-muted">
            <h3
              id="kanban-create-title"
              className="text-lg font-semibold text-tw-primary"
            >
              Create Task
            </h3>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-md hover:bg-gray-100/40 dark:hover:bg-inner-card/40"
            >
              <IoClose className="text-xl text-font-primary" />
            </button>
          </div>

          {/* body */}
          <div className="p-6">
            <div className="flex flex-col gap-4">
              {/* Status Select */}
              <div>
                <CustomTextSelect
                  title="Todo"
                  options={[
                    "Unassigned",
                    "Todo",
                    "In Progress",
                    "Review",
                    "Done",
                  ]}
                  // if your CustomTextSelect accepts className, you can forward theme there.
                />
              </div>

              <div className="w-full h-px bg-tw-muted" />

              {/* Title */}
              <div>
                <Label className="font-semibold text-tw-primary mb-2">
                  Title
                </Label>
                <TextInput
                  id="Title"
                  placeholder="Task Title"
                  required
                  type="text"
                  className="bg-gray-200 dark:bg-inner-card border-none rounded-md focus:ring-2 focus:ring-tw-primary"
                />
              </div>

              {/* Description */}
              <div>
                <Label className="font-semibold text-tw-primary mb-2">
                  Description
                </Label>
                <Textarea
                  id="Description"
                  placeholder="Task Description"
                  required
                  rows={7}
                  className="bg-gray-200 dark:bg-inner-card border-none rounded-md focus:ring-2 focus:ring-tw-primary"
                />
              </div>

              <div className="w-full h-px bg-tw-muted mt-2" />

              {/* Due Date (native input to avoid datepicker issues) */}
              <div>
                <Label className="font-semibold text-tw-primary mb-2">
                  Due Date
                </Label>
                <input
                  type="date"
                  className="w-full rounded-md py-2 px-3 bg-gray-200 dark:bg-inner-card border-none focus:ring-2 focus:ring-tw-primary"
                />
              </div>
            </div>
          </div>

          {/* footer (optional) */}
          <div className="flex items-center justify-end gap-3 p-4 border-t border-tw-muted">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-100 dark:bg-inner-card text-font-primary"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-md bg-purple-600 text-white">
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
