const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rootRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1", rootRouter);

app.get("/test", async (req, res) => {
  res.json("ok");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
