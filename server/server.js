const express = require("express");
const app = express();

// Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/add-news", require("./routes/news"));
app.use("/api/admin-department", require("./routes/department"));
app.use("/api/admin-specialty", require("./routes/specialty"));
app.use("/api/create-page", require("./routes/pages"));

// SPA
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
