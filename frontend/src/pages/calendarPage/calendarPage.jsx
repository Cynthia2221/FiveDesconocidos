import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarStyle, {
  Title,
  ReminderTitle,
  ReminderInput,
  ReminderButton,
  ReminderList
} from "./calendarStyled";

export const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [reminders, setReminders] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const formatDateKey = (date) => date.toISOString().split("T")[0];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setEditingIndex(null); // exit editing when date changes
  };

  const handleAddReminder = () => {
    const dateKey = formatDateKey(selectedDate);
    if (!inputValue.trim()) return;

    setReminders((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), inputValue]
    }));
    setInputValue("");
  };

  const handleDeleteReminder = (index) => {
    const dateKey = formatDateKey(selectedDate);
    setReminders((prev) => {
      const updated = [...(prev[dateKey] || [])];
      updated.splice(index, 1);
      return { ...prev, [dateKey]: updated };
    });
  };

  const handleEditReminder = (index) => {
    setEditingIndex(index);
    setEditValue(currentReminders[index]);
  };

  const handleSaveEdit = () => {
    const dateKey = formatDateKey(selectedDate);
    setReminders((prev) => {
      const updated = [...(prev[dateKey] || [])];
      updated[editingIndex] = editValue;
      return { ...prev, [dateKey]: updated };
    });
    setEditingIndex(null);
    setEditValue("");
  };

  const currentReminders = reminders[formatDateKey(selectedDate)] || [];

  return (
    <div>
      <Title>Calendar Page</Title>
      <CalendarStyle>
        <Calendar onClickDay={handleDateClick} value={selectedDate} />
      </CalendarStyle>

      <ReminderTitle>
        Reminders for {formatDateKey(selectedDate)}
      </ReminderTitle>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <ReminderInput
          type="text"
          placeholder="Add reminder..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ReminderButton onClick={handleAddReminder}>Add</ReminderButton>
      </div>

      <ReminderList>
        {currentReminders.map((reminder, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {editingIndex === index ? (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <ReminderInput
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <ReminderButton onClick={handleSaveEdit}>Save</ReminderButton>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span>{reminder}</span>
                <ReminderButton onClick={() => handleEditReminder(index)}>
                  Edit
                </ReminderButton>
                <ReminderButton onClick={() => handleDeleteReminder(index)}>
                  Delete
                </ReminderButton>
              </div>
            )}
          </li>
        ))}
      </ReminderList>
    </div>
  );
};

export default CalendarPage;
