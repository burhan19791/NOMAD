import React from 'react';
import { FaChartBar } from 'react-icons/fa';

interface StatsCardProps {
  events: any[];
}

const StatsCard: React.FC<StatsCardProps> = ({ events }) => {
  return (
    <div className="bg-card-background border-inner-card-border rounded-2xl border p-4">
      <h3 className="text-font-primary mb-4 flex items-center gap-2 font-semibold">
        <FaChartBar className="text-purple" />
        This Month
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-font-light text-sm">Total Events</span>
          <span className="text-font-primary font-semibold">
            {events.length}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-font-light text-sm">Meetings</span>
          <span className="font-semibold text-blue-500">
            {events.filter((e) => e.type === 'meeting').length}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-font-light text-sm">Appointments</span>
          <span className="font-semibold text-green-500">
            {events.filter((e) => e.type === 'appointment').length}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-font-light text-sm">Deadlines</span>
          <span className="font-semibold text-red-500">
            {events.filter((e) => e.type === 'deadline').length}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-font-light text-sm">Reminders</span>
          <span className="font-semibold text-yellow-500">
            {events.filter((e) => e.type === 'reminder').length}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-font-light text-sm">Events</span>
          <span className="font-semibold text-purple-500">
            {events.filter((e) => e.type === 'event').length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
