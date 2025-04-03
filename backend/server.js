const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

const subjectRoutes = require('./routes/subject.routes');
app.use('/api/subjects', subjectRoutes);

const lessonRoutes = require('./routes/lesson.routes');
app.use('/api/lessons', lessonRoutes);

const levelRoutes = require('./routes/level.routes');
app.use('/api/levels', levelRoutes);

const reminderRoutes = require('./routes/reminder.routes');
app.use('/api/reminders', reminderRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
