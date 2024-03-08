import express from "express";
import axios from "axios";

const app = express();
const PORT = 5000;

app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
