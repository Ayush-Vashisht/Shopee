const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.get("/test", async (req, res) => {
  res.json("ok");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
