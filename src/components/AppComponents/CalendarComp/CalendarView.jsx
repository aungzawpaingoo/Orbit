import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, RadioGroup, FormControlLabel, Radio, Box, Typography } from "@mui/material";
import { EventAvailable } from "@mui/icons-material";

const localizer = momentLocalizer(moment);

const availableRooms = ["Room A", "Room B", "Room C"];

const CalendarView = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", start: new Date(2025, 0, 3, 10, 0), end: new Date(2025, 0, 3, 11, 0), location: "Online" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    locationType: "online",
    location: "",
  });

  const handleEventDrop = ({ event, start, end }) => {
    const updatedEvents = events.map((e) => (e === event ? { ...e, start, end } : e));
    setEvents(updatedEvents);
  };

  const handleSelect = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setNewEvent({
      title: "",
      start: new Date(),
      end: new Date(),
      locationType: "online",
      location: "",
    });
  };

  const handleSubmit = () => {
    if (newEvent.title.trim() !== "") {
      setEvents([...events, { ...newEvent }]);
      handleClose();
    }
  };

  const eventStyleGetter = () => ({
    style: {
      backgroundColor: "#3B82F6",
      color: "#ffffff",
      borderRadius: "8px",
      padding: "6px",
    },
  });

  const eventRender = ({ event }) => (
    <Box className="flex items-center space-x-2">
      <EventAvailable className="text-white" fontSize="small" />
      <Typography variant="body2" className="text-white">
        {event.title}
      </Typography>
    </Box>
  );

  return (
    <div className="w-full flex flex-col bg-white">
      <Box className="w-full bg-white shadow-lg rounded-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "70vh" }}
          selectable
          draggableAccessor={() => true}
          onSelectSlot={handleSelect}
          onEventDrop={handleEventDrop}
          views={["month", "week", "day"]}
          eventPropGetter={eventStyleGetter}
          components={{
            event: eventRender,
          }}
        />
      </Box>

      {/* Modal for adding events */}
      <Dialog open={modalOpen} onClose={handleClose}>
        <DialogTitle className="font-bold text-[#3B82F6]">Add New Event</DialogTitle>
        <DialogContent className="flex flex-col space-y-4">
          <TextField
            label="Event Name"
            variant="outlined"
            fullWidth
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <TextField
            label="Start Time"
            type="datetime-local"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
          />
          <TextField
            label="End Time"
            type="datetime-local"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
          />
          <RadioGroup
            value={newEvent.locationType}
            onChange={(e) => setNewEvent({ ...newEvent, locationType: e.target.value, location: "" })}
          >
            <FormControlLabel value="online" control={<Radio />} label="Online" />
            <FormControlLabel value="inperson" control={<Radio />} label="In Person" />
          </RadioGroup>
          {newEvent.locationType === "inperson" && (
            <TextField
              select
              label="Room"
              fullWidth
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            >
              {availableRooms.map((room) => (
                <MenuItem key={room} value={room}>
                  {room}
                </MenuItem>
              ))}
            </TextField>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" className="bg-[#3B82F6] text-white">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CalendarView;
