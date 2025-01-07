import express from "express";
import process from "process";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  console.log(req.body);

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
