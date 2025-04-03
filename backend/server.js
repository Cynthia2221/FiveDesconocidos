
const express = require("express");
const cors = require("cors");
require("dotenv").config();

var path = require("path");

const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const subjectRoutes = require('./routes/subject.routes');
app.use('/api/subjects', subjectRoutes);

const lessonRoutes = require('./routes/lesson.routes');
app.use('/api/lessons', lessonRoutes);

const levelRoutes = require('./routes/level.routes');
app.use('/api/levels', levelRoutes);

const reminderRoutes = require('./routes/reminder.routes');
app.use('/api/reminders', reminderRoutes);

app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

const db = require('./models')

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db");
});


require("./routes/site.routes")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application" });
});

// Middleware de manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: true, message: "Algo salió mal en el servidor." });
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;