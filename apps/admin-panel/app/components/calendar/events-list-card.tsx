import React from 'react';
import { FaClock, FaBell } from 'react-icons/fa';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  type: 'meeting' | 'appointment' | 'reminder' | 'deadline' | 'event';
  location?: string;
  attendees?: string[];
  color: string;
}

interface EventsListCardProps {
  title: string;
  icon: React.ReactNode;
  events: Event[];
  onEventClick: (event: Event) => void;
  showTime?: boolean;
}

const EventsListCard: React.FC<EventsListCardProps> = ({
  title,
  icon,
  events,
  onEventClick,
  showTime = false,
}) => {
  return (
    <div className="bg-card-background border-inner-card-border rounded-2xl border p-4">
      <h3 className="text-font-primary mb-4 flex items-center gap-2 font-semibold">
        {icon}
        {title}
      </h3>
      <div className="space-y-3">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              onClick={() => onEventClick(event)}
              className="hover:bg-inner-card cursor-pointer rounded-lg p-2 transition-colors"
            >
              <div className="flex items-start gap-2">
                <div
                  className={`mt-2 h-2 w-2 rounded-full ${event.color}`}
                ></div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-font-primary truncate text-sm font-medium">
                    {event.title}
                  </h4>
                  <p className="text-font-light text-xs">
                    {event.date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                    {showTime && ` • ${event.startTime} - ${event.endTime}`}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-4 text-center">
            <p className="text-font-light text-sm">No events found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsListCard;
