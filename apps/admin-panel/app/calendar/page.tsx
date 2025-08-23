'use client';

import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Badge,
  Modal,
  TextInput,
  Textarea,
  Select,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'flowbite-react';
import {
  FaCalendarAlt,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaEdit,
  FaTrash,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaBell,
  FaChartBar,
  FaCog,
  FaSearch,
} from 'react-icons/fa';
import SearchCard from '@/app/components/calendar/search-card';
import StatsCard from '@/app/components/calendar/stats-card';
import EventsListCard from '@/app/components/calendar/events-list-card';

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

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock events data with more upcoming events
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Team Meeting',
      description:
        'Weekly team sync to discuss project progress and upcoming tasks',
      date: new Date(2024, 11, 15),
      startTime: '10:00',
      endTime: '11:00',
      type: 'meeting',
      location: 'Conference Room A',
      attendees: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      color: 'bg-blue-500',
    },
    {
      id: '2',
      title: 'Client Presentation',
      description: 'Present quarterly results to key client stakeholders',
      date: new Date(2024, 11, 18),
      startTime: '14:00',
      endTime: '15:30',
      type: 'appointment',
      location: 'Virtual Meeting',
      attendees: ['Client Team', 'Sales Team'],
      color: 'bg-green-500',
    },
    {
      id: '3',
      title: 'Project Deadline',
      description: 'Final submission deadline for Q4 marketing campaign',
      date: new Date(2024, 11, 20),
      startTime: '17:00',
      endTime: '17:00',
      type: 'deadline',
      color: 'bg-red-500',
    },
    {
      id: '4',
      title: 'Product Launch',
      description: 'Official launch of new product line with press release',
      date: new Date(2024, 11, 22),
      startTime: '09:00',
      endTime: '18:00',
      type: 'event',
      location: 'Main Office',
      attendees: ['Marketing Team', 'Press', 'Partners'],
      color: 'bg-purple-500',
    },
    {
      id: '5',
      title: 'Follow-up Call',
      description: 'Follow-up call with potential investor',
      date: new Date(2024, 11, 16),
      startTime: '16:00',
      endTime: '16:30',
      type: 'appointment',
      color: 'bg-yellow-500',
    },
    // More upcoming events
    {
      id: '6',
      title: 'Board Meeting',
      description: 'Monthly board meeting to review company performance',
      date: new Date(2024, 11, 25),
      startTime: '13:00',
      endTime: '15:00',
      type: 'meeting',
      location: 'Board Room',
      attendees: ['Board Members', 'Executive Team'],
      color: 'bg-blue-500',
    },
    {
      id: '7',
      title: 'Training Session',
      description: 'New employee onboarding and system training',
      date: new Date(2024, 11, 26),
      startTime: '10:00',
      endTime: '12:00',
      type: 'event',
      location: 'Training Room',
      attendees: ['New Hires', 'HR Team'],
      color: 'bg-purple-500',
    },
    {
      id: '8',
      title: 'Vendor Meeting',
      description: 'Discuss new partnership opportunities with vendors',
      date: new Date(2024, 11, 27),
      startTime: '11:00',
      endTime: '12:00',
      type: 'appointment',
      location: 'Meeting Room B',
      attendees: ['Procurement Team', 'Vendor Representatives'],
      color: 'bg-green-500',
    },
    {
      id: '9',
      title: 'Code Review',
      description: 'Weekly code review session for development team',
      date: new Date(2024, 11, 28),
      startTime: '15:00',
      endTime: '16:00',
      type: 'meeting',
      location: 'Dev Room',
      attendees: ['Development Team', 'Tech Lead'],
      color: 'bg-blue-500',
    },
    {
      id: '10',
      title: 'Budget Review',
      description: 'Monthly budget review and financial planning',
      date: new Date(2024, 11, 29),
      startTime: '14:00',
      endTime: '16:00',
      type: 'meeting',
      location: 'Finance Office',
      attendees: ['Finance Team', 'Department Heads'],
      color: 'bg-blue-500',
    },
    {
      id: '11',
      title: 'Customer Feedback Session',
      description: 'Gather feedback from key customers',
      date: new Date(2024, 11, 30),
      startTime: '10:00',
      endTime: '11:30',
      type: 'appointment',
      location: 'Customer Lounge',
      attendees: ['Customer Success Team', 'Key Customers'],
      color: 'bg-green-500',
    },
    {
      id: '12',
      title: 'Inventory Check',
      description: 'Monthly inventory audit and stock verification',
      date: new Date(2024, 12, 1),
      startTime: '09:00',
      endTime: '17:00',
      type: 'reminder',
      location: 'Warehouse',
      attendees: ['Warehouse Team', 'Inventory Manager'],
      color: 'bg-yellow-500',
    },
    {
      id: '13',
      title: 'Marketing Campaign Review',
      description: 'Review performance of current marketing campaigns',
      date: new Date(2024, 12, 2),
      startTime: '13:00',
      endTime: '14:30',
      type: 'meeting',
      location: 'Marketing Office',
      attendees: ['Marketing Team', 'Analytics Team'],
      color: 'bg-blue-500',
    },
    {
      id: '14',
      title: 'IT Maintenance',
      description: 'Scheduled system maintenance and updates',
      date: new Date(2024, 12, 3),
      startTime: '22:00',
      endTime: '02:00',
      type: 'reminder',
      location: 'Data Center',
      attendees: ['IT Team', 'System Administrators'],
      color: 'bg-yellow-500',
    },
    {
      id: '15',
      title: 'Sales Team Lunch',
      description: 'Monthly team building lunch for sales department',
      date: new Date(2024, 12, 4),
      startTime: '12:00',
      endTime: '13:30',
      type: 'event',
      location: 'Company Cafeteria',
      attendees: ['Sales Team', 'Sales Manager'],
      color: 'bg-purple-500',
    },
  ]);

  const eventTypes = [
    { value: 'meeting', label: 'Meeting', color: 'bg-blue-500' },
    { value: 'appointment', label: 'Appointment', color: 'bg-green-500' },
    { value: 'reminder', label: 'Reminder', color: 'bg-yellow-500' },
    { value: 'deadline', label: 'Deadline', color: 'bg-red-500' },
    { value: 'event', label: 'Event', color: 'bg-purple-500' },
  ];

  const getEventTypeColor = (type: string) => {
    const eventType = eventTypes.find((et) => et.value === type);
    return eventType?.color || 'bg-gray-500';
  };

  const getEventTypeLabel = (type: string) => {
    const eventType = eventTypes.find((et) => et.value === type);
    return eventType?.label || 'Event';
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + direction,
        1,
      ),
    );
  };

  const navigateWeek = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    return { daysInMonth, startingDay };
  };

  const getWeekDates = (date: Date) => {
    const current = new Date(date);
    const week = [];
    const day = current.getDay();
    const diff = current.getDate() - day;

    for (let i = 0; i < 7; i++) {
      week.push(new Date(current.setDate(diff + i)));
    }
    return week;
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString(),
    );
  };

  const getRecentEvents = () => {
    const today = new Date();
    return events
      .filter((event) => event.date < today)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 5);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return events
      .filter((event) => event.date >= today)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, 5);
  };

  const getFilteredEvents = () => {
    if (!searchQuery) return events;
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.type.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  const renderMonthView = () => {
    const { daysInMonth, startingDay } = getDaysInMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="bg-inner-card border-inner-card-border h-32"
        ></div>,
      );
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day,
      );
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <div
          key={day}
          className={`border-inner-card-border h-32 border-r border-b p-2 ${
            isToday ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-card-background'
          }`}
        >
          <div className="mb-1 flex items-center justify-between">
            <span
              className={`text-sm font-medium ${
                isToday
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-font-primary'
              }`}
            >
              {day}
            </span>
            {dayEvents.length > 0 && (
              <Badge color="gray" size="sm" className="text-xs">
                {dayEvents.length}
              </Badge>
            )}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map((event) => (
              <div
                key={event.id}
                onClick={() => {
                  setSelectedEvent(event);
                  setShowEventDetails(true);
                }}
                className={`${event.color} cursor-pointer truncate rounded p-1 text-xs text-white hover:opacity-80`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-font-light text-xs">
                +{dayEvents.length - 3} more
              </div>
            )}
          </div>
        </div>,
      );
    }

    return (
      <div className="border-inner-card-border grid grid-cols-7 gap-0 border-t border-l">
        {days}
      </div>
    );
  };

  const renderWeekView = () => {
    const weekDates = getWeekDates(currentDate);
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className="space-y-4">
        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-4">
          {dayNames.map((day, index) => {
            const date = weekDates[index];
            const isToday = date.toDateString() === new Date().toDateString();
            return (
              <div key={day} className="text-center">
                <div
                  className={`text-sm font-medium ${
                    isToday
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-font-light'
                  }`}
                >
                  {day}
                </div>
                <div
                  className={`text-lg font-bold ${
                    isToday
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-font-primary'
                  }`}
                >
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Events for the week */}
        <div className="space-y-2">
          {getFilteredEvents()
            .filter((event) => {
              const eventDate = new Date(event.date);
              return weekDates.some(
                (weekDate) =>
                  weekDate.toDateString() === eventDate.toDateString(),
              );
            })
            .map((event) => (
              <div
                key={event.id}
                onClick={() => {
                  setSelectedEvent(event);
                  setShowEventDetails(true);
                }}
                className={`${event.color} cursor-pointer rounded-lg p-3 text-white hover:opacity-80`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm opacity-90">{event.description}</p>
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <FaClock className="opacity-80" />
                      <span>
                        {event.startTime} - {event.endTime}
                      </span>
                      {event.location && (
                        <>
                          <FaMapMarkerAlt className="opacity-80" />
                          <span>{event.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Badge color="gray" size="sm" className="text-xs">
                    {getEventTypeLabel(event.type)}
                  </Badge>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaCalendarAlt}>
          Calendar
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Events</BreadcrumbItem>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Main Calendar Section */}
        <div className="lg:col-span-3">
          <div className="bg-card-background border-inner-card-border rounded-2xl border p-6">
            {/* Calendar Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-font-primary text-2xl font-bold">
                  Calendar
                </h1>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => setViewMode('month')}
                    className={`px-3 py-1.5 text-sm ${
                      viewMode === 'month'
                        ? 'bg-purple dark:bg-purple text-white hover:bg-purple-700 dark:hover:bg-purple-700'
                        : 'bg-inner-card dark:bg-inner-card text-font-primary hover:bg-inner-card dark:hover:bg-inner-card border-inner-card-border border'
                    } focus:ring-0 focus:outline-none`}
                  >
                    Month
                  </Button>
                  <Button
                    onClick={() => setViewMode('week')}
                    className={`px-3 py-1.5 text-sm ${
                      viewMode === 'week'
                        ? 'bg-purple dark:bg-purple text-white hover:bg-purple-700 dark:hover:bg-purple-700'
                        : 'bg-inner-card dark:bg-inner-card text-font-primary hover:bg-inner-card dark:hover:bg-inner-card border-inner-card-border border'
                    } focus:ring-0 focus:outline-none`}
                  >
                    Week
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  onClick={() =>
                    viewMode === 'month' ? navigateMonth(-1) : navigateWeek(-1)
                  }
                  className="bg-inner-card dark:bg-inner-card text-font-primary hover:bg-inner-card dark:hover:bg-inner-card border-inner-card-border border"
                >
                  <FaChevronLeft className="text-sm" />
                </Button>

                <span className="text-font-primary min-w-[120px] text-center font-semibold">
                  {viewMode === 'month'
                    ? currentDate.toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric',
                      })
                    : `Week of ${currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                </span>

                <Button
                  onClick={() =>
                    viewMode === 'month' ? navigateMonth(1) : navigateWeek(1)
                  }
                  className="bg-inner-card dark:bg-inner-card text-font-primary hover:bg-inner-card dark:hover:bg-inner-card border-inner-card-border border"
                >
                  <FaChevronRight className="text-sm" />
                </Button>

                <Button
                  onClick={() => setShowEventModal(true)}
                  className="bg-purple dark:bg-purple text-white hover:bg-purple-700 focus:ring-0 focus:outline-none dark:hover:bg-purple-700"
                >
                  <FaPlus className="mr-2" />
                  Add Event
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            {viewMode === 'month' ? renderMonthView() : renderWeekView()}
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Search */}
          <SearchCard
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Quick Stats */}
          <StatsCard events={events} />

          {/* Recent Events */}
          <EventsListCard
            title="Recent Events"
            icon={<FaClock className="text-purple" />}
            events={getRecentEvents()}
            onEventClick={handleEventClick}
            showTime={false}
          />

          {/* Upcoming Events */}
          <EventsListCard
            title="Upcoming Events"
            icon={<FaBell className="text-purple" />}
            events={getUpcomingEvents()}
            onEventClick={handleEventClick}
            showTime={true}
          />
        </div>
      </div>

      {/* Event Details Modal */}
      <Modal
        show={showEventDetails}
        onClose={() => setShowEventDetails(false)}
        size="xl"
        theme={{
          content: {
            base: 'relative h-full w-full p-6 md:h-auto',
            inner:
              'relative flex max-h-[95vh] w-full max-w-4xl flex-col bg-card-background dark:bg-card-background rounded-lg shadow dark:shadow-gray-700',
          },
          header: {
            base: 'flex items-start justify-between rounded-t border-b border-inner-card-border p-6',
            title:
              'text-2xl font-semibold text-font-primary dark:text-font-primary',
            close: {
              base: 'ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
              icon: 'h-3 w-3',
            },
          },
          body: {
            base: 'relative p-6',
          },
          footer: {
            base: 'flex items-center space-x-3 rounded-b border-t border-inner-card-border p-6',
          },
        }}
      >
        <ModalHeader className="border-inner-card-border">
          <div className="flex items-center gap-3">
            <div
              className={`h-4 w-4 rounded-full ${selectedEvent?.color}`}
            ></div>
            <span className="text-font-primary font-semibold">
              {selectedEvent?.title}
            </span>
          </div>
        </ModalHeader>
        <ModalBody>
          {selectedEvent && (
            <div className="space-y-6">
              <div>
                <h4 className="text-font-primary mb-3 text-lg font-semibold">
                  Description
                </h4>
                <p className="text-font-light leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-font-primary mb-3 text-lg font-semibold">
                    Date & Time
                  </h4>
                  <div className="text-font-light space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <FaCalendarAlt className="text-purple text-lg" />
                      <span>
                        {selectedEvent.date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-purple text-lg" />
                      <span>
                        {selectedEvent.startTime} - {selectedEvent.endTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-font-primary mb-3 text-lg font-semibold">
                    Details
                  </h4>
                  <div className="text-font-light space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Badge color="gray" size="sm">
                        {getEventTypeLabel(selectedEvent.type)}
                      </Badge>
                    </div>
                    {selectedEvent.location && (
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-purple text-lg" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    )}
                    {selectedEvent.attendees &&
                      selectedEvent.attendees.length > 0 && (
                        <div className="flex items-center gap-3">
                          <FaUsers className="text-purple text-lg" />
                          <span>
                            {selectedEvent.attendees.length} attendees
                          </span>
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {selectedEvent.attendees &&
                selectedEvent.attendees.length > 0 && (
                  <div>
                    <h4 className="text-font-primary mb-3 text-lg font-semibold">
                      Attendees
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedEvent.attendees.map((attendee, index) => (
                        <Badge key={index} color="gray" size="sm">
                          {attendee}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </ModalBody>
        <ModalFooter className="border-inner-card-border">
          <div className="flex gap-3">
            <Button
              onClick={() => {
                setShowEventDetails(false);
                setShowEventModal(true);
              }}
              className="bg-purple dark:bg-purple px-6 py-2.5 text-white hover:bg-purple-700 focus:ring-0 focus:outline-none dark:hover:bg-purple-700"
            >
              <FaEdit className="mr-2" />
              Edit Event
            </Button>
            <Button
              onClick={() => setShowEventDetails(false)}
              className="bg-inner-card dark:bg-inner-card text-font-primary hover:bg-inner-card dark:hover:bg-inner-card border-inner-card-border border px-6 py-2.5 focus:ring-0 focus:outline-none"
            >
              Close
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      {/* Create/Edit Event Modal */}
      <Modal
        show={showEventModal}
        onClose={() => setShowEventModal(false)}
        size="2xl"
        theme={{
          content: {
            base: 'relative h-full w-full p-6 md:h-auto',
            inner:
              'relative flex max-h-[95vh] w-full flex-col bg-card-background dark:bg-card-background rounded-lg shadow dark:shadow-gray-700',
          },
          header: {
            base: 'flex items-start justify-between rounded-t border-b border-inner-card-border p-6',
            title:
              'text-2xl font-semibold text-font-primary dark:text-font-primary',
            close: {
              base: 'ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
              icon: 'h-3 w-3',
            },
          },
          body: {
            base: 'relative p-6',
          },
          footer: {
            base: 'flex items-center space-x-3 rounded-b border-t border-inner-card-border p-6',
          },
        }}
      >
        <ModalHeader className="border-inner-card-border">
          <span className="text-font-primary font-semibold">
            {selectedEvent ? 'Edit Event' : 'Create New Event'}
          </span>
        </ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  Event Title
                </label>
                <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-4 [&_input]:py-3 [&_input]:focus:ring-2">
                  <TextInput placeholder="Enter event title" />
                </div>
              </div>
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  Event Type
                </label>
                <div className="[&_select]:bg-inner-card [&_select]:dark:bg-inner-card [&_select]:text-font-primary [&_select]:focus:ring-purple [&_select]:rounded-lg [&_select]:border-0 [&_select]:px-4 [&_select]:py-3 [&_select]:focus:ring-2">
                  <Select>
                    {eventTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-font-primary mb-3 block text-base font-medium">
                Description
              </label>
              <div className="[&_textarea]:bg-inner-card [&_textarea]:dark:bg-inner-card [&_textarea]:text-font-primary [&_textarea]:placeholder:text-font-light [&_textarea]:focus:ring-purple [&_textarea]:min-h-[120px] [&_textarea]:rounded-lg [&_textarea]:border-0 [&_textarea]:px-4 [&_textarea]:py-3 [&_textarea]:focus:ring-2">
                <Textarea placeholder="Enter event description" rows={4} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  Date
                </label>
                <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-4 [&_input]:py-3 [&_input]:focus:ring-2">
                  <TextInput type="date" />
                </div>
              </div>
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  Start Time
                </label>
                <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-4 [&_input]:py-3 [&_input]:focus:ring-2">
                  <TextInput type="time" />
                </div>
              </div>
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  End Time
                </label>
                <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-4 [&_input]:py-3 [&_input]:focus:ring-2">
                  <TextInput type="time" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  Location (Optional)
                </label>
                <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-4 [&_input]:py-3 [&_input]:focus:ring-2">
                  <TextInput placeholder="Enter location" />
                </div>
              </div>
              <div>
                <label className="text-font-primary mb-3 block text-base font-medium">
                  Attendees (Optional)
                </label>
                <div className="[&_input]:bg-inner-card [&_input]:dark:bg-inner-card [&_input]:text-font-primary [&_input]:placeholder:text-font-light [&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:px-4 [&_input]:py-3 [&_input]:focus:ring-2">
                  <TextInput placeholder="Enter attendee names" />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="border-inner-card-border">
          <div className="flex gap-3">
            <Button
              onClick={() => setShowEventModal(false)}
              className="bg-purple dark:bg-purple px-6 py-2.5 text-white hover:bg-purple-700 focus:ring-0 focus:outline-none dark:hover:bg-purple-700"
            >
              {selectedEvent ? 'Update Event' : 'Create Event'}
            </Button>
            <Button
              onClick={() => setShowEventModal(false)}
              className="bg-inner-card dark:bg-inner-card text-font-primary hover:bg-inner-card dark:hover:bg-inner-card border-inner-card-border border px-6 py-2.5 focus:ring-0 focus:outline-none"
            >
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CalendarPage;
