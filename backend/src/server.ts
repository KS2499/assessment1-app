import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 5000;

app.get("/api/author_names", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(`got GET request`);
    const names = response.data.map((author) => author.name);
    res.json(names);
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ error: "Failed to fetch authors" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
