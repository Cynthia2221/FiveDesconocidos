
const express = require("express");
const cors = require("cors");
require("dotenv").config();

var path = require("path");

const app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const reminderRoutes = require('./routes/reminder.routes');
app.use('/api/reminders', reminderRoutes);

app.use(express.urlencoded({ extended: true }));


const db = require('./models')

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db");
});

require("./routes/site.routes")(app);
require("./routes/user.routes")(app);
require("./routes/lesson.routes")(app);
require("./routes/level.routes")(app)
require("./routes/subject.routes")(app)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;