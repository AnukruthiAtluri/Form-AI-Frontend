import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Header } from "../components";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, start, end } = newEvent;
    if (title && start && end) {
      handleAddEvent({
        title,
        start: new Date(start),
        end: new Date(end),
        allDay: false,
      });
      setNewEvent({ title: "", start: "", end: "" }); // Reset form
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Calendar" title="Overview" />
      <div style={{ textAlign: "center", padding: "10px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gridGap: "10px",
            alignItems: "center",
          }}
        >
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="datetime-local"
            placeholder="Start Date"
            value={newEvent.start}
            onChange={(e) =>
              setNewEvent({ ...newEvent, start: e.target.value })
            }
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="datetime-local"
            placeholder="End Date"
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#0056b3",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add Event
          </button>
        </form>
      </div>
      <div style={{ height: "700px", margin: "10px 0" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
